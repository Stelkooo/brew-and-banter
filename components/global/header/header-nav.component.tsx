import ReactDOM from 'react-dom';
import { Variants, m } from 'framer-motion';
import { X } from 'lucide-react';

import { THeader } from '@/types';
import SiteLink from '@/components/shared/site-link.component';
import { Button } from '@/components/ui/button';

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const listItem: Variants = {
  hidden: { opacity: 0, y: '-100%' },
  show: { opacity: 1, y: 0 },
};

type Props = {
  isOpen: boolean;
  toggleOpen: () => void;
  header?: THeader;
};

export default function HeaderNav({ isOpen, toggleOpen, header }: Props) {
  if (!isOpen) return null;

  const portal = document.getElementById('portal') as HTMLElement;

  return ReactDOM.createPortal(
    <>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { delay: 0.15 } }}
        className="fixed inset-0 z-[51] h-full backdrop-blur backdrop-filter"
      />
      <m.div
        initial={{ y: '-100%' }}
        animate={{ y: 0, transition: { delay: 0.15, ease: 'easeInOut' } }}
        exit={{ y: '-100%' }}
        transition={{ ease: 'easeInOut' }}
        className="fixed inset-0 z-[51] h-full bg-foreground"
      >
        <div className="relative mx-auto h-full w-full max-w-screen-xl px-6 py-20 text-background">
          <button
            type="button"
            onClick={() => toggleOpen()}
            className="absolute right-6 top-6 flex cursor-pointer items-center gap-2"
          >
            <span className="as-h3 font-sans">Close</span>
            <X size={36} />
          </button>
          <nav>
            <m.ul variants={container} initial="hidden" animate="show">
              {header?.navItems?.map((item) => (
                <m.li
                  className="group relative py-4"
                  key={item._key}
                  variants={listItem}
                >
                  <SiteLink link={item} onClick={() => toggleOpen()}>
                    <p className="as-h1 text-center font-sans">{item.title}</p>
                  </SiteLink>
                </m.li>
              ))}
              {header?.cta ? (
                <m.li className="group relative py-4" variants={listItem}>
                  <Button asChild className="w-full py-12">
                    <SiteLink link={header.cta} onClick={() => toggleOpen()}>
                      <p className="as-h1 text-center font-sans">
                        {header.cta.title}
                      </p>
                    </SiteLink>
                  </Button>
                </m.li>
              ) : null}
            </m.ul>
          </nav>
        </div>
      </m.div>
    </>,
    portal
  );
}
