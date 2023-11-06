import { CldImage, CldImageProps } from 'next-cloudinary';
import React, { useEffect, useState } from 'react';

const getDynamicBlurDataUrl = async (url: string) => {
  const params = [
    'f_auto',
    'c_fill', // Fill the space, maintaining aspect ratio
    'g_auto', // Automatically focus on the most important region of the image
    'w_30', // Width of 30 pixels for the placeholder
    'q_auto:low', // Lower quality for smaller file size
    'e_saturation:50', // Increase saturation by 50%
    'e_contrast:20', // Increase contrast by 20%
  ];
  const blurURL = url.replace('/upload/', `/upload/${params.join(',')}/`);
  const base64str = await fetch(blurURL).then(async (res) => {
    return Buffer.from(await res.arrayBuffer()).toString('base64');
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

  return `data:image/svg+xml;base64,${toBase64(blurSvg)}`;
};

interface ICloudImageProps extends CldImageProps {}
export const CloudImage = (props: ICloudImageProps) => {
  const [blurDataURL, setBlurDataURL] = useState<string | null>(null);

  useEffect(() => {
    const modify = async () => {
      const { src } = props;
      const blurDataURLData = await getDynamicBlurDataUrl(src);
      setBlurDataURL(blurDataURLData);
    };
    modify();
  }, [props]);

  return (
    <CldImage
      {...props}
      {...(blurDataURL && { blurDataURL, placeholder: 'blur' })}
    />
  );
};
