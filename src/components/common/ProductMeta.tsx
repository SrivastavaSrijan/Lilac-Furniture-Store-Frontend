import { Skeleton, Stack, Typography } from '@mui/material';
import { kebabCase } from 'lodash';
import { nanoid } from 'nanoid';
import Link from 'next/link';

import { AppConfig, formatMoney } from '@/lib';
import { IProduct } from '@/lib/graphql';

const { path } = AppConfig.pages.products;

interface IProductMetaProps extends IProduct {}
export const ProductMeta = ({ name, price, meta }: IProductMetaProps) => {
  return (
    <Link
      href={path}
      as={path.replace('[id].tsx', kebabCase(name || '...'))}
      style={{ height: '100%' }}
    >
      <Stack
        pt={1}
        height="100%"
        pb={{ xs: 1.5, md: 2 }}
        px={{ xs: 1, md: 1.5 }}
        gap={0.25}
        bgcolor="secondary.light"
      >
        <Typography key={nanoid()} variant="body1" fontWeight={600}>
          {name || <Skeleton width="10ch" />}
        </Typography>
        <Typography fontWeight={300} variant="caption">
          {meta ? `by ${meta?.company}` : <Skeleton width="8ch" />}
        </Typography>
        <Typography fontWeight={300} variant="body2">
          {meta ? (
            `${meta?.type},${meta?.material}`
          ) : (
            <>
              <Skeleton width="6ch" /> <Skeleton width="8ch" />
            </>
          )}
        </Typography>

        <Typography variant="body2">{formatMoney(price)}</Typography>
      </Stack>
    </Link>
  );
};
