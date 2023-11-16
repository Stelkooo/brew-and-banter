'use client';

import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Menu } from 'lucide-react';
import { useMediaQuery, useToggle } from 'usehooks-ts';

import HeaderNav from './header-nav.component';
import { THeader } from '@/types';

type Props = {
  header?: THeader;
};

export default function HeaderMenu({ header }: Props) {
  const [isOpen, toggleOpen, setIsOpen] = useToggle(false);
  const isTablet = useMediaQuery('(min-width: 768px)');
  // Close open once it reaches tablet screen size
  useEffect(() => {
    if (isTablet) setIsOpen(false);
  }, [isTablet, setIsOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => toggleOpen()}
        className="flex cursor-pointer items-center gap-2 md:hidden"
      >
        <span className="as-h3 font-sans">Menu</span>
        <Menu size={36} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <HeaderNav isOpen={isOpen} toggleOpen={toggleOpen} header={header} />
        )}
      </AnimatePresence>
    </>
  );
}
