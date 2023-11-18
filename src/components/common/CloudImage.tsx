import Image from 'next/image';
import { CldImage, CldImageProps } from 'next-cloudinary';
import React, {
  ReactEventHandler,
  useCallback,
  useEffect,
  useState,
} from 'react';

import { AssetsConfig } from '@/lib';

// Use a map to store the fetched blur data URLs.
const blurDataURLCache = new Map();

const getDynamicBlurDataUrl = async (url: string) => {
  // Check if we have a cached value.
  if (blurDataURLCache.has(url)) {
    return blurDataURLCache.get(url);
  }

  // ... rest of your code to fetch the blurDataURL ...

  const params = [
    'f_auto',
    'c_fill', // Fill the space, maintaining aspect ratio
    'g_auto', // Automatically focus on the most important region of the image
    'w_5', // Width of 10 pixels for the placeholder
    'q_auto:low', // Lower quality for smaller file size
    'e_saturation:50', // Increase saturation by 50%
    'e_contrast:20', // Increase contrast by 20%
  ];
  const blurURL = url.replace('/upload/', `/upload/${params.join(',')}/`);
  const base64str = await fetch(blurURL)
    .then(async (res) => {
      return Buffer.from(await res.arrayBuffer()).toString('base64');
    })
    .catch(() => {
      // no-op
    });

  const blurSvg = `
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 12'>
      <filter id='b' color-interpolation-filters='sRGB'>
        <feGaussianBlur stdDeviation='0.5' />
      </filter>
      <image preserveAspectRatio='none' filter='url(#b)' x='0' y='0' height='100%' width='100%' 
      href='data:image/avif;base64,${base64str}' />
    </svg>
  `;

  const toBase64 = (str: string) =>
    typeof window === 'undefined'
      ? Buffer.from(str).toString('base64')
      : window.btoa(str);

  const data = `data:image/svg+xml;base64,${toBase64(blurSvg)}`;
  // Cache the fetched result.
  blurDataURLCache.set(url, data);
  return data;
};

interface ICloudImageProps extends CldImageProps {}
export const CloudImage = (props: ICloudImageProps) => {
  const [blurDataURL, setBlurDataURL] = useState<string | null>(null);
  const [hasError, setError] = useState<boolean>(false);

  const updateBlurDataURL = useCallback(async () => {
    const blurDataURLData = await getDynamicBlurDataUrl(props.src);
    setBlurDataURL(blurDataURLData);
  }, [props.src]);

  useEffect(() => {
    updateBlurDataURL();
  }, [updateBlurDataURL]);

  const handleError: ReactEventHandler<HTMLImageElement> = () => {
    setError(true);
  };

  return hasError ? (
    <Image
      {...props}
      src={AssetsConfig.error}
      alt={props.alt}
      style={{ objectFit: 'contain' }}
    />
  ) : (
    <CldImage
      {...props}
      onError={handleError}
      {...(blurDataURL && { blurDataURL, placeholder: 'blur' })}
    />
  );
};
