import { Github, Linkedin, Twitter } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://www.github.com/kateykwesi", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/philipkatey/",
    label: "LinkedIn",
  },
  { icon: Twitter, href: "https://x.com/kateykwesi", label: "Twitter" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 relative border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold text-black tracking-tight">
              P<span className="text-primary">K</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Philip Katey. All rights reserved.
            </p>
          </div>

          {/* Links */}

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2 rounded-full glass-white text-black hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
