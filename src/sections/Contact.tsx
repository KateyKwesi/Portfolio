import { useState } from "react";
import Button from "../conponents/Button";
import {
  Phone,
  Mail,
  MapPin,
  Loader,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "philipkateyk@gmail.com",
    href: "mailto:philipkateyk@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+233 559 511 620",
    href: "tel:+233559511620",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Accra, Ghana",
    href: "#",
  },
];

type EmailJSError = {
  status: number;
  text: string;
};
const Contact = () => {
  const [formData, setFormData] = useState({
    name: ``,
    email: ``,
    message: ``,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: ``,
    message: ``,
  });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: ``, message: `` });
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey,
      );

      setSubmitStatus({
        type: `success`,
        message: "Message sent successfully! I'll get back to you soon.",
      });
    } catch (error) {
      console.error(`EmailJs Error`, error);
      const err = error as EmailJSError;
      setSubmitStatus({
        type: `error`,
        message: err.text || "Failed to send message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section
      id="contact"
      className="relative overflow-hidden  bg-stone-950/90 py-32"
    >
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
              I'm currently open to new opportunities and exciting projects.
              Whether you need a full-time engineer or a freelance consultant,
              let's talk!
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 max-w-6xl mx-auto gap-20 mt-10">
          <div className="glass-white p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
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
                  className="w-full px-4 py-3  rounded-xl border border-border   focus:border-primary/40 focus:ring-1 focus:ring-primary/40 outline-none transition-all"
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
                  className="w-full px-4 py-3 rounded-xl border border-border   focus:border-primary/40 focus:ring-1 focus:ring-primary/40 outline-none transition-all"
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
                  rows={5}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Your message..."
                  className="w-full px-4 py-3  rounded-xl border border-border focus:border-primary/40 focus:ring-1 focus:ring-primary/40 outline-none transition-all resize-none"
                ></textarea>
              </div>
              <Button
                size="lg"
                type="submit"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    sending
                    <Loader className="w-5 h-5" />
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </Button>
              {submitStatus.type && (
                <div
                  className={`flex items-center gap-3
                     p-4 rounded-xl ${
                       submitStatus.type === "success"
                         ? "bg-green-500/10 border border-green-500/20 text-green-400"
                         : "bg-red-500/10 border border-red-500/20 text-red-400"
                     }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 shrink-0" />
                  )}
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>
          <div className="space-y-8 animate-fade-in animation-delay-300">
            <div className="glass-white p-8 rounded-4xl">
              <h2 className="font-bold text-xl mb-8">Contact Information</h2>
              <div className="space-y-10">
                {contactInfo.map((info, idx) => (
                  <div
                    key={idx}
                    className="flex p-2 items-center gap-4 rounded-xl hover:bg-primary/5 transition-colors group"
                  >
                    <div className="p-4 bg-primary/10 rounded-2xl">
                      <info.icon className=" w-5 h-5" />
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
