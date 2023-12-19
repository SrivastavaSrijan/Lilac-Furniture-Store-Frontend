import {
  Button,
  Container,
  Divider,
  Grid,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material';
import { startCase } from 'lodash';

import { formatMoney, generateSizes, useInMobile } from '@/lib';
import { IOrderItem } from '@/lib/graphql';

import { CloudImage } from '.';

interface IOrderSummaryProps extends IOrderItem {}
export const OrderSummary = ({
  id,
  items,
  createdAt,
  total: totalPrice,
  charge,
}: IOrderSummaryProps) => {
  const inMobile = useInMobile();

  return (
    <Container maxWidth="lg" disableGutters={inMobile}>
      <Grid container spacing={{ xs: 0, md: 5 }}>
        <Grid item xs={12} md={8}>
          <Stack>
            <Stack
              py={{ xs: 3, md: 2 }}
              px={{ xs: 2, md: 3 }}
              bgcolor="primary.main"
              color="primary.contrastText"
            >
              <Typography variant="subtitle1" suppressHydrationWarning>
                Order ID: #{id}
              </Typography>
              <Typography
                variant="body1"
                fontWeight={500}
                suppressHydrationWarning
              >
                Your order from {new Date(createdAt).toLocaleDateString()}
              </Typography>
            </Stack>
            <Stack
              py={{ xs: 1, md: 2 }}
              px={{ xs: 1, md: 3 }}
              gap={{ xs: 3, md: 5 }}
              bgcolor="primary.light"
            >
              {(items ?? []).map((item, index) => {
                const { snapshot, id: itemID, quantity } = item ?? {};
                const {
                  image: imageUrl,
                  name,
                  meta,
                  price: itemPrice,
                } = snapshot ?? {};

                return (
                  <Stack key={itemID} gap={{ xs: 1, md: 2 }}>
                    <Stack
                      direction="row"
                      gap={{ xs: 2, md: 3 }}
                      justifyContent={{
                        xs: 'flex-start',
                        md: 'flex-start',
                      }}
                    >
                      <Stack
                        key={id}
                        height={{ xs: 196, md: 256 }}
                        width="30%"
                        position="relative"
                      >
                        {imageUrl ? (
                          <CloudImage
                            src={imageUrl}
                            fill
                            alt={name ?? ''}
                            sizes={generateSizes({ xs: 3, md: 3 })}
                            style={{
                              aspectRatio: '9 / 16',
                              objectFit: 'cover',
                            }}
                          />
                        ) : (
                          <Skeleton height="100%" variant="rectangular" />
                        )}
                      </Stack>
                      <Stack width="70%" gap={{ xs: 2, md: 3 }}>
                        <Stack gap={{ xs: 1, md: 1 }} width="fit-content">
                          <Typography variant="h5">
                            {name || <Skeleton width="10ch" />}{' '}
                          </Typography>

                          <Typography variant="subtitle2">
                            {formatMoney(itemPrice) || (
                              <Skeleton width="10ch" />
                            )}
                          </Typography>
                        </Stack>
                        <Stack gap={{ xs: 0.25, md: 0.5 }}>
                          {Object.entries(meta as Record<string, string>).map(
                            ([key, value]) => (
                              <Grid container key={key}>
                                <Grid item xs md>
                                  <Typography variant="body2" fontWeight={600}>
                                    {startCase(key)}
                                  </Typography>
                                </Grid>
                                <Grid item xs md>
                                  <Typography variant="body2">
                                    {value}
                                  </Typography>
                                </Grid>
                              </Grid>
                            ),
                          )}
                        </Stack>
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          width="100%"
                          alignItems="center"
                        >
                          <Stack>
                            {itemPrice && quantity ? (
                              <>
                                <Typography variant="caption">
                                  Subtotal
                                </Typography>
                                <Typography variant="subtitle1">
                                  {formatMoney(itemPrice * quantity)}
                                </Typography>
                              </>
                            ) : (
                              <>
                                <Skeleton height={32} width="7ch" />
                                <Skeleton height={32} width="10ch" />
                              </>
                            )}
                          </Stack>
                        </Stack>
                      </Stack>
                    </Stack>
                    {index !== (items?.length ?? 0) - 1 && (
                      <Divider flexItem variant="fullWidth" />
                    )}
                  </Stack>
                );
              })}
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} md={4}>
          <Stack
            py={{ xs: 1, md: 2 }}
            px={{ xs: 1, md: 3 }}
            gap={{ xs: 3, md: 5 }}
            bgcolor="primary.main"
            color="primary.contrastText"
          >
            <Stack justifyContent="space-between" width="100%" direction="row">
              <Typography variant="subtitle2">Paid</Typography>
              <Typography variant="subtitle2">
                {formatMoney(totalPrice)}
              </Typography>
            </Stack>
            <Typography variant="body1">Payment ID: {charge}</Typography>
            <Button color="secondary" variant="contained">
              Track Order
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};
