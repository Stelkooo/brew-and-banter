import dynamic from 'next/dynamic';
import { LucideProps } from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';

interface IconProps extends LucideProps {
  name: keyof typeof dynamicIconImports;
}

export default function Icon({ name, ...props }: IconProps) {
  const LucideIcon = dynamic(dynamicIconImports[name]);

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <LucideIcon {...props} />;
}
