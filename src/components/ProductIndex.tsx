import {
  Grid,
  Skeleton,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import { map, random, uniq } from 'lodash';
import { MouseEvent, useEffect, useState } from 'react';

import { formatMoney, SizeOptionMap, sleep } from '@/lib';
import { IProduct } from '@/lib/graphql';

import { CloudImage } from '.';
import { CartHandleButtons } from './CartHandleButtons';

type VariantTypes = 'size' | 'color' | 'material';
interface IProductIndexProps extends IProduct {}
export const ProductIndex = ({
  name,
  variants,
  description,
  image,
}: IProductIndexProps) => {
  const [selectedVariantType, setSelectedVariantTypes] = useState<
    Record<VariantTypes, string | null>
  >({ size: null, color: null, material: null });
  const [selectedVariantId, setSelectedVariantId] = useState<string | null>(
    null,
  );
  const [loading, setLoading] = useState(false);
  const sizes = uniq(map(variants, 'size').filter(Boolean)) as string[];
  const colors = uniq(map(variants, 'color').filter(Boolean)) as string[];
  const materials = uniq(map(variants, 'material').filter(Boolean)) as string[];

  const selectedVariant =
    variants?.find(({ id }) => id === selectedVariantId) ?? null;

  const handleVariantChange =
    (type: VariantTypes) => async (ev: MouseEvent, newValue: string) => {
      const variantsWithProps = variants?.find(
        (variant) => variant[type] === newValue,
      );
      setLoading(true);
      await sleep(random(500, 1500));
      setLoading(false);
      setSelectedVariantTypes({
        color: variantsWithProps?.color ?? null,
        size: variantsWithProps?.size ?? null,
        material: variantsWithProps?.material ?? null,
      });
      setSelectedVariantId(variantsWithProps?.id ?? null);
    };

  useEffect(() => {
    const firstVariant = variants?.[0];
    if (firstVariant && !selectedVariantId) {
      setSelectedVariantId(firstVariant?.id);
      setSelectedVariantTypes({
        color: firstVariant?.color ?? null,
        size: firstVariant?.size ?? null,
        material: firstVariant?.material ?? null,
      });
    }
  }, [selectedVariantId, variants]);

  const imageLink = image?.image?.publicUrlTransformed;
  if (!name) return <></>;
  return (
    <Stack>
      <Grid container spacing={{ xs: 3, md: 5 }}>
        <Grid item xs={12} md={6}>
          <Stack gap={{ xs: 2, md: 3 }}>
            {imageLink && (
              <Stack
                position="relative"
                height={{ xs: 400, md: '80vh' }}
                boxShadow={5}
              >
                <CloudImage
                  fill
                  src={imageLink}
                  alt={name}
                  style={{ objectFit: 'cover' }}
                />
              </Stack>
            )}
          </Stack>
        </Grid>
        <Grid item xs={12} md={5}>
          <Stack
            gap={{ xs: 3, md: 5 }}
            py={{ xs: 0, md: 4 }}
            px={{ xs: 2, md: 4 }}
          >
            <Stack gap={{ xs: 0.5, md: 1 }}>
              <Typography variant="h4" component="h1">
                {name}
              </Typography>
              <Typography variant="h5" component="h2">
                {loading ? (
                  <Skeleton width="15ch" variant="text" />
                ) : (
                  formatMoney(selectedVariant?.price)
                )}
              </Typography>
              <Typography variant="body2" className="clamp-5">
                {description}
              </Typography>
            </Stack>
            <Stack
              gap={{ xs: 1, md: 2 }}
              mt={{ xs: -1, md: -2 }}
              sx={loading ? { opacity: 0.5, pointerEvents: 'none' } : {}}
            >
              <Stack gap={{ xs: 0.5, md: 1 }}>
                <Typography variant="caption">Size</Typography>
                <ToggleButtonGroup
                  value={selectedVariantType?.size}
                  color="primary"
                  exclusive
                  size="small"
                  onChange={handleVariantChange('size')}
                  aria-label="Size options"
                >
                  {sizes.map((sizeOption) => (
                    <ToggleButton
                      key={sizeOption}
                      value={sizeOption}
                      sx={
                        selectedVariant?.size !== sizeOption
                          ? {
                              opacity: 0.5,
                              border: 'dotted',
                            }
                          : {}
                      }
                      aria-label={`${sizeOption}`}
                    >
                      {SizeOptionMap?.[sizeOption] ?? ''}
                    </ToggleButton>
                  ))}
                </ToggleButtonGroup>
              </Stack>
              <Stack gap={{ xs: 0.5, md: 1 }}>
                <Typography variant="caption">Color</Typography>
                <ToggleButtonGroup
                  value={selectedVariantType?.color}
                  color="primary"
                  exclusive
                  size="small"
                  onChange={handleVariantChange('color')}
                  aria-label="Color options"
                >
                  {colors.map((colorOption) => (
                    <ToggleButton
                      key={colorOption}
                      value={colorOption}
                      sx={
                        selectedVariant?.color !== colorOption
                          ? {
                              opacity: 0.5,
                              border: 'dotted',
                            }
                          : {}
                      }
                      aria-label={`${colorOption}`}
                    >
                      {colorOption}
                    </ToggleButton>
                  ))}
                </ToggleButtonGroup>
              </Stack>
              <Stack gap={{ xs: 0.5, md: 1 }}>
                <Typography variant="caption">Material</Typography>
                <ToggleButtonGroup
                  value={selectedVariantType?.material}
                  color="primary"
                  exclusive
                  size="small"
                  onChange={handleVariantChange('material')}
                  aria-label="Material options"
                >
                  {materials.map((materiaOption) => (
                    <ToggleButton
                      key={materiaOption}
                      value={materiaOption}
                      sx={
                        selectedVariant?.material !== materiaOption
                          ? {
                              opacity: 0.5,
                              border: 'dotted',
                            }
                          : {}
                      }
                      aria-label={`${materiaOption}`}
                    >
                      {materiaOption}
                    </ToggleButton>
                  ))}
                </ToggleButtonGroup>
              </Stack>
            </Stack>
            {!selectedVariantId ? (
              <Skeleton width={48} height={38} />
            ) : (
              <Stack maxWidth={343}>
                <CartHandleButtons id={selectedVariantId} direction="row" />
              </Stack>
            )}
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};
