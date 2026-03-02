import { useState } from "react";
import Button from "../conponents/Button";
import {
  ArrowRight,
  ChevronDown,
  Download,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { AnimatedBorderButton } from "../conponents/AnimatedBorderButton";

const Hero = () => {
  const [dots] = useState(() =>
    [...Array(20)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
      animationDelay: `${Math.random() * 5}s`,
    })),
  );

  const displayDots = dots.map((dot) => {
    return (
      <div
        key={dot.id}
        className="absolute w-1.5 h-1.5 rounded-full bg-[#20B2A6] opacity-40"
        style={{
          top: dot.top,
          left: dot.left,
          animation: dot.animation,
          animationDelay: dot.animationDelay,
        }}
      ></div>
    );
  });

  const socials = [
    {
      icon: Github,
      href: "www.github.com/kateykwesi",
    },
    {
      icon: Linkedin,
      href: "www.github.com/kateykwesi",
    },
    {
      icon: Twitter,
      href: "www.github.com/kateykwesi",
    },
  ];
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript (ES6+)",
    "Tailwind CSS",
    "Shadcn UI",
    "Zustand",
    "Node.js",
    "REST API Integration",
    "Figma",
    "Git",
    "GitHub",
    "Vite",
  ];

  return (
    <section className="min-h-screen relative flex items-center ">
      <div className="absolute inset-0">
        <img
          src="/image.png"
          alt=" hero image"
          className="object-cover w-full h-full opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background"></div>
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {displayDots}
      </div>

      <div className="relative z-10 mx-auto px-6 container pt-25">
        <div>
          <div className="grid lg:grid-cols-2">
            <div className="space-y-8 pb-20">
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-2 glass text-primary text-sm rounded-full animate-fade-in">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse " />
                  Software Engineer-React Specialist
                </span>
              </div>

              <div className=" space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tigh animate-fade-in animation-delay-100">
                  Crafting
                  <span className="text-primary glow-text"> Digital</span>
                  <br />
                  experiences with
                  <br />
                  <span className="italic font-serif font-normal ">
                    precision
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                  Hi, I'm Pedro Machado — a software engineer specializing in
                  React, Next.js, and TypeScript. I build scalable, performant
                  web applications that users love.
                </p>
              </div>

              <div className="flex  flex-wrap gap-4 animate-fade-in animation-delay-300">
                <Button size="lg">
                  Contact Me
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <AnimatedBorderButton>
                  <Download className="w-5 h-5" />
                  Download Cv
                </AnimatedBorderButton>
              </div>

              <div className="flex gap-4 items-center animate-fade-in animation-delay-400  ">
                {socials.map((social, index) => {
                  return (
                    <a
                      href={`${social.href}`}
                      key={index}
                      className=" glass p-2 hover:text-primary hover:bg-primary/10 glass transition-all duration-300"
                    >
                      {<social.icon className="w-5 h-5" />}
                    </a>
                  );
                })}
              </div>
            </div>
            <div className=" relative animate-fade-in animation-delay-300 ">
              <div className="relative max-w-md mx-auto">
                <div className="rounded-3xl p-2 glass glow-border">
                  <div
                    className="absolute inset-0 
              rounded-3xl bg-linear-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
                  />
                  <img
                    src="/profile-photo.jpg"
                    alt="Katey Kwesi"
                    className="w-full aspect-4/5 object-cover"
                  />
                  <div className="absolute inset-0">
                    <div className=" absolute -bottom-2 -right-4 glass p-3 animate-float rounded-xl flex items-center gap-2">
                      <div className="w-2 h-2  bg-green-500  animate-pulse" />
                      <span className="text-sm text-muted-foreground">
                        Available for work
                      </span>
                    </div>
                    <div className=" absolute -top-2 -left-2 glass p-3 animate-float rounded-xl flex items-center gap-2">
                      <p className="text-sm text-muted-foreground">
                        <span className="text-primary text-xl font-bold">
                          5+
                        </span>
                        <br /> Years Exp.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" animation-delay-600 py-10 animate-fade-in">
          <p className="text-sm  text-center mb mb-6 text-muted-foreground">
            Technologies i work with
          </p>
          <div className="relative overflow-hidden">
            <div className="flex  animate-marquee ">
              {[...skills, ...skills, ...skills].map((skill, index) => {
                return (
                  <div key={index} className=" px-8 py-4 shrink-0">
                    <span className="text-muted-foreground/50 text-xl font-semibold hover:text-primary/60 transition-colors">
                      {skill}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute -bottom-1 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
