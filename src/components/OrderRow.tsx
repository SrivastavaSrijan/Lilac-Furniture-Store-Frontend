import { ExpandLess, ExpandMore } from '@mui/icons-material';
import {
  Box,
  Button,
  Collapse,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';

import { AppConfig, formatMoney } from '@/lib';
import { IOrderItem } from '@/lib/graphql';

interface IOrderRowProps {
  order: IOrderItem;
  index: number;
}
export const OrderRow = ({ order, index }: IOrderRowProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset', mt: 1 } }}>
        <TableCell>
          <IconButton onClick={() => setOpen(!open)} color="inherit">
            {open ? (
              <ExpandLess color="inherit" />
            ) : (
              <ExpandMore color="inherit" />
            )}
          </IconButton>
        </TableCell>
        <TableCell>{index + 1}.</TableCell>
        <TableCell>{order.id}</TableCell>
        <TableCell suppressHydrationWarning>
          {new Date(order.createdAt).toLocaleDateString()}
        </TableCell>
        <TableCell>{formatMoney(order.total)}</TableCell>
        <TableCell>
          <Stack direction="row" gap={1}>
            <Link
              passHref
              href={AppConfig.pages.order.path.replace(
                '[id].tsx',
                order.id ?? '404',
              )}
            >
              <Button color="inherit" variant="outlined">
                View
              </Button>
            </Link>
          </Stack>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell
          sx={{
            paddingBottom: 0,
            paddingTop: 0,
            [`& .${tableCellClasses.head}`]: {
              fontWeight: 700,
            },
            [`& .${tableCellClasses.body}`]: { borderBottom: 0 },
          }}
          colSpan={6}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box m={1}>
              <Typography variant="body1" gutterBottom component="div">
                Order Items
              </Typography>
              <Table size="small" aria-label="items">
                <TableHead>
                  <TableRow>
                    <TableCell>Product Name</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Quantity</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {(order.items ?? []).map((item) => (
                    <TableRow key={item.id}>
                      <TableCell component="th" scope="row">
                        {item.snapshot?.name}
                      </TableCell>
                      <TableCell>{formatMoney(item.price)}</TableCell>
                      <TableCell>{item.quantity}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};
