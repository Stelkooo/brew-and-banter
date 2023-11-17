'use client';

import { createClient } from 'next-sanity';
import { useNextSanityImage } from 'next-sanity-image';
import Image from 'next/image';

import { TImage } from '@/types';

import { apiVersion, dataset, projectId, useCdn } from '@/sanity/env';

const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});

type Props = {
  image: TImage;
  className?: string;
  alt?: string;
  sizes?: string;
  loading?: 'eager' | 'lazy';
  fill?: boolean;
};

export default function Photo({
  image,
  className = '',
  alt = '',
  sizes = '100vw',
  loading = 'eager',
  fill = false,
}: Props) {
  const imageProps = useNextSanityImage(client, image);
  return (
    <Image
      src={imageProps.src}
      loader={imageProps.loader}
      width={fill ? undefined : imageProps.width}
      height={fill ? undefined : imageProps.height}
      placeholder="blur"
      blurDataURL={image.asset.metadata.lqip}
      className={className}
      sizes={image.sizes || sizes}
      alt={alt}
      loading={loading}
      fill={fill}
      itemProp="image"
    />
  );
}
