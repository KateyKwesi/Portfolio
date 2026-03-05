import { FolderDot, House, User, Briefcase, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0); // First nav is active by default

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#", label: <House />, title: "Home" },
    { href: "#about", label: <User className="w-5 h-5" />, title: "About" },
    {
      href: "#projects",
      label: <FolderDot className="w-5 h-5" />,
      title: "Projects",
    },
    {
      href: "#experience",
      label: <Briefcase className="w-5 h-5" />,
      title: "Experience",
    },
    {
      href: "#testimonials",
      label: <MessageCircle className="w-5 h-5" />,
      title: "Testimonials",
    },
  ];

  return (
    <header
      className={`fixed top-0 right-0 left-0 transition-all duration-500 ${
        scrolled ? "glass-white" : "bg-transparent"
      } z-50`}
    >
      <nav className="container mx-auto flex justify-center items-center py-5">
        <div className="rounded-full px-2 py-1 md:block">
          <div className="flex items-center glass-white gap-2 rounded-full">
            {navLinks.map((nav, index) => (
              <a
                key={index}
                href={nav.href}
                title={nav.title}
                onClick={() => setActiveIndex(index)}
                className={`px-4 py-2 text-sm rounded-lg transition-colors duration-200
                  ${
                    activeIndex === index
                      ? "bg-primary text-white"
                      : "text-black hover:bg-surface hover:text-foreground"
                  }`}
              >
                {nav.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
