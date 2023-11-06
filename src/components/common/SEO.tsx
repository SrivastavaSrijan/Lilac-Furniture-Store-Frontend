import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import React from 'react';

import { AppConfig } from '@/constants';

interface ISEOProps {
  title: string;
  description?: string;
}

export const SEO = ({
  title,
  description = AppConfig.pages.default.description,
}: ISEOProps) => {
  const router = useRouter();
  const url = router.basePath + router.asPath;
  return (
    <NextSeo
      title={`${title} | ${AppConfig.name}`}
      description={description}
      canonical={url}
      openGraph={{
        url,
        title,
        description,
        images: [
          {
            url,
            alt: title,
          },
        ],
        type: 'website',
      }}
    />
  );
};
