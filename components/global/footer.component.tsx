import { TFooter } from '@/types';
import Logo from '../shared/logo.component';
import SiteLink from '../shared/site-link.component';
import SocialsIcon from '../shared/socials-icon.component';

type Props = {
  footer?: TFooter;
};

export default function Footer({ footer }: Props) {
  return (
    <footer>
      <div className="container py-16 lg:py-24">
        <div className="flex flex-col items-center justify-between gap-4 border-b-2 pb-8 text-center lg:flex-row lg:pb-16">
          <Logo />
          <nav>
            <ul className="as-h3 flex flex-col gap-2 font-sans lg:flex-row lg:gap-8">
              {footer?.navItems
                ? footer.navItems.map((link) => (
                    <li key={link._key}>
                      <SiteLink link={link}>{link.title}</SiteLink>
                    </li>
                  ))
                : null}
            </ul>
          </nav>
          <nav>
            <ul className="flex gap-4">
              {footer?.socials
                ? footer.socials.map((social) => (
                    <li key={social._key}>
                      <SocialsIcon icon={social} />
                    </li>
                  ))
                : null}
            </ul>
          </nav>
        </div>
        <div className="as-h3 flex flex-col items-center justify-center gap-4 pt-8 text-center font-sans lg:flex-row lg:pt-16">
          <span>2023 Brew & Banter. All right reserved.</span>
          <nav>
            <ul className="flex flex-col gap-4 lg:flex-row">
              {footer?.policies
                ? footer.policies.map((link) => (
                    <li key={link._key}>
                      <SiteLink link={link}>{link.title}</SiteLink>
                    </li>
                  ))
                : null}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
