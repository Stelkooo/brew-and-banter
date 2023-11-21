import { groq } from 'next-sanity';

const linkQuery = groq`
  _key,
  title,
  linkType,
  linkType == "internal" => {
    reference-> {
      slug,
      _type,
    },
  },
  linkType == "external" => {
    url,
  },
  linkType == "email" => {
    email,
  },
  linkType == "phone" => {
    phone,
  }
`;

const footerQuery = groq`
  "footer": *[_type == "footerSettings"][0] {
    navItems[] {
      ${linkQuery},
    },
    policies[] {
      ${linkQuery},
    },
    socials,
  }
`;

const headerQuery = groq`
  "header": *[_type == "headerSettings"][0] {
    navItems[] {
      ${linkQuery},
    },
    cta {
      ${linkQuery},
    },
  }
`;

export const siteQuery = groq`
  {
    ${footerQuery},
    ${headerQuery},
  }
`;

const imageQuery = groq`
  _key,
  alt,
  asset-> {
    ...,
    metadata,
  },
  sizes
`;

const buttonQuery = groq`
  ...,
  reference-> {
    _type,
    slug,
  }
`;

const modulesArrayQuery = groq`
  _type == "heroModule" => {
    _key,
    _type,
    copy[] {
      ...,
      _type == "cta" => {
        ${buttonQuery},
      },
    },
    heroType,
    heroType == "contentImages" => {
      images[] {
        ${imageQuery},
      },
    },
    heroType == "contentAboveImages" => {
      images[] {
        ${imageQuery},
      },
    },
  },
`;

const modulesQuery = groq`
  modules[] {
    ...,
    defined(_ref) => {
      ...@->modules[0] {
        ${modulesArrayQuery}
      },
    },
    !defined(_ref) => {
      ${modulesArrayQuery}
    },
  }
`;

export const homeQuery = groq`
  *[_type == "home"][0] {
    ${modulesQuery},
  }
`;

// Query for page contents
export const pageQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    ${modulesQuery},
  }
`;

// Query for defined page slugs, ready for generateStaticParams()
export const pageSlugs = groq`
  *[_type == "page" && defined(slug.current)].slug.current
`;
