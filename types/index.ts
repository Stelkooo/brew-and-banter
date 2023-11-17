import type { Url } from 'url';
import { ImageAsset, Slug } from 'sanity';
import type { PortableTextBlock } from '@portabletext/types';
import dynamicIconImports from 'lucide-react/dynamicIconImports';

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

export type TButton = {
  title?: string;
  reference?: { slug?: Slug; _type?: string };
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

type TBaseModule = {
  _type?: string;
  _key?: string;
};

export type TImage = {
  _key?: string;
  asset: ImageAsset;
  alt?: string;
  sizes?: string;
};

export type TSeo = {
  title?: string;
  description?: string;
};

export interface IBlogModule extends TBaseModule {
  blogType?: 'latest' | 'all' | 'similar';
  headline?: PortableTextBlock[];
  posts: TBlog[];
}

export interface IBodyModule extends TBaseModule {
  copy?: PortableTextBlock[];
  showTableOfContents?: boolean;
}

export type TInputType =
  | 'date'
  | 'email'
  | 'number'
  | 'tel'
  | 'text'
  | 'textArea';

export type TInput = {
  isRequired?: boolean;
  fieldLabel?: string;
  fieldId?: string;
  inputType?: TInputType;
  _key?: string;
};

export interface IContactModule extends TBaseModule {
  headline?: PortableTextBlock[];
  cta?: TButton;
  form?: TInput[];
}

export interface ICtaModule extends TBaseModule {
  ctaType?: 'newsletter' | 'link';
  headline?: PortableTextBlock[];
  cta?: TButton;
}

export type TFeature = {
  icon?: keyof typeof dynamicIconImports;
  text?: string;
};

export interface IFeatureModule extends TBaseModule {
  headline?: PortableTextBlock[];
  features?: TFeature[];
}

export interface IGalleryModule extends TBaseModule {
  headline?: PortableTextBlock[];
  images?: TImage[];
}

export interface IHeroModule extends TBaseModule {
  heroType?:
    | 'text'
    | 'contentImagesVertical'
    | 'contentImagesHorizontal'
    | 'contentAboveImages';
  copy?: PortableTextBlock[];
  images?: TImage[];
}

export interface ILayoutModule extends TBaseModule {
  layoutType?: 'contentImage' | 'contentAboveImage';
  headline?: PortableTextBlock[];
  copy?: PortableTextBlock[];
  image?: TImage;
}

export type TMenuItem = {
  title?: string;
  description?: string;
  image?: TImage;
};

export interface IMenuModule extends TBaseModule {
  menuItems?: TMenuItem[];
}

export type TTeamMember = {
  name?: string;
  jobTitle?: string;
  description?: string;
  image?: TImage;
};

export interface ITeamModule extends TBaseModule {
  headline?: PortableTextBlock[];
  teamMembers?: TTeamMember[];
}

export type TTestimonial = {
  name?: string;
  testimonial?: string;
};

export interface ITestimonialsModule extends TBaseModule {
  testimonialType?: 'text' | 'grid';
  headline?: PortableTextBlock[];
  testimonials?: TTestimonial[];
}

export type TTimeline = {
  text?: string;
};

export interface ITimelineModule extends TBaseModule {
  headline?: PortableTextBlock[];
  timeline?: TTimeline[];
}

export type TModules =
  | IBlogModule
  | IBodyModule
  | IContactModule
  | ICtaModule
  | IFeatureModule
  | IGalleryModule
  | IHeroModule
  | ILayoutModule
  | IMenuModule
  | ITeamModule
  | ITestimonialsModule
  | ITimelineModule;

export type TBlog = {
  _id?: string;
  title?: string;
  slug?: Slug;
  thumbnail?: TImage;
  copy?: PortableTextBlock[];
  modules: TModules[];
  seo?: TSeo;
};

export type THome = {
  modules?: TModules;
  seo?: TSeo;
};
