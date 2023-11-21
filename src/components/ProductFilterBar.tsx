import {
  Close,
  GridViewOutlined,
  TuneOutlined,
  ViewDayOutlined,
} from '@mui/icons-material';
import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Container,
  Divider,
  filledInputClasses,
  FormControl,
  IconButton,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
  Skeleton,
  Slider,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import { useContext, useEffect, useState } from 'react';

import { formatMoney } from '@/lib';
import { useAllCategoriesQuery } from '@/lib/graphql';
import { CommonContext } from '@/lib/providers';

import { IconButtonPopover } from '.';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const calculateStep = (
  min: number | undefined | null,
  max: number | undefined | null,
) => {
  const range = (max ?? 100) - (min ?? 0);
  // Aim for around 100 steps in the slider
  const idealStepCount = 100;
  let step = Math.ceil(range / idealStepCount);

  // Round the step value to a 'nice' number for better UX
  const roundedStep = 10 ** Math.floor(Math.log10(step));
  step = Math.ceil(step / roundedStep) * roundedStep;

  return step;
};
interface IProductFilterBarProps {}
export const ProductFilterBar = (_props: IProductFilterBarProps) => {
  const [filterOptions, setFilterOptions] = useState<{
    category: string[];
    price: number[];
  }>({
    category: [],
    price: [20, 60], // Assuming this is the price range
  });
  const [sortOption, setSortOption] = useState<string>('featured');

  const { data, loading } = useAllCategoriesQuery({
    variables: { if: true },
  });

  const { state, dispatch } = useContext(CommonContext);
  const { minPrice, maxPrice, fetched, max } = state?.filters?.meta ?? {};

  const handleCategoryChange = (event: SelectChangeEvent<string[]>) => {
    const { value } = event.target;
    setFilterOptions((prevOptions) => ({
      ...prevOptions,
      category: typeof value === 'string' ? value.split(',') : value,
    }));
  };

  const handlePriceChange = (_event: Event, newValue: number | number[]) => {
    setFilterOptions((prevOptions) => ({
      ...prevOptions,
      price: newValue as number[],
    }));
  };
  const [view, setView] = useState<'grid' | 'card'>('grid');

  const handleClose = () => {
    dispatch({ type: 'popover', payload: null });
  };

  const handleAlignment = (
    _event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null,
  ) => {
    if (newAlignment) setView(newAlignment as 'grid' | 'card');
  };

  const handleSortChange = (
    event: React.MouseEvent<HTMLElement>,
    newSort: string | null,
  ) => {
    if (newSort !== null) {
      setSortOption(newSort);
    }
  };

  const handleApply = () => {
    const { price, category } = filterOptions;
    dispatch({ type: 'filter-category', payload: category });
    dispatch({ type: 'filter-price', payload: price });
    dispatch({ type: 'filter-view', payload: view });
    dispatch({ type: 'popover', payload: null });
  };

  const handleClear = () => {
    dispatch({ type: 'filter-clear' });
    dispatch({ type: 'popover', payload: null });
  };

  useEffect(() => {
    if (maxPrice && minPrice)
      setFilterOptions((old) => ({ ...old, price: [minPrice, maxPrice] }));
  }, [maxPrice, minPrice]);

  return (
    <Stack bgcolor="primary.light" py={{ xs: 2, md: 3 }}>
      <Container maxWidth="md">
        <Stack
          direction="row"
          alignItems="center"
          flexWrap={{ xs: 'wrap', md: 'nowrap' }}
          gap={{ xs: 2, md: 0 }}
          justifyContent={{ xs: 'center', md: 'space-between' }}
        >
          <Stack direction="row" alignItems="center">
            <Stack gap={{ xs: 2, md: 3 }} direction="row" alignItems="center">
              <Stack direction="row" alignItems="center">
                <IconButtonPopover
                  name="filter"
                  Icon={
                    <Button
                      size="medium"
                      variant="contained"
                      color="primary"
                      startIcon={<TuneOutlined />}
                    >
                      Filter
                    </Button>
                  }
                  slotProps={{ paper: { sx: { borderRadius: 2, mt: 1 } } }}
                  isButton
                >
                  {!maxPrice || !minPrice || loading ? (
                    <Stack
                      px={{ xs: 2, md: 2 }}
                      py={{ xs: 1, md: 2 }}
                      justifyContent="center"
                      alignItems="center"
                      width={{ xs: 256, md: 256 }}
                      bgcolor="primary.light"
                      gap={2}
                    >
                      <CircularProgress size={24} />
                      <Typography variant="body2">Just a moment...</Typography>
                    </Stack>
                  ) : (
                    <Stack
                      px={{ xs: 2, md: 2 }}
                      py={{ xs: 1, md: 2 }}
                      gap={{ xs: 1, md: 2 }}
                      bgcolor="primary.light"
                      width={{ xs: 256, md: 256 }}
                    >
                      <Stack gap={1}>
                        <Stack
                          width="100%"
                          direction="row"
                          alignItems="center"
                          justifyContent="space-between"
                        >
                          <Typography variant="subtitle2">Filter</Typography>
                          <IconButton onClick={handleClose}>
                            <Close />
                          </IconButton>
                        </Stack>
                        <Divider
                          flexItem
                          variant="fullWidth"
                          sx={{ mx: { xs: -2, md: -2 } }}
                        />
                      </Stack>
                      <Stack gap={{ xs: 2, md: 3 }}>
                        <Stack gap={1}>
                          {/* Sort Toggle Button */}
                          <Typography variant="body2" fontWeight={500}>
                            Sort By
                          </Typography>
                          <ToggleButtonGroup
                            value={sortOption}
                            color="primary"
                            exclusive
                            size="small"
                            onChange={handleSortChange}
                            aria-label="Sort options"
                          >
                            <ToggleButton
                              value="featured"
                              aria-label="Featured"
                            >
                              Name
                            </ToggleButton>
                            <ToggleButton value="price" aria-label="Price">
                              Price
                            </ToggleButton>
                            {/* ... more sort options */}
                          </ToggleButtonGroup>
                        </Stack>
                        <Stack gap={1}>
                          <Typography variant="body2" fontWeight={500}>
                            Filter by Category
                          </Typography>
                          <FormControl variant="standard" size="small">
                            <InputLabel id="category-filter-label">
                              Category
                            </InputLabel>
                            <Select<string[]>
                              size="small"
                              labelId="category-filter-label"
                              id="category-filter"
                              multiple
                              disabled={loading}
                              value={filterOptions.category}
                              onChange={handleCategoryChange}
                              label="Category"
                              sx={{
                                [`.${filledInputClasses.input}`]: {
                                  fontSize: 14,
                                },
                              }}
                              renderValue={(selected) => (
                                <Typography variant="body2" noWrap>
                                  {selected.join(', ')}
                                </Typography>
                              )}
                              MenuProps={MenuProps}
                            >
                              {(data?.categories ?? []).map(
                                ({ name, slug }) =>
                                  name &&
                                  slug && (
                                    <MenuItem
                                      key={slug}
                                      value={name}
                                      disableGutters
                                    >
                                      <Checkbox
                                        value={slug}
                                        color="secondary"
                                        sx={{ svg: { fill: 'black' } }}
                                        checked={
                                          filterOptions.category.indexOf(name) >
                                          -1
                                        }
                                      />
                                      <ListItemText
                                        primary={
                                          <Typography variant="body2">
                                            {name}
                                          </Typography>
                                        }
                                      />
                                    </MenuItem>
                                  ),
                              )}
                            </Select>
                          </FormControl>
                        </Stack>

                        <Stack gap={1}>
                          {/* Price Filter */}
                          <Stack
                            direction="row"
                            alignContent="center"
                            width="100%"
                          >
                            <Typography
                              id="price-range-slider"
                              variant="body2"
                              fontWeight={500}
                            >
                              Budget
                            </Typography>
                            <Box flexGrow={1} />
                            <Typography variant="body2" fontWeight={500}>
                              {filterOptions?.price &&
                                formatMoney(filterOptions?.price?.[0])}{' '}
                              &mdash;{' '}
                              {filterOptions?.price &&
                                formatMoney(filterOptions?.price?.[1])}
                            </Typography>
                          </Stack>
                          <Slider
                            color="primary"
                            value={filterOptions.price}
                            onChange={handlePriceChange}
                            disabled={!minPrice || !maxPrice}
                            valueLabelDisplay="auto"
                            aria-labelledby="price-range-slider"
                            min={minPrice ?? 0}
                            valueLabelFormat={(val) => formatMoney(val)}
                            size="small"
                            step={calculateStep(minPrice, maxPrice)}
                            max={maxPrice ?? 100}
                          />
                        </Stack>
                      </Stack>
                      <Divider
                        flexItem
                        variant="fullWidth"
                        sx={{ mx: { xs: -2, md: -2 } }}
                      />
                      <Stack
                        direction="row"
                        width="100%"
                        justifyContent="space-evenly"
                        py={{ xs: 0, md: 0 }}
                        gap={1}
                      >
                        <Button variant="contained" onClick={handleApply}>
                          Apply
                        </Button>
                        <Button variant="outlined" onClick={handleClear}>
                          Clear
                        </Button>
                      </Stack>
                    </Stack>
                  )}
                </IconButtonPopover>
              </Stack>
              <Stack direction="row" alignItems="baseline">
                <ToggleButtonGroup
                  color="primary"
                  value={view}
                  exclusive
                  onChange={handleAlignment}
                  aria-label="Product View"
                  size="small"
                >
                  <ToggleButton value="grid" aria-label="Grid View">
                    <GridViewOutlined fontSize="small" />
                  </ToggleButton>{' '}
                  <ToggleButton value="stack" aria-label="Stack View">
                    <ViewDayOutlined fontSize="small" />
                  </ToggleButton>
                </ToggleButtonGroup>
              </Stack>
              <Divider
                flexItem
                variant="fullWidth"
                orientation="vertical"
                sx={{ borderColor: 'common.black' }}
              />
              <Stack>
                <Typography
                  sx={{ typography: { xs: 'body2', md: 'body1' } }}
                  fontWeight={300}
                >
                  {!fetched || !max ? (
                    <Skeleton variant="text" width="20ch" />
                  ) : (
                    `Showing ${fetched} of ${max} products`
                  )}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};
