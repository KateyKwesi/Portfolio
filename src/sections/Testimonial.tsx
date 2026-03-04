import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const Testimonial = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const testimonials = [
    {
      quote:
        "Pedro is one of the most talented engineers I've worked with. His attention to detail and ability to translate complex requirements into elegant solutions is remarkable.",
      author: "Sarah Chen",
      role: "CTO, Tech Innovators Inc.",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    {
      quote:
        "Working with Pedro was a game-changer for our project. He delivered ahead of schedule with code quality that set a new standard for our team.",
      author: "Michael Rodriguez",
      role: "Product Manager, Digital Solutions",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    },
    {
      quote:
        "Pedro's expertise in React and TypeScript helped us rebuild our entire frontend in record time. His architectural decisions continue to pay dividends.",
      author: "Emily Watson",
      role: "Engineering Lead, StartUp Labs",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
    {
      quote:
        "Not only is Pedro technically brilliant, but he's also a fantastic communicator and team player. He elevated everyone around him.",
      author: "David Kim",
      role: "CEO, Innovation Hub",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
  ];
  return (
    <section id="testimonials" className="relative overflow-hidden mb-16">
      <div className="container mx-auto px-6  ">
        <div className="max-w-5xl mx-auto ">
          <div className="text-center space-y-8 mb-16">
            <p className="uppercase text-sm tracking-wider font-semibold text-primary/40 animate-fade-in ">
              What people say
            </p>
            <h2 className="text-4xl md:text-5xl font-bold animate-fade-in animation-delay-200 text-secondary-foreground">
              Kinds words{" "}
              <span className="font-serif italic text-white font-normal">
                from amazing people.
              </span>
            </h2>
          </div>

          <div className="glass rounded-2xl glow-border">
            <div className="absolute  p-2 bg-secondary-foreground rounded-full -top-5">
              {" "}
              <Quote />
            </div>
            <div className="p-16 animate-fade-in animation-delay-200">
              <blockquote className="font-semibold leading-relaxed text-xl md:text-2xl mb-5">
                {" "}
                {testimonials[activeTestimonial].quote}
              </blockquote>
              <div className="flex  items-center gap-4 ">
                <div className="rounded-full w-15 h-15">
                  <img
                    className="rounded-full"
                    src={testimonials[activeTestimonial].avatar}
                    alt={testimonials[activeTestimonial].avatar}
                  />
                </div>
                <div>
                  <p className="font-semibold text-primary">
                    {testimonials[activeTestimonial].author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[activeTestimonial].role}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 mt-10">
            <button
              className="glass p-2 rounded-full hover:bg-primary/40 "
              onClick={prevTestimonial}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="flex gap-1">
              {testimonials.map((_, index) => (
                <button
                  onClick={() => setActiveTestimonial(index)}
                  key={index}
                  className={`w-2 h-2 ${index === activeTestimonial && `bg-secondary-foreground w-8`} bg-muted-foreground/30 hover:bg-muted-foreground/50 rounded-full transition-all duration-300 `}
                ></button>
              ))}
            </button>
            <button
              className="glass p-2 rounded-full hover:bg-primary/40"
              onClick={nextTestimonial}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
