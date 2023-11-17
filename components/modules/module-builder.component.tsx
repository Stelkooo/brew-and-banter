import { TModules } from '@/types';

import HeroModule from './hero/hero.module';

const ModulesMap = {
  heroModule: HeroModule,
};

export default function ModuleBuilder({ ...props }: TModules) {
  if (!props._type) throw new Error('Object does not have a "_type" property');

  const Module = ModulesMap[props._type as keyof typeof ModulesMap];
  if (!Module) throw new Error(`Module does not exist - ${Module}`);

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Module {...props} />;
}
