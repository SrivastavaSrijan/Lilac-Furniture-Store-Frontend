import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

import { AppConfig, AssetsConfig } from '@/lib';

interface ISEOProps {
  title: string;
  description?: string;
  replacer?: Record<string, string | undefined | null>;
}
function replacePlaceholders(
  str: string,
  obj: Record<string, string | undefined | null>,
) {
  return str.replace(/\[([^\]]+)\]/g, (match, key) => obj[key] || match);
}
export const SEO = ({ title, description, replacer = {} }: ISEOProps) => {
  const router = useRouter();
  const url = router.basePath + router.asPath;

  return (
    <NextSeo
      title={replacePlaceholders(
        title || AppConfig.pages.default.title,
        replacer,
      )}
      description={replacePlaceholders(
        description || AppConfig.pages.default.description,
        replacer,
      )}
      canonical={url}
      openGraph={{
        url,
        title,
        description,
        images: [
          {
            url: AssetsConfig.brand.preview,
            alt: title,
          },
        ],
        type: 'website',
      }}
    />
  );
};
