import {
  alpha,
  Container,
  Stack,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

import { useInMobile } from '@/lib';
import { IOrderItem } from '@/lib/graphql';

import { OrderRow } from './OrderRow';

interface IOrdersIndexProps {
  orderItems: IOrderItem[];
}
export const OrdersIndex = ({ orderItems }: IOrdersIndexProps) => {
  const inMobile = useInMobile();
  const cleanedOrderItems = orderItems.filter(
    ({ charge, itemsCount, items }) =>
      !!charge &&
      (itemsCount ?? 0) > 0 &&
      items?.every(
        (item) => (item?.quantity ?? 0) > 0 && item.snapshot && item.id,
      ),
  );

  return (
    <Container maxWidth="lg" disableGutters={inMobile}>
      <Stack py={{ xs: 1, md: 2 }} px={{ xs: 1, md: 3 }} gap={{ xs: 3, md: 5 }}>
        {!cleanedOrderItems.length ? (
          <Typography py={2} variant="caption">
            You have no orders
          </Typography>
        ) : (
          <TableContainer
            sx={{
              bgcolor: 'primary.main',
            }}
          >
            <Table
              aria-label="Orders Table"
              size="medium"
              sx={(theme) => ({
                [`& .${tableCellClasses.root}`]: {
                  color: 'primary.contrastText',
                  borderBottom: 1,
                  borderColor: alpha(theme.palette.primary.light, 0.3),
                  [`&:nth-of-type(1)`]: {
                    maxWidth: '1ch',
                  },
                  [`&:nth-of-type(2)`]: {
                    maxWidth: '1ch',
                  },
                  [`&:nth-of-type(3)`]: {
                    maxWidth: '30ch',
                  },
                  [`&:nth-of-type(4)`]: {
                    maxWidth: '10ch',
                  },
                },
              })}
            >
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>S.No</TableCell>
                  <TableCell>Order ID</TableCell>
                  <TableCell>Created At</TableCell>
                  <TableCell>Total</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cleanedOrderItems.map((order, index) => (
                  <OrderRow key={order.id} order={order} index={index} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Stack>
    </Container>
  );
};
