import { PortableText, PortableTextComponents } from '@portabletext/react';
import { PortableTextBlock } from '@portabletext/types';

import { TButton, TImage, TLink } from '@/types';

import Photo from './photo.component';
import { slugify } from '@/lib/utils';
import SiteLink from './site-link.component';
import { Button } from '../ui/button';

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => {
      return <p>{children}</p>;
    },
    h1: ({ children }) => {
      return (
        <h1
          id={`${slugify(children as string)}`}
          className="scroll-m-32"
          itemProp="headline"
        >
          {children}
        </h1>
      );
    },
    h2: ({ children }) => {
      return (
        <h2 id={`${slugify(children as string)}`} className="scroll-mt-32">
          {children}
        </h2>
      );
    },
    h3: ({ children }) => {
      return (
        <h3 id={`${slugify(children as string)}`} className="scroll-m-32">
          {children}
        </h3>
      );
    },
    h4: ({ children }) => {
      return (
        <h4 id={`${slugify(children as string)}`} className="scroll-m-32">
          {children}
        </h4>
      );
    },
    h5: ({ children }) => {
      return (
        <h5 id={`${slugify(children as string)}`} className="scroll-m-32">
          {children}
        </h5>
      );
    },
    h6: ({ children }) => {
      return (
        <h6 id={`${slugify(children as string)}`} className="scroll-m-32">
          {children}
        </h6>
      );
    },
  },
  types: {
    customImage: ({ value }: { value: TImage }) => {
      return (
        <figure>
          <Photo
            image={value}
            alt={value.alt}
            className="w-full object-cover"
          />
          <figcaption>{value.alt}</figcaption>
        </figure>
      );
    },
    link: ({ value }: { value: TLink }) => {
      return (
        <SiteLink link={value} className="no-underline">
          {value.title}
        </SiteLink>
      );
    },
    cta: ({ value }: { value: TButton }) => {
      return (
        <Button asChild>
          <SiteLink
            link={{
              linkType: 'internal',
              reference: value.reference,
            }}
            className="no-underline"
          >
            {value.title}
          </SiteLink>
        </Button>
      );
    },
  },
};

export default function CustomPortableText({
  value,
}: {
  value: PortableTextBlock[];
}) {
  return <PortableText components={components} value={value} />;
}
