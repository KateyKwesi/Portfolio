import { Github, Linkedin, Twitter } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://www.github.com/kateykwesi", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/philipkatey/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/kateykwesi", label: "Twitter" },
];

export const Footer = () => (
  <footer className="py-10 border-t border-border">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <a href="#" className="font-serif text-xl text-foreground">
          P<span className="text-primary">K</span>
        </a>
        <p className="text-xs text-muted-foreground mt-1">
          © {new Date().getFullYear()} Philip Katey. All rights reserved.
        </p>
      </div>
      <div className="flex items-center gap-3">
        {socialLinks.map((s) => (
          <a
            key={s.label}
            href={s.href}
            aria-label={s.label}
            className="p-2 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
          >
            <s.icon className="w-4 h-4" />
          </a>
        ))}
      </div>
    </div>
  </footer>
);
