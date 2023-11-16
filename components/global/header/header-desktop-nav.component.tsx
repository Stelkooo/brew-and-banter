import SiteLink from '@/components/shared/site-link.component';
import { TLink } from '@/types';

type Props = {
  navItems?: TLink[];
};

export default function HeaderDesktopNav({ navItems }: Props) {
  return (
    <nav className="max-md:hidden">
      <ul className="flex gap-4 lg:gap-6">
        {navItems?.map((item) => (
          <li key={item._key}>
            <SiteLink link={item} className="as-h3 font-sans">
              <span>{item.title}</span>
            </SiteLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
