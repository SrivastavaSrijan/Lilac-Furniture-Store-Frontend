import { Stack, Typography } from '@mui/material';

import { formatMoney } from '@/lib';
import { IProduct } from '@/lib/graphql';

interface IProductMetaProps extends IProduct {
  description?: string | null;
}
export const ProductMeta = ({
  name,
  type,
  company,
  style,
  variant,
  description,
}: IProductMetaProps) => {
  const { price } = variant ?? {};

  return (
    <Stack
      pt={{ xs: 0.5, md: 1 }}
      height="100%"
      pb={{ xs: 1.5, md: 2 }}
      px={{ xs: 1, md: 1.5 }}
      bgcolor="primary.light"
      justifyContent="space-between"
      gap={{ xs: 1.5, md: 2 }}
    >
      <Stack>
        <Typography variant="body1" fontWeight={600}>
          {name}
        </Typography>
        <Typography fontWeight={300} variant="caption">
          by {company}
        </Typography>
        <Typography fontWeight={300} variant="body2">
          {style} {type}
        </Typography>
        <Typography variant="body2">{formatMoney(price)}</Typography>

        {description && (
          <Typography
            variant="caption"
            className="clamp-5"
            mt={{ xs: 2, md: 3 }}
          >
            {description}
          </Typography>
        )}
      </Stack>
    </Stack>
  );
};
