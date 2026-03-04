import { useState } from "react";
import Button from "../conponents/Button";
import { Phone, Mail, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "pedro@example.com",
    href: "mailto:pedro@example.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA",
    href: "#",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: ``,
    email: ``,
    message: ``,
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <section id="contact" className="relative overflow-hidden  py-32">
      <div className="container mx-auto px-6 ">
        <div className="mx-auto max-w-4xl ">
          <div className="text-center space-y-4">
            <p className="font-medium uppercase text-sm text-primary/40 animate-fade-in ">
              Get in touch
            </p>
            <h2 className="text-4xl md:text-5xl text-primary font-bold">
              Let's build{" "}
              <span className="font-normal italic text-white font-serif">
                something great
              </span>
            </h2>
            <p className="text-muted-foreground">
              Have a project in mind? I'd love to hear about it. Send me a
              message and let's discuss how we can work together.
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 max-w-6xl mx-auto gap-20 mt-10">
          <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  placeholder="your@email.com"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  rows={8}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Your message..."
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                ></textarea>
              </div>
              <Button size="lg" type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
          <div className="space-y-8 animate-fade-in animation-delay-300">
            <div className="glass p-8 rounded-4xl">
              <h2 className="font-bold text-xl mb-8">Contact Information</h2>
              <div className="space-y-10">
                {contactInfo.map((info, idx) => (
                  <div
                    key={idx}
                    className="flex p-2 items-center gap-4 rounded-xl hover:bg-surface transition-colors group"
                  >
                    <div className="p-4 bg-primary/10 rounded-2xl">
                      <info.icon className="text-primary w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm mb-2 text-muted-foreground tracking-wider">
                        {info.label}
                      </p>

                      <a href={info.href} className="text-lg">
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass rounded-3xl p-8 border border-primary/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium">Currently Available</span>
              </div>
              <p className="text-muted-foreground text-sm">
                I'm currently open to new opportunities and exciting projects.
                Whether you need a full-time engineer or a freelance consultant,
                let's talk!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
