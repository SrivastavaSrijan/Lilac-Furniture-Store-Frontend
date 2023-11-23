import {
  Close,
  GridViewOutlined,
  TuneOutlined,
  ViewDayOutlined,
} from '@mui/icons-material';
import {
  Badge,
  Box,
  Button,
  Checkbox,
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
import { useEffect, useState } from 'react';

import { formatMoney, SetState } from '@/lib';
import { useAllCategoriesQuery } from '@/lib/graphql';

import { IconButtonPopover, IFilters } from '.';

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
interface IProductFilterBarProps {
  meta: {
    minPrice: number | null;
    maxPrice: number | null;
    productsShown: number | null;
    productsCount: number | null;
  };
  handleApply: (config: IFilters) => void;
  setView: SetState<'card' | 'grid'>;
  view: 'card' | 'grid';
  handleClose: () => void;
  loading: boolean;
}
export const ProductFilterBar = ({
  handleApply: apply,
  handleClose,
  view,
  setView,
  loading,
  meta: { minPrice, maxPrice, productsShown, productsCount },
}: IProductFilterBarProps) => {
  const [localConfig, setLocalConfig] = useState<IFilters>({
    category: [],
    price: [],
    sort: 'name',
    applied: false,
  });
  const { data, loading: categoriesLoading } = useAllCategoriesQuery({
    variables: { if: true },
  });

  const handleCategoryChange = (event: SelectChangeEvent<string[]>) => {
    const { value } = event.target;
    setLocalConfig((prevOptions) => ({
      ...prevOptions,
      category: typeof value === 'string' ? value.split(',') : value,
      applied: true,
    }));
  };

  const handlePriceChange = (_event: Event, newValue: number | number[]) => {
    setLocalConfig((prevOptions) => ({
      ...prevOptions,
      price: newValue as number[],
      applied: true,
    }));
  };

  const handleAlignment = (
    _event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null,
  ) => {
    if (newAlignment) setView(newAlignment as 'card' | 'grid');
  };

  const handleSortChange = (
    event: React.MouseEvent<HTMLElement>,
    newSort: string | null,
  ) => {
    if (newSort !== null) {
      setLocalConfig((old) => ({
        ...old,
        sort: newSort as 'name' | 'price',
        applied: true,
      }));
    }
  };

  const handleApply = () => {
    apply(localConfig);
  };

  const handleClear = () => {
    const clearConfig: IFilters = {
      category: [],
      price: [],
      sort: 'name',
      applied: false,
    };
    setLocalConfig(clearConfig);
    apply(clearConfig);
  };

  useEffect(() => {
    if (maxPrice && minPrice && localConfig.price.length === 0)
      setLocalConfig((old) => ({ ...old, price: [minPrice, maxPrice] }));
  }, [localConfig.price.length, maxPrice, minPrice]);

  return (
    <Stack bgcolor="primary.light" py={{ xs: 2, md: 3 }}>
      <Container maxWidth="md">
        <Stack
          direction="row"
          alignItems="center"
          gap={{ xs: 2, md: 0 }}
          justifyContent={{ xs: 'center', md: 'space-between' }}
        >
          <Stack direction="row" alignItems="center">
            <Stack
              gap={{ xs: 2, md: 3 }}
              direction="row"
              alignItems="center"
              flexWrap={{ xs: 'wrap', md: 'nowrap' }}
              justifyContent={{ xs: 'center', md: 'flex-start' }}
            >
              <Stack direction="row" alignItems="center">
                <IconButtonPopover
                  name="localConfig"
                  Icon={
                    <Badge
                      badgeContent={localConfig.applied ? 1 : 0}
                      variant="dot"
                    >
                      <Button
                        size="medium"
                        variant="contained"
                        color="primary"
                        startIcon={<TuneOutlined />}
                      >
                        Filter
                      </Button>
                    </Badge>
                  }
                  slotProps={{ paper: { sx: { borderRadius: 2, mt: 1 } } }}
                  isButton
                >
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
                      {!maxPrice ||
                      !minPrice ||
                      categoriesLoading ||
                      loading ? (
                        <Stack
                          bgcolor="primary.light"
                          minHeight={{ xs: 196, md: 196 }}
                        >
                          <Skeleton width={196} height={28} />
                          <Skeleton width={196} height={48} />
                          <Skeleton width={128} height={28} />
                          <Skeleton width={128} height={54} />
                          <Skeleton width={128} height={28} />
                          <Skeleton width={196} height={36} />
                        </Stack>
                      ) : (
                        <>
                          <Stack gap={1}>
                            {/* Sort Toggle Button */}
                            <Typography variant="body2" fontWeight={500}>
                              Sort By
                            </Typography>
                            <ToggleButtonGroup
                              value={localConfig.sort}
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
                              <InputLabel id="category-localConfig-label">
                                Category
                              </InputLabel>
                              <Select<string[]>
                                size="small"
                                labelId="category-localConfig-label"
                                id="category-localConfig"
                                multiple
                                disabled={loading}
                                value={localConfig.category}
                                onChange={handleCategoryChange}
                                label="Category"
                                sx={{
                                  [`.${filledInputClasses.input}`]: {
                                    fontSize: 14,
                                  },
                                }}
                                renderValue={(selected) => (
                                  <Typography variant="body2" noWrap>
                                    {(data?.categories ?? [])
                                      .filter((category) =>
                                        selected.some(
                                          (val) => category.slug === val,
                                        ),
                                      )
                                      .map((val) => val.name)
                                      .join(', ')}
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
                                        value={slug}
                                        disableGutters
                                      >
                                        <Checkbox
                                          value={slug}
                                          color="secondary"
                                          sx={{ svg: { fill: 'black' } }}
                                          checked={
                                            localConfig.category.indexOf(slug) >
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
                                {localConfig?.price &&
                                  formatMoney(localConfig?.price?.[0])}{' '}
                                &mdash;{' '}
                                {localConfig?.price &&
                                  formatMoney(localConfig?.price?.[1])}
                              </Typography>
                            </Stack>
                            <Slider
                              color="primary"
                              value={localConfig.price}
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
                        </>
                      )}
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
                      <Button
                        variant="contained"
                        disabled={loading}
                        onClick={handleApply}
                      >
                        Apply
                      </Button>
                      <Button
                        disabled={loading}
                        variant="outlined"
                        onClick={handleClear}
                      >
                        Clear
                      </Button>
                    </Stack>
                  </Stack>
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
                  <ToggleButton value="card" aria-label="Stack View">
                    <ViewDayOutlined fontSize="small" />
                  </ToggleButton>
                </ToggleButtonGroup>
              </Stack>
              <Divider
                flexItem
                variant="fullWidth"
                orientation="vertical"
                sx={{
                  borderColor: 'common.black',
                  display: { xs: 'none', md: 'block' },
                }}
              />
              <Stack>
                <Typography
                  sx={{ typography: { xs: 'body2', md: 'body1' } }}
                  fontWeight={300}
                >
                  {!productsCount || !productsShown || loading ? (
                    <Skeleton variant="text" width="20ch" />
                  ) : (
                    `Showing ${productsShown} of ${productsCount} products`
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
