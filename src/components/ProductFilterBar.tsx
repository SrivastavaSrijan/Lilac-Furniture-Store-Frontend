import {
  GridViewOutlined,
  TuneOutlined,
  ViewDayOutlined,
} from '@mui/icons-material';
import {
  Button,
  Container,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Slider,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import { useState } from 'react';

import { IconButtonPopover } from '.';

interface IProductFilterBarProps {}
export const ProductFilterBar = (_props: IProductFilterBarProps) => {
  const [filterOptions, setFilterOptions] = useState<{
    category?: string;
    price?: number[];
  }>({
    category: '',
    price: [20, 60], // Assuming this is the price range
  });

  const [sortOption, setSortOption] = useState<string>('featured');

  const handleCategoryChange = (event: SelectChangeEvent) => {
    setFilterOptions((prevOptions) => ({
      ...prevOptions,
      category: event.target.value as string,
    }));
  };

  const handlePriceChange = (event: Event, newValue: number | number[]) => {
    setFilterOptions((prevOptions) => ({
      ...prevOptions,
      price: newValue as number[],
    }));
  };
  const [view, setView] = useState<string | null>('grid');

  const handleAlignment = (
    _event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null,
  ) => {
    setView(newAlignment);
  };
  const handleSortChange = (
    event: React.MouseEvent<HTMLElement>,
    newSort: string | null,
  ) => {
    if (newSort !== null) {
      setSortOption(newSort);
    }
  };

  return (
    <Stack bgcolor="secondary.light" py={{ xs: 2, md: 3 }}>
      <Container maxWidth="md">
        <Stack
          direction="row"
          alignItems="center"
          flexWrap={{ xs: 'wrap', md: 'nowrap' }}
          gap={{ xs: 2, md: 0 }}
          justifyContent={{ xs: 'center', md: 'space-between' }}
        >
          <Stack direction="row" alignItems="center" order={{ xs: 2, md: 1 }}>
            <Stack gap={{ xs: 2, md: 3 }} direction="row" alignItems="center">
              <Stack direction="row" alignItems="center">
                <IconButtonPopover
                  name="filter"
                  Icon={
                    <Button
                      size="medium"
                      variant="contained"
                      color="secondary"
                      startIcon={<TuneOutlined />}
                    >
                      Filter
                    </Button>
                  }
                  slotProps={{ paper: { sx: { borderRadius: 2, mt: 1 } } }}
                  isButton
                >
                  <Stack
                    px={{ xs: 1, md: 2 }}
                    py={{ xs: 1, md: 2 }}
                    gap={{ xs: 1, md: 2 }}
                    bgcolor="secondary.light"
                    minWidth={{ xs: 256, md: 256 }}
                  >
                    <Stack gap={1}>
                      <Typography variant="subtitle2">Filter</Typography>
                      <Divider
                        flexItem
                        variant="fullWidth"
                        sx={{ mx: { xs: -1, md: -2 } }}
                      />
                    </Stack>
                    <Stack gap={{ xs: 2, md: 3 }}>
                      <Stack gap={1}>
                        {/* Sort Toggle Button */}
                        <Typography>Sort By</Typography>
                        <ToggleButtonGroup
                          value={sortOption}
                          color="secondary"
                          exclusive
                          size="medium"
                          onChange={handleSortChange}
                          aria-label="Sort options"
                        >
                          <ToggleButton value="featured" aria-label="Featured">
                            Featured
                          </ToggleButton>
                          <ToggleButton value="price" aria-label="Price">
                            Price
                          </ToggleButton>
                          {/* ... more sort options */}
                        </ToggleButtonGroup>
                      </Stack>
                      <Stack gap={1}>
                        <Typography>Filter by Category</Typography>
                        <FormControl variant="outlined" size="small">
                          <InputLabel id="category-filter-label">
                            Category
                          </InputLabel>
                          <Select
                            labelId="category-filter-label"
                            id="category-filter"
                            value={filterOptions.category}
                            onChange={handleCategoryChange}
                            label="Category"
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            {/* Add your categories here */}
                            <MenuItem value="furniture">Furniture</MenuItem>
                            <MenuItem value="decor">Decor</MenuItem>
                            {/* ... more categories */}
                          </Select>
                        </FormControl>
                      </Stack>

                      <Stack gap={1}>
                        {/* Price Filter */}
                        <Typography id="price-range-slider">Budget</Typography>
                        <Slider
                          color="secondary"
                          value={filterOptions.price}
                          onChange={handlePriceChange}
                          valueLabelDisplay="auto"
                          aria-labelledby="price-range-slider"
                          min={0}
                          max={100}
                        />
                      </Stack>
                    </Stack>
                  </Stack>
                </IconButtonPopover>
              </Stack>
              <Stack direction="row" alignItems="baseline">
                <ToggleButtonGroup
                  color="secondary"
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
                  Showing 1-16 of 337 results
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};
