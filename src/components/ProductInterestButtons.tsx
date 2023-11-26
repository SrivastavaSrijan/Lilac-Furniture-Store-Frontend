import {
  FavoriteOutlined,
  ShareOutlined,
  VisibilityOutlined,
} from '@mui/icons-material';
import { IconButton, Stack } from '@mui/material';
import { kebabCase } from 'lodash';
import Link from 'next/link';
import { useSnackbar } from 'notistack';
import { MouseEvent } from 'react';

import { AppConfig } from '@/lib';

const { path } = AppConfig.pages.products;

interface IProductInterestButtonsProps {
  name?: string | null;
  formattedName?: string | null;
  image?: string | null;
  color?: string;
  size?: 'small' | 'medium' | 'large';
  onProductPage?: boolean;
}
export const ProductInterestButtons = ({
  name,
  formattedName = name,
  color = 'white',
  size = 'small',
  image = null,
  onProductPage = false,
}: IProductInterestButtonsProps) => {
  const { enqueueSnackbar } = useSnackbar();

  const handleShare = async (ev: MouseEvent<HTMLButtonElement>) => {
    ev.preventDefault();
    ev.stopPropagation();
    if (!formattedName) return;
    const description = `Check out ${formattedName} on ${document.location.href}. Discover the perfect blend of mid-century design and modern luxury with Lilac's curated furniture collection.`;
    // Share data setup
    const shareData = {
      title: formattedName,
      text: description,
      url: document.location.href,
      files: image
        ? [new File([image], formattedName, { type: 'image/jpeg' })]
        : undefined, // Uncomment if image sharing is needed and supported
    };

    try {
      // Check if the Web Share API is available
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        throw new Error('Web Share API is not available.');
      }
    } catch (err) {
      // Fallback for browsers that do not support the Web Share API or if the user cancels the share
      try {
        await navigator.clipboard.writeText(description);
        enqueueSnackbar({
          message: 'Link copied to clipboard',
          variant: 'info',
        });
      } catch (clipboardErr) {
        // no-op
      }
    }
  };

  return (
    <Stack>
      <Stack direction="row" gap={0.5}>
        <IconButton size={size}>
          <FavoriteOutlined color="inherit" htmlColor={color} />
        </IconButton>
        <IconButton size={size} onClick={handleShare}>
          <ShareOutlined color="inherit" htmlColor={color} />
        </IconButton>
        {!onProductPage && (
          <Link
            href={path.replace('[id].tsx', kebabCase(name || '...'))}
            passHref
            style={{ height: '100%' }}
          >
            <IconButton size={size}>
              <VisibilityOutlined color="inherit" htmlColor={color} />
            </IconButton>
          </Link>
        )}
      </Stack>
    </Stack>
  );
};
