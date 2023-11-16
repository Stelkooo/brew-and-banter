import type { Url } from 'url';
import { Slug } from 'sanity';

export type TLinkType = 'internal' | 'external' | 'email' | 'phone';

export type TLink = {
  _key?: string;
  title?: string;
  linkType?: TLinkType;
  url?: Url;
  reference?: { slug?: Slug; _type?: string };
  email?: string;
  phone?: string;
};

export type TSocialType =
  | 'linkedin'
  | 'facebook'
  | 'twitter'
  | 'instagram'
  | 'youtube';

export type TSocial = {
  _key?: string;
  type?: TSocialType;
  url?: Url;
};

export type TFooter = {
  navItems?: TLink[];
  socials?: TSocial[];
  policies?: TLink[];
};

export type THeader = {
  navItems?: TLink[];
  cta?: TLink;
};

export type TSiteSettings = {
  footer?: TFooter;
  header?: THeader;
};
