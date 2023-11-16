import { type SchemaTypeDefinition } from 'sanity';

// Documents Import
import blog from './documents/blog';
import footer from './documents/footer';
import general from './documents/general';
import header from './documents/header';
import home from './documents/home';
import menuItem from './documents/menu-item';
import page from './documents/page';
import reusableModules from './documents/reusable-modules';
import teamMember from './documents/team-member';
import testimonial from './documents/testimonial';

// Modules Import
import modulesSchema from './modules';
import blogModule from './modules/blog-module';
import bodyModule from './modules/body-module';
import contactModule from './modules/contact-module';
import ctaModule from './modules/cta-module';
import featureModule from './modules/feature-module';
import galleryModule from './modules/gallery-module';
import heroModule from './modules/hero-module';
import layoutModule from './modules/layout-module';
import menuModule from './modules/menu-module';
import teamModule from './modules/team-module';
import testimonialsModule from './modules/testimonials-module';
import timelineModule from './modules/timeline-module';

// Objects import
import button from './objects/button';
import customImage from './objects/custom-image';
import link from './objects/link';
import seo from './objects/seo';
import social from './objects/social';

const documents = [
  blog,
  footer,
  general,
  header,
  home,
  menuItem,
  page,
  reusableModules,
  teamMember,
  testimonial,
];

const modules = [
  modulesSchema,
  blogModule,
  bodyModule,
  contactModule,
  ctaModule,
  featureModule,
  galleryModule,
  heroModule,
  layoutModule,
  menuModule,
  teamModule,
  testimonialsModule,
  timelineModule,
];

const objects = [button, customImage, link, seo, social];

const schema: { types: SchemaTypeDefinition[] } = {
  types: [...objects, ...modules, ...documents],
};

export default schema;
