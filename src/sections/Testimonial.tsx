import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Katey made an incredible impact as a Catch-Up Squad member. He shared resources, answered technical questions, and created a supportive environment that helped his peers succeed. His leadership, collaboration, and technical insight were exemplary.",
    author: "Irene Aragona",
    role: "Program and Community Specialist, ALX Software Engineering",
    avatar: "/irene.jpg",
  },
  {
    quote: "Katey consistently demonstrates technical excellence and a strong learning mindset. He builds projects with attention to detail and takes initiative to experiment with advanced frontend techniques.",
    author: "Cole Baidoo",
    role: "Senior Software Engineer | Cyber Security Specialist | Mentor",
    avatar: "/cole.jpg",
  },
];

const Testimonial = () => {
  const [active, setActive] = useState(0);
  const prev = () => setActive((p) => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((p) => (p + 1) % testimonials.length);
  const t = testimonials[active];

  return (
    <section id="testimonials" className="relative py-32 overflow-hidden">
      <div className="divider absolute top-0 left-0 right-0" />
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <p className="label text-center mb-4 animate-fade-up">Testimonials</p>
          <h2 className="font-serif text-5xl md:text-6xl text-center mb-16 animate-fade-up animation-delay-100">
            What people <span className="text-primary italic">say</span>
          </h2>

          <div className="card rounded-2xl p-8 md:p-12 relative animate-fade-up animation-delay-200">
            <Quote className="w-8 h-8 text-primary/30 mb-6" />
            <blockquote className="font-serif text-xl md:text-2xl leading-relaxed text-foreground mb-8">
              "{t.quote}"
            </blockquote>
            <div className="flex items-center gap-4">
              <img
                src={t.avatar}
                alt={t.author}
                className="w-12 h-12 rounded-full object-cover border border-border"
              />
              <div>
                <p className="font-medium text-foreground text-sm">{t.author}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{t.role}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? "w-6 bg-primary" : "w-1.5 bg-border"}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
