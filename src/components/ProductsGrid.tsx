import { NetworkStatus } from '@apollo/client';
import {
  Alert,
  Button,
  CircularProgress,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import { motion } from 'framer-motion';
import { isEqual } from 'lodash';
import React, { useContext, useEffect, useRef, useState } from 'react';

import {
  generateMockArray,
  sleep,
  useApolloErrorHandler,
  useInMobile,
} from '@/lib';
import {
  IPaginatedProduct,
  OrderDirection,
  PaginatedProductsQueryVariables,
  useGetPriceRangeQuery,
  usePaginatedProductsQuery,
} from '@/lib/graphql';
import { CommonContext } from '@/lib/providers';

import { ProductFilterBar } from '.';
import { ProductCard } from './ProductCard';

const item = {
  hidden: {
    y: 50, // start 50 pixels to the right
    opacity: 0, // fully transparent
    scale: 0.95, // slightly smaller
  },
  visible: {
    y: 0, // move to final position
    opacity: 1, // fully visible
    scale: 1, // scale to normal size
  },
};

interface IProductsGridProps {
  limit: number;
  variables?: PaginatedProductsQueryVariables;
  showFilters?: boolean;
  title?: string;
  subtitle?: string;
}
export interface IFilters {
  category: string[];
  price: number[];
  sort: 'name' | 'price' | 'featured';
  applied: boolean;
}

export const ProductsGrid = ({
  title,
  subtitle,
  limit,
  variables,
  showFilters = false,
}: IProductsGridProps) => {
  const [productsShown, setProductsShown] = useState(limit);
  const [productsCount, setProductsCount] = useState<number>(10e5);
  const [dataArray, setDataArray] = useState<(IPaginatedProduct | null)[]>(
    generateMockArray(limit),
  );
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const [view, setView] = useState<'grid' | 'card'>('grid');
  const inMobile = useInMobile();
  const scrollRef = useRef(null);
  const { data, refetch, fetchMore, networkStatus, error } =
    usePaginatedProductsQuery({
      variables: { limit, ...variables },
      notifyOnNetworkStatusChange: true,
    });
  const { data: priceData } = useGetPriceRangeQuery();
  useApolloErrorHandler(error);
  const loading = [
    NetworkStatus.loading,
    NetworkStatus.fetchMore,
    NetworkStatus.refetch,
  ].includes(networkStatus);
  const { max: maxPrice = null, min: minPrice = null } =
    priceData?.getPriceRange ?? {};
  const { dispatch } = useContext(CommonContext);

  const handleFetchMore = async () => {
    const lastProduct = dataArray?.[dataArray.length - 1] ?? null;
    if (!lastProduct) return;
    await fetchMore({
      variables: {
        cursor: { id: lastProduct.id },
        limit: limit + 1,
        ...variables,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) return previousResult;
        const newProducts = fetchMoreResult?.products ?? [];
        newProducts?.shift();
        setProductsShown((oldLimit) => oldLimit + newProducts.length);
        return {
          __typename: previousResult.__typename,
          products: [...(previousResult?.products ?? []), ...newProducts],
        };
      },
    });
    setIsFetchingMore(false);
  };

  const handleApply = async (config: IFilters) => {
    setIsFetchingMore(true);
    await sleep(100);
    dispatch({ type: 'popover', payload: null });
    setDataArray(generateMockArray(limit));
    await sleep(1000);
    const handleRefetch = async (
      refetchWhereVariables?: PaginatedProductsQueryVariables['where'],
      refetchSortVariables?: PaginatedProductsQueryVariables['orderBy'],
    ) => {
      const defaultQuery: PaginatedProductsQueryVariables['where'] = {
        lowestPrice: { gte: minPrice, lte: maxPrice },
      };
      const isClear =
        Object.keys(refetchWhereVariables ?? {}).length < 1 ||
        isEqual(refetchWhereVariables, defaultQuery);
      const { data: refetchData } = await refetch({
        limit: isClear ? limit : undefined,
        where: {
          ...(refetchWhereVariables ?? {}),
        },
        ...(refetchSortVariables && { orderBy: refetchSortVariables }),
      });
      if (refetchData?.productsCount) {
        setProductsShown(isClear ? limit : refetchData?.productsCount);
        setProductsCount(refetchData?.productsCount);
      }
      setIsFetchingMore(false);
    };
    let refetchQuery: PaginatedProductsQueryVariables['where'] = {
      ...variables?.where,
    };
    let refetchSortQuery: PaginatedProductsQueryVariables['orderBy'] = {
      id: OrderDirection.Asc,
    };
    if (!config.applied) {
      handleRefetch({}, refetchSortQuery);
      return;
    }
    if (config.sort !== 'featured') {
      if (config.sort === 'name') {
        refetchSortQuery = {
          name: OrderDirection.Asc,
        };
      } else if (config.sort === 'price') {
        refetchSortQuery = {
          lowestPrice: OrderDirection.Asc,
        };
      }
    }
    if (config.price.length === 2) {
      const [selectedMin, selectedMax] = config.price;
      if (selectedMax && selectedMin)
        refetchQuery = {
          ...refetchQuery,
          lowestPrice: { gte: selectedMin, lte: selectedMax },
        };
    }
    if (config.category.length >= 1) {
      refetchQuery = {
        ...refetchQuery,
        category: { slug: { in: config.category } },
      };
    }
    handleRefetch(refetchQuery, refetchSortQuery);
  };

  const handleClose = () => {
    dispatch({ type: 'popover', payload: null });
  };

  useEffect(() => {
    if (data && productsCount === 10e5 && data?.productsCount) {
      setProductsCount(data?.productsCount);
    }
  }, [data, productsCount]);

  useEffect(() => {
    if (!loading && data?.products) {
      // Append new products to the existing list
      setDataArray(
        data.products.filter((val) => val.variant?.id) as IPaginatedProduct[],
      );
    }
  }, [data?.products, loading]);

  useEffect(() => {
    const handleViewChange = async () => {
      setIsFetchingMore(true);
      setDataArray(generateMockArray(limit));
      await sleep(500);
      refetch({ limit, ...variables, includeDesc: view === 'card' });
      setIsFetchingMore(false);
    };
    handleViewChange();
  }, [limit, refetch, variables, view]);

  // Prepare the product cards or skeletons
  const productCards = dataArray.map(
    (product: IPaginatedProduct | null, index) => {
      const xsWidth = view === 'card' ? 12 : 6;
      const mdWidth = view === 'card' ? 12 : 3;
      return (
        <Grid item key={index} xs={xsWidth} md={mdWidth}>
          {product ? (
            <motion.div
              variants={item}
              whileInView="visible"
              initial="hidden"
              viewport={{
                once: true,
                amount: 'some',
                margin: inMobile ? '56px' : '64px',
              }}
              transition={{
                ease: [0.22, 1, 0.36, 1],
                type: 'spring',
                damping: 15,
                stiffness: 100,
              }}
              style={{ position: 'relative', zIndex: 1 }}
            >
              <ProductCard
                {...product}
                direction={view === 'card' ? 'row' : 'column'}
              />
            </motion.div>
          ) : (
            <ProductCard
              id={index.toString()}
              direction={view === 'card' ? 'row' : 'column'}
            />
          )}
        </Grid>
      );
    },
  );

  // Append skeletons to the end if more items are being fetched
  const skeletons = isFetchingMore
    ? generateMockArray(limit).map((_, index) => (
        <Grid
          item
          key={`skeleton-${index}`}
          xs={view === 'card' ? 12 : 6}
          md={view === 'card' ? 12 : 3}
        >
          <ProductCard
            id={index?.toString()}
            direction={view === 'card' ? 'row' : 'column'}
          />
        </Grid>
      ))
    : null;

  return (
    <Stack gap={{ xs: 3, md: 5 }}>
      {title && subtitle && (
        <Stack
          gap={0.5}
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          <Typography variant="h4" component="h2">
            {title}
          </Typography>
          <Typography variant="body1" component="h3">
            {subtitle}
          </Typography>
        </Stack>
      )}
      {!dataArray.length && !loading && (
        <Alert variant="standard" severity="error">
          <Typography textAlign="center">No products found</Typography>
        </Alert>
      )}
      {showFilters && (
        <ProductFilterBar
          setView={setView}
          view={view}
          handleApply={handleApply}
          handleClose={handleClose}
          loading={isFetchingMore || loading}
          meta={{
            maxPrice,
            minPrice,
            productsCount: productsCount === 10e5 ? null : productsCount,
            productsShown:
              productsCount < productsShown ? productsCount : productsShown,
          }}
        />
      )}
      <Grid container spacing={{ xs: 2, md: 3 }} ref={scrollRef}>
        {productCards}
        {skeletons}
      </Grid>
      <Button
        variant="outlined"
        disabled={productsCount <= limit || productsShown === productsCount}
        onClick={() => {
          handleFetchMore();
        }}
        endIcon={isFetchingMore ? <CircularProgress size={14} /> : undefined}
        sx={{ mx: 'auto' }}
      >
        Show more
      </Button>
    </Stack>
  );
};
