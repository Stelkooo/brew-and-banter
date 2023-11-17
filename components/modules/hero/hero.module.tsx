import { IHeroModule } from '@/types';
import ContentImagesHero from './content-images.hero';

export default function HeroModule({ copy, heroType, images }: IHeroModule) {
  // Return correct hero component based on the heroType selected in Sanity
  switch (heroType) {
    case 'contentImages':
      return <ContentImagesHero copy={copy} images={images} />;
    default:
      return null;
  }
}
