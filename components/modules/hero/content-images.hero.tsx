import _ from 'lodash';

import CustomPortableText from '@/components/shared/custom-portable-text.component';
import Photo from '@/components/shared/photo.component';
import { cn } from '@/lib/utils';
import { IHeroModule } from '@/types';

export default function ContentImagesHero({ copy, images }: IHeroModule) {
  const imageChunks = images && _.chunk(images, 3);
  return (
    <section className="py-24 md:py-32 lg:py-0">
      <div className="container grid min-h-screen gap-8 lg:max-h-[100dvh] lg:grid-cols-2 lg:items-center lg:overflow-y-hidden">
        <div className="space-y-4 font-serif">
          {copy && <CustomPortableText value={copy} />}
        </div>
        <div className="grid justify-center gap-2 sm:grid-cols-2 md:gap-8 lg:gap-2">
          {imageChunks &&
            imageChunks.map((chunk, index) => (
              <div
                // eslint-disable-next-line react/no-array-index-key
                key={`image-chunk-${index}`}
                className={cn(
                  'flex flex-col gap-2 md:gap-8 lg:gap-2',
                  index === 1 ? 'sm:mt-8 lg:mt-32' : ''
                )}
              >
                {chunk.map((image) => (
                  <Photo
                    key={image._key}
                    image={image}
                    className={cn(
                      index !== 0 ? 'max-sm:hidden' : '',
                      'rounded-lg'
                    )}
                  />
                ))}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
