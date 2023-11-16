import Link from 'next/link';

import { TLink } from '@/types';
import resolveHref from '@/sanity/lib/links';

type Props = {
  link?: TLink;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export default function SiteLink({
  link,
  children,
  onClick,
  className = '',
}: Props) {
  switch (link?.linkType) {
    case 'email':
      return (
        <a
          href={`mailto:${link.email}`}
          onClick={onClick}
          className={className}
        >
          {children}
        </a>
      );
    case 'phone':
      return (
        <a href={`tel:${link.phone}`} onClick={onClick} className={className}>
          {children}
        </a>
      );
    case 'external':
      return (
        <Link
          href={link.url || '/'}
          target="_blank"
          onClick={onClick}
          className={className}
        >
          {children}
        </Link>
      );
    case 'internal':
      return (
        <Link
          href={`${resolveHref(
            link.reference?._type,
            link.reference?.slug?.current
          )}`}
          onClick={onClick}
          className={className}
        >
          {children}
        </Link>
      );
    default:
      return (
        <Link href="/" onClick={onClick} className={className}>
          {children}
        </Link>
      );
  }
}
