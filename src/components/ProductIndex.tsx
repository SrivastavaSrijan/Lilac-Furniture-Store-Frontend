import {
  Alert,
  Container,
  Divider,
  Grid,
  Skeleton,
  Stack,
  ToggleButton,
  toggleButtonClasses,
  ToggleButtonGroup,
  toggleButtonGroupClasses,
  Typography,
} from '@mui/material';
import { intersection, map, random, uniq } from 'lodash';
import {
  MouseEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import { formatMoney, generateSizes, SizeOptionMap, sleep } from '@/lib';
import { IProduct } from '@/lib/graphql';
import { CommonContext } from '@/lib/providers';

import { CloudImage, RelatedProducts } from '.';
import { CartHandleButtons } from './CartHandleButtons';
import { ProductInterestButtons } from './ProductInterestButtons';

type VariantTypes = 'size' | 'color' | 'material';
interface IProductIndexProps extends IProduct {}
export const ProductIndex = ({
  name,
  category,
  style,
  type,
  variants,
  description,
  image,
}: IProductIndexProps) => {
  const [selectedVariantType, setSelectedVariantTypes] = useState<
    Record<VariantTypes, string | null>
  >({ size: null, color: null, material: null });
  const [availableVariantTypes, setAvailableVariantTypes] = useState<
    Record<VariantTypes, string[]>
  >({ size: [], color: [], material: [] });
  const [selectedVariantId, setSelectedVariantId] = useState<string | null>(
    null,
  );
  const [loading, setLoading] = useState(false);
  const { state } = useContext(CommonContext);

  const getVariantsInCart = () => {
    return intersection(
      map(variants, 'id'),
      map(state?.cart?.items ?? [], (val) => val.variant?.id),
    );
  };
  const getUnique = useCallback((arr: typeof variants, key: VariantTypes) => {
    return uniq(map(arr, key).filter(Boolean)) as string[];
  }, []);
  const sizes = getUnique(variants, 'size');
  const colors = getUnique(variants, 'color');
  const materials = getUnique(variants, 'material');

  const selectedVariant =
    variants?.find(({ id }) => id === selectedVariantId) ?? null;

  const handleVariantChange = useCallback(
    (key: VariantTypes) => async (ev: MouseEvent | null, newValue: string) => {
      const variantsWithProps = variants?.find(
        (variant) => variant[key] === newValue,
      );
      if (selectedVariantId === variantsWithProps?.id) return;
      const availableCombinations = variants?.filter(
        (variant) => variant[key] === newValue,
      );
      setAvailableVariantTypes({
        size: getUnique(availableCombinations, 'size'),
        color: getUnique(availableCombinations, 'color'),
        material: getUnique(availableCombinations, 'material'),
      });
      setLoading(true);
      await sleep(random(200, 500));
      setLoading(false);
      setSelectedVariantTypes({
        color: variantsWithProps?.color ?? null,
        size: variantsWithProps?.size ?? null,
        material: variantsWithProps?.material ?? null,
      });
      setSelectedVariantId(variantsWithProps?.id ?? null);
    },
    [getUnique, selectedVariantId, variants],
  );

  useEffect(() => {
    const firstVariant = variants?.[0];
    if (firstVariant && firstVariant.material && !selectedVariantId) {
      handleVariantChange('material')(null, firstVariant.material);
    }
  }, [handleVariantChange, selectedVariantId, variants]);

  const imageLink = image?.image?.publicUrlTransformed;
  if (!name) return <></>;

  const Metadata = ({
    tag,
    text,
    loader,
  }: {
    tag: string;
    text: string | null;
    loader?: boolean;
  }) => (
    <Grid container color="gray" width={256}>
      {loader && loading ? (
        <Skeleton width={256} variant="text" />
      ) : (
        <>
          <Grid item md={5} xs={3}>
            <Typography variant="caption"> {tag}</Typography>
          </Grid>
          <Grid item md={2} xs={1}>
            <Typography variant="caption">:</Typography>
          </Grid>
          <Grid item md={5} xs={4}>
            <Typography variant="caption">{text}</Typography>
          </Grid>
        </>
      )}
    </Grid>
  );
  const ToggleButtonWithLabel = ({
    label,
    variantKey,
    options,
    renderLabel = undefined,
  }: {
    label: string;
    variantKey: VariantTypes;
    options: string[];
    renderLabel?: (val: string) => string;
  }) => (
    <Stack>
      <Typography variant="caption" color="gray">
        {label}
      </Typography>
      <ToggleButtonGroup
        value={selectedVariantType[variantKey]}
        color="primary"
        exclusive
        size="small"
        onChange={handleVariantChange(variantKey)}
        aria-label={label}
        sx={
          loading
            ? {}
            : {
                [`& .${toggleButtonClasses.selected}.${toggleButtonGroupClasses.grouped}:not(:first-of-type)`]:
                  {
                    borderLeft: 1,
                  },
              }
        }
      >
        {options.map((option) => (
          <ToggleButton
            key={option}
            value={option}
            sx={
              loading
                ? {}
                : {
                    ...(availableVariantTypes[variantKey].includes(option)
                      ? {
                          border: '1px dashed !important',
                          borderColor: 'primary.light',
                          opacity: 0.7,
                        }
                      : {
                          opacity: 0.3,
                        }),
                    ...(selectedVariant?.[variantKey] === option && {
                      border: '1px solid !important',
                      borderColor: 'primary.main',
                      opacity: 1,
                    }),
                    [`&.${toggleButtonClasses.selected}`]: { border: 1 },
                  }
            }
            aria-label={`${option}`}
          >
            {renderLabel ? renderLabel(option) : option}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Stack>
  );
  const MetadataFields = (
    <Stack>
      <Metadata tag="SKU" text={selectedVariantId} loader />
      <Metadata tag="Category" text={category?.name ?? null} />
      <Metadata tag="Tags" text={type ?? null} />
      <Metadata tag="Style" text={style ?? null} />
    </Stack>
  );
  return (
    <>
      <Grid container spacing={{ xs: 3, md: 5 }}>
        <Grid item xs={12} md={6}>
          <Stack>
            {imageLink && (
              <Stack
                position="relative"
                height={{ xs: '75vh', md: '70vh' }}
                mx={{ xs: -2, md: 0 }}
                mt={{ xs: -3, md: 0 }}
              >
                <CloudImage
                  fill
                  sizes={generateSizes({ xs: 12, md: 3 })}
                  src={imageLink}
                  alt={name}
                  style={{ objectFit: 'cover' }}
                />
              </Stack>
            )}
          </Stack>
        </Grid>
        <Grid item xs={12} md={6} order={{ xs: 0, md: 1 }}>
          <Stack gap={{ xs: 3, md: 5 }} px={{ xs: 0, md: 4 }}>
            <Stack gap={{ xs: 1, md: 1.5 }}>
              <Stack
                direction="row"
                width="100%"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="h4" component="h1">
                  {name}
                </Typography>
                <ProductInterestButtons
                  name={name}
                  formattedName={`${style} ${type} "${name}"`}
                  size="small"
                  color="black"
                  onProductPage
                />
              </Stack>
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
              <ToggleButtonWithLabel
                variantKey="material"
                label="Materials"
                options={materials}
              />
              <ToggleButtonWithLabel
                variantKey="size"
                label="Size"
                options={sizes}
                renderLabel={(sizeOption) => SizeOptionMap?.[sizeOption] ?? ''}
              />
              <ToggleButtonWithLabel
                variantKey="color"
                label="Colors"
                options={colors}
              />
            </Stack>
            {!selectedVariantId ? (
              <Skeleton width={48} height={38} />
            ) : (
              <Stack maxWidth={343} gap={{ xs: 2, md: 3 }}>
                <CartHandleButtons
                  id={selectedVariantId}
                  direction="row"
                  color="colored"
                />
                {!!getVariantsInCart().length &&
                  !getVariantsInCart().includes(selectedVariantId) && (
                    <Stack>
                      <Alert
                        severity="info"
                        sx={{ '*': { typography: 'body2' } }}
                      >
                        <Typography>
                          Variants of this product exist in your cart
                        </Typography>
                        <Typography component="ul">
                          {(
                            getVariantsInCart()?.map(
                              (variantId) =>
                                variants
                                  ?.filter(({ id }) => id === variantId)
                                  .map(({ size, material, color }) =>
                                    [material, size, color].join(', '),
                                  ),
                            ) ?? []
                          ).map((val, index) => (
                            <Typography
                              key={index}
                              component="li"
                            >{`${val}`}</Typography>
                          ))}
                        </Typography>
                      </Alert>
                    </Stack>
                  )}
              </Stack>
            )}

            <Stack display={{ xs: 'flex', md: 'flex' }} gap={{ xs: 1, md: 2 }}>
              <Divider
                flexItem
                variant="fullWidth"
                sx={{ display: { xs: 'none', md: 'block' } }}
              />
              {MetadataFields}
            </Stack>
          </Stack>
        </Grid>
      </Grid>
      {type && style && (
        <>
          <Divider flexItem variant="fullWidth" />
          <Container maxWidth="lg">
            <RelatedProducts
              title="Related Products"
              subtitle="Lorem ipsum dolor sit amet, ullamco aliquip sunt qui deserunt eu officia culpa a dipisicing excepteur."
              type={type}
              style={style}
            />
          </Container>
        </>
      )}
    </>
  );
};
