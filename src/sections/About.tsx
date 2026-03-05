import { Code2, Rocket, Users, Lightbulb } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Well-structured, maintainable, reusable code.",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Fast, smooth, and responsive interfaces.",
    },
    {
      icon: Users,
      title: "User Focus",
      description: "Intuitive and accessible user experiences.",
    },
    {
      icon: Lightbulb,
      title: "Continuous Learning",
      description: "Exploring new tools, tech, and UI patterns.",
    },
  ];

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="px-6 mx-auto container ">
        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-center">
          <div className="space-y-8 py-8">
            <p className="text-primary/40 font-semibold text-sm tracking-wider animate-fade-in">
              ABOUT ME
            </p>
            <h2 className="text-4xl md:text-5xl text-black leading-tight animate-fade-in animation-delay-100">
              Building modern and interactive
              <span className="  font-serif text-primary italic">
                {" "}
                web experiences
              </span>
            </h2>
            <div className="text-muted-foreground space-y-4 animate-fade-in animation-delay-200">
              <p>
                I'm a frontend developer passionate about creating clean,
                responsive, and interactive web experiences. My journey into web
                development started with curiosity about how modern websites
                work, which quickly turned into a strong interest in building
                things from scratch.
              </p>
              <p>
                I work mainly with React, Next.js, TypeScript, and Tailwind CSS,
                using them to build modern user interfaces, responsive landing
                pages, and dynamic web applications. I enjoy turning ideas into
                functional products while focusing on performance, usability,
                and clean component structure.
              </p>
              <p>
                I’m constantly learning, refining my skills, and pushing myself
                to build better and more polished web experiences with every
                project.
              </p>
            </div>
          </div>
          <div className="gap-6 grid sm:grid-cols-2 animate-fade-in">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass-white p-6 rounded-2xl animate-fade-in "
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center hover:bg-primary/20 mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-lg text-black font-semibold mb-2">
                  {item.title}
                </h2>
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
