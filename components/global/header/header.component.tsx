import { THeader } from '@/types';
import Logo from '../../shared/logo.component';
import HeaderDesktopNav from './header-desktop-nav.component';
import HeaderMenu from './header-menu.component';

type Props = {
  header?: THeader;
};

export default function Header({ header }: Props) {
  return (
    <header className="fixed w-full border-b-2 bg-background">
      <div className="container flex items-center justify-between px-6 py-6">
        <Logo />
        <HeaderMenu header={header} />
        <HeaderDesktopNav navItems={header?.navItems} />
      </div>
    </header>
  );
}
