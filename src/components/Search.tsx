import { SearchOutlined } from '@mui/icons-material';
import {
  alpha,
  ButtonBase,
  lighten,
  Popover,
  Skeleton,
  skeletonClasses,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { kebabCase } from 'lodash';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

import {
  AppConfig,
  formatMoney,
  generateMockArray,
  generateSizes,
  useApolloErrorHandler,
  useDebounce,
} from '@/lib';
import { ISearchedProducts, useSearchProductsLazyQuery } from '@/lib/graphql';

import { CloudImage } from '.';

const { path } = AppConfig.pages.products;

interface ISearchProps {}
export const Search = (_props: ISearchProps) => {
  const [search, setSearch] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [debounceWaiting, setDebounceWaiting] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
  const [handleSearch, { data, loading, error }] = useSearchProductsLazyQuery();
  useApolloErrorHandler(error);
  const router = useRouter();

  // Debounced function using Lodash's debounce
  const performSearch = (query: string) => {
    setDebounceWaiting(false);
    handleSearch({ variables: { searchTerm: query, limit: 10 } });
    setSearchTerm(query);
  };

  const debouncedSearch = useDebounce(performSearch, 200);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handlePopoverOpen = () => {
    setAnchorEl(inputRef?.current);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (name: string | null) => (ev: React.MouseEvent) => {
    ev.preventDefault();
    if (!name) return;
    const route = path.replace('[id].tsx', kebabCase(name || '...'));
    handlePopoverClose();
    router.push(route).then(() => {
      setSearch('');
      setSearchTerm('EMPTY');
      inputRef?.current?.blur();
    });
  };

  const open = Boolean(anchorEl) && !!search;
  const fetching = loading || debounceWaiting;

  // Effect to trigger the debounced search function
  useEffect(() => {
    handlePopoverOpen();
    setDebounceWaiting(true);
    debouncedSearch(search || 'EMPTY');
    // Cleanup function to cancel the debounced call if the component unmounts
    return () => {
      debouncedSearch.cancel();
    };
  }, [search, debouncedSearch]);

  useEffect(() => {
    handlePopoverClose();
  }, []);

  return (
    <Stack width="100%">
      <TextField
        inputRef={inputRef}
        value={search}
        onChange={handleChange}
        fullWidth
        label={
          <Typography color="secondary.main" variant="caption">
            Search
          </Typography>
        }
        variant="filled"
        color="secondary"
        size="small"
        placeholder="e.g. Chair, Vintage, Modern, etc."
        InputProps={{
          id: 'search',
          onFocus: () => {
            if (searchTerm.length) handlePopoverOpen();
          },
          sx: { color: 'secondary.main' },
          endAdornment: <SearchOutlined fontSize="inherit" color="inherit" />,
        }}
        sx={(theme) => ({
          color: 'secondary.main',
          bgcolor: alpha(theme.palette.secondary.main, 0.2),
        })}
      />
      <Popover
        disableAutoFocus={true}
        disableEnforceFocus={true}
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        slotProps={{
          paper: {
            sx: (theme) => ({
              mt: 1,
              width: { xs: '100%', md: theme.breakpoints.values.sm },
              borderRadius: 0,
              maxHeight: 400,
              bgcolor: lighten(theme.palette.secondary.main, 0.2),
            }),
          },
        }}
      >
        <Stack gap={{ xs: 0.5, md: 1 }} flex={1} p={{ xs: 1, md: 1 }}>
          {!fetching && !data?.products?.length && (
            <Typography py={2} variant="caption" color="secondary.contrastText">
              No results found
            </Typography>
          )}
          {(fetching
            ? generateMockArray(10)
            : (data?.products?.filter(Boolean) as ISearchedProducts)
          )?.map((product, index) => {
            const {
              id = index,
              name,
              image,
              type,
              style,
              company,
              variant,
            } = product ?? {};
            const { price } = variant ?? {};
            const imageURL = image?.image?.publicUrlTransformed ?? null;
            return (
              <ButtonBase
                key={id}
                sx={fetching ? { pointerEvents: 'none' } : {}}
                onClick={handleNavigate(name ?? null)}
              >
                <Stack
                  flex={1}
                  border={1}
                  onClick={handlePopoverClose}
                  borderColor="primary.light"
                  bgcolor="primary.main"
                  color="primary.contrastText"
                  sx={(theme) => ({
                    [`& .${skeletonClasses.root}`]: {
                      backgroundColor: alpha(theme.palette.secondary.main, 0.5),
                    },
                  })}
                >
                  <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    gap={{ xs: 2, md: 3 }}
                  >
                    <Stack
                      position="relative"
                      width={{ xs: 64, md: 96 }}
                      height={{ xs: 128, md: 136 }}
                    >
                      {imageURL && name ? (
                        <CloudImage
                          src={imageURL}
                          fill
                          sizes={generateSizes({ xs: 3, md: 4 })}
                          alt={name}
                          style={{ objectFit: 'cover' }}
                        />
                      ) : (
                        <Skeleton variant="rectangular" height="100%" />
                      )}
                    </Stack>
                    <Stack py={{ xs: 1, md: 2 }}>
                      {!name ? (
                        <Stack gap={0.25}>
                          <Skeleton width="10ch" />
                          <Skeleton width="8ch" />
                          <Skeleton width="12ch" />
                          <Skeleton width="10ch" />
                        </Stack>
                      ) : (
                        <Stack textAlign="left">
                          <Typography variant="body1" fontWeight={600}>
                            {name}
                          </Typography>
                          <Typography fontWeight={300} variant="caption">
                            by {company}
                          </Typography>
                          <Typography fontWeight={300} variant="caption">
                            <Typography
                              component="span"
                              variant="body2"
                              fontWeight={500}
                            >
                              {type}
                              {', '}
                            </Typography>
                            {style}
                          </Typography>
                          <Typography variant="body2">
                            {formatMoney(price)}
                          </Typography>
                        </Stack>
                      )}
                    </Stack>
                  </Stack>
                </Stack>
              </ButtonBase>
            );
          })}
        </Stack>
      </Popover>
    </Stack>
  );
};
