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

// eslint-disable-next-line import/prefer-default-export
export const siteQuery = groq`
  {
    ${footerQuery},
    ${headerQuery},
  }
`;
