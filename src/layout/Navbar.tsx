import { Menu, X } from "lucide-react";
import Button from "../conponents/Button";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(scrollY > 50);
    };
    window.addEventListener(`scroll`, handleScroll);
    return () => window.removeEventListener(`scroll`, handleScroll);
  }, []);
  const navLinks = [
    {
      href: `#about`,
      label: `About`,
    },
    {
      href: `#projects`,
      label: `Projects`,
    },
    {
      href: `#experience`,
      label: `Experience`,
    },
    {
      href: `#testimonials`,
      label: `Testimonials`,
    },
  ];

  const displayNav = navLinks.map((nav, index) => {
    return (
      <a
        key={index}
        href={nav.href}
        className="px-4 py-2 text-sm hover:bg-surface rounded-full text-muted-foreground hover:text-foreground"
      >
        {nav.label}
      </a>
    );
  });

  return (
    <header
      className={`fixed top-0 right-0 left-0 ${scrolled ? `glass` : `bg-transparent`} z-50`}
    >
      <nav className="container mx-auto flex justify-between items-center py-5">
        <a
          href="#"
          className="text-xl font-bold tracking-tight  hover:text-primary "
        >
          KK
        </a>
        <div className="glass rounded-full px-2 py-1 hidden md:block">
          <div className="flex items-center gap-1  rounded-full">
            {displayNav}
          </div>
        </div>
        <div className="hidden md:block">
          <Button children={`Contact me`} size="sm" />
        </div>
        <div className="md:hidden flex flex-col">
          <button onClick={() => setIsModalOpen((prev) => !prev)}>
            {isModalOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      {isModalOpen && (
        <div className="glass-strong  md:hidden animate-fade-in">
          <div className="container flex flex-col  mx-auto px-6 py-6 gap-4 rounded-full">
            {displayNav}
            <Button size={"sm"}>Contact Me</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
