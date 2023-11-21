import {
  CategoryOutlined,
  GridViewOutlined,
  TuneOutlined,
  ViewDayOutlined,
} from '@mui/icons-material';
import {
  Button,
  Container,
  darken,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  ToggleButton,
  toggleButtonClasses,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import { useState } from 'react';

import { IconButtonPopover } from '.';

interface IProductFilterBarProps {}
export const ProductFilterBar = (_props: IProductFilterBarProps) => {
  const [filterOptions, setFilterOptions] = useState<
    Record<'category' | 'price', string | null>
  >({
    category: null,
    price: null,
  });
  const [paginationOptions, setPaginationOptions] = useState<
    Record<'limit' | 'sort', string | null>
  >({
    limit: '12',
    sort: null,
  });
  const [view, setView] = useState<string | null>('grid');

  const handleAlignment = (
    _event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null,
  ) => {
    setView(newAlignment);
  };

  const handleFilterChange = (ev: SelectChangeEvent<string | null>) => {
    const {
      target: { value, name },
    } = ev;
    setFilterOptions((old) => ({ ...old, [name]: value }));
  };

  const handlePaginationChange = (ev: SelectChangeEvent<string | null>) => {
    const {
      target: { value, name },
    } = ev;
    setPaginationOptions((old) => ({ ...old, [name]: value }));
  };

  return (
    <Stack bgcolor="secondary.light" py={{ xs: 2, md: 3 }}>
      <Container maxWidth="lg">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack direction="row" alignItems="center">
            <Stack gap={{ xs: 2, md: 3 }} direction="row" alignItems="center">
              <Stack direction="row" alignItems="center">
                <IconButtonPopover
                  name="filter"
                  Icon={
                    <Button
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
                  >
                    <Stack gap={1}>
                      <Typography variant="subtitle2">Filter</Typography>
                      <Divider flexItem variant="fullWidth" />
                    </Stack>
                    <Stack gap={{ xs: 2, md: 3 }}>
                      <FormControl sx={{ m: 1, minWidth: 196 }}>
                        <InputLabel id="category-select">
                          Filter by Category
                        </InputLabel>
                        <Select
                          labelId="category-select"
                          id="category-select-filter"
                          value={filterOptions.category}
                          onChange={handleFilterChange}
                          label="Filter by Category"
                          name="category"
                          color="secondary"
                          startAdornment={<CategoryOutlined />}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>
                    </Stack>
                  </Stack>
                </IconButtonPopover>
              </Stack>
              <Stack direction="row" alignItems="center">
                <ToggleButtonGroup
                  value={view}
                  exclusive
                  onChange={handleAlignment}
                  aria-label="Product View"
                  size="small"
                  sx={(theme) => ({
                    [`& .${toggleButtonClasses.root}.${toggleButtonClasses.selected}`]:
                      {
                        bgcolor: 'secondary.main',
                        color: 'secondary.light',
                        '&:hover, &:focus, &:active': {
                          bgcolor: darken(theme.palette.secondary.main, 0.2),
                        },
                      },
                  })}
                >
                  <ToggleButton value="grid" aria-label="Grid View">
                    <GridViewOutlined />
                  </ToggleButton>{' '}
                  <ToggleButton value="stack" aria-label="Stack View">
                    <ViewDayOutlined />
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
                <Typography variant="body1" fontWeight={300}>
                  Showing 1-16 of 337 results
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack direction="row" gap={{ xs: 2, md: 3 }}>
            <FormControl sx={{ m: 1, minWidth: 96 }} variant="outlined">
              <InputLabel id="limit-select-label">Show</InputLabel>
              <Select
                labelId="limit-select-label"
                id="limit-select"
                name="limit"
                value={paginationOptions.limit}
                onChange={handlePaginationChange}
                label="Show"
                color="secondary"
              >
                <MenuItem value={12}>12 items</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 96 }} variant="outlined">
              <InputLabel id="limit-select-label">Sort By</InputLabel>
              <Select
                labelId="sort-select-label"
                id="sort-select"
                name="sort"
                value={paginationOptions.sort}
                onChange={handlePaginationChange}
                label="Sort By"
                color="secondary"
              >
                <MenuItem value={12}>12 items</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};
