import Logo from '../../shared/logo.component';

export default function Header() {
  return (
    <header className="fixed w-full border-b-2 bg-background">
      <div className="container flex items-center justify-between px-6 py-5">
        <Logo />
      </div>
    </header>
  );
}
