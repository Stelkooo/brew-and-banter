import Link from 'next/link';
import { Github, Instagram, Linkedin, Twitter, X, Youtube } from 'lucide-react';

import { TSocial, TSocialType } from '@/types';

const getIcon = (type?: TSocialType) => {
  switch (type) {
    case 'facebook':
      return <Github size={36} className="relative" />;
    case 'linkedin':
      return <Linkedin size={36} className="relative" />;
    case 'instagram':
      return <Instagram size={36} className="relative" />;
    case 'twitter':
      return <Twitter size={36} className="relative" />;
    case 'youtube':
      return <Youtube size={36} className="relative" />;
    default:
      return <X />;
  }
};

type Props = {
  icon?: TSocial;
};

export default function SocialsIcon({ icon }: Props) {
  return (
    <Link
      href={icon?.url || '/'}
      target="_blank"
      className="group/social transition-colors hover:text-accent-foreground"
    >
      <div className="relative">
        <div className="absolute inset-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary transition-all group-hover/social:h-1 group-hover/social:w-1 group-hover/social:scale-[1250%]" />
        {getIcon(icon?.type)}
        <span className="sr-only">Link to our {icon?.type} page</span>
      </div>
    </Link>
  );
}
