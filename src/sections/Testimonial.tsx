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
        "Katey made an incredible impact as a Catch-Up Squad member. He shared resources, answered technical questions, and created a supportive environment that helped his peers succeed. His leadership, collaboration, and technical insight were exemplary.",
      author: "Irene Aragona",
      role: "Program and Community Specialist, ALX Software Engineering",
      avatar: "/public/irene.jpg",
    },
    {
      quote:
        "Katey consistently demonstrates technical excellence and a strong learning mindset. He builds projects with attention to detail and takes initiative to experiment with advanced frontend techniques.",
      author: "Cole Baidoo",
      role: "Senior Software Engineer | Cyber Security Specialist | Mentor | Program Manager",
      avatar: "/public/cole.jpg",
    },
  ];
  return (
    <section id="testimonials" className="relative overflow-hidden py-32">
      <div className="container mx-auto px-6  ">
        <div className="max-w-5xl mx-auto ">
          <div className="text-center space-y-8 mb-16">
            <p className="uppercase text-sm tracking-wider font-semibold text-primary/40 animate-fade-in ">
              Testimonials
            </p>
            <h2 className="text-4xl md:text-5xl font-bold animate-fade-in animation-delay-200 text-secondary-foreground">
              <span className="font-serif italic text-black font-normal">
                what people say
              </span>
            </h2>
          </div>

          <div className="rounded-2xl relative border border-white/15 bg-stone-950/90 glow-border">
            <div className="absolute  p-2 bg-primary rounded-full -top-5">
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
              className="bg-stone-950/90 p-2 rounded-full "
              onClick={prevTestimonial}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="flex gap-1">
              {testimonials.map((_, index) => (
                <button
                  onClick={() => setActiveTestimonial(index)}
                  key={index}
                  className={`w-2 h-2 ${index === activeTestimonial && `bg-primary w-8`} bg-muted-foreground/30 hover:bg-muted-foreground/50 rounded-full transition-all duration-300 `}
                ></button>
              ))}
            </button>
            <button
              className="bg-stone-950/90 p-2 rounded-full"
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
