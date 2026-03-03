import { Code2, Rocket, Users, Lightbulb } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable code that stands the test of time.",
    },
    {
      icon: Rocket,
      title: "Performance",
      description:
        "Optimizing for speed and delivering lightning-fast user experiences.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working closely with teams to bring ideas to life.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Staying ahead with the latest technologies and best practices.",
    },
  ];

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="px-6 mx-auto container ">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 py-8">
            <p className="text-primary/40 font-semibold text-sm tracking-wider animate-fade-in">
              ABOUT ME
            </p>
            <h2 className="text-4xl md:text-5xl text-primary leading-tight animate-fade-in animation-delay-100">
              Building the future, <br />
              <span className=" text-white font-serif italic">
                one component at a time
              </span>
            </h2>
            <div className="text-muted-foreground space-y-4 animate-fade-in animation-delay-200">
              <p>
                I'm a passionate software engineer with over 5 years of
                experience crafting digital products that make a difference. My
                journey started with a curiosity for how things work on the web,
                and it has evolved into a deep expertise in modern frontend
                technologies.
              </p>
              <p>
                I specialize in React, Next.js, and TypeScript, building
                everything from sleek landing pages to complex enterprise
                applications. My approach combines technical excellence with a
                keen eye for design and user experience.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
            </div>
            <div className="glass rounded-2xl  p-6 animate-fade-in animation-delay-300 glow-border">
              <p className="font-medium italic text-foreground text-lg">
                "My mission is to create digital experiences that are not just
                functional, but truly delightful — products that users love to
                use and developers love to maintain."
              </p>
            </div>
          </div>
          <div className="gap-6 grid sm:grid-cols-2 animate-fade-in">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass p-6 rounded-2xl animate-fade-in "
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center hover:bg-primary/20 mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
                <p className="text-sm  text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
