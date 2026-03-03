import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "../conponents/AnimatedBorderButton";

const Projects = () => {
  const projects = [
    {
      title: "Fintech Dashboard",
      description:
        "A comprehensive financial analytics platform with real-time data visualization, portfolio management, and AI-powered insights.",
      image: "/project.png",
      tags: ["React", "Typescript", "NodeJS"],
      link: "#",
      github: "#",
    },
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce solution with inventory management, payment processing, and analytics dashboard.",
      image: "/project.png",
      tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
      link: "#",
      github: "#",
    },
    {
      title: "AI Writing Assistant",
      description:
        "An intelligent writing tool powered by GPT-4, helping users create better content faster.",
      image: "/project.png",
      tags: ["React", "OpenAI", "Python", "FastAPI"],
      link: "#",
      github: "#",
    },
    {
      title: "Project Management Tool",
      description:
        "A collaborative workspace for teams with real-time updates, task tracking, and integrations.",
      image: "/project.png",
      tags: ["Next.js", "Socket.io", "MongoDB", "Redis"],
      link: "#",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="relative overflow-hidden py-32">
      <div className="px-6 container mx-auto">
        <div className="text-center gap-4  max-w-3xl mx-auto mb-16 ">
          <span className="text-primary/40 uppercase tracking-wide font-medium text-sm animate-fade-in">
            Featured work
          </span>
          <h3 className="text-4xl md:text-5xl text-primary mt-4 mb-6 font-bold animate-fade-in animation-delay-100">
            Projects that{" "}
            <span className="text-white font-serif font-normal italic">
              make an impact
            </span>
          </h3>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>
        <div className="grid md:grid-cols-2 max-w-6xl mx-auto gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-linear-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                <div className="absolute inset-0 gap-2 flex items-center justify-center opacity-0 hover:opacity-100 hover:text-primary ">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <a href={project.link}>
                    <ArrowUpRight
                      className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                    />
                  </a>
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag, tagIndex) => (
                    <div
                      key={tagIndex}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      <span>{tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center gap-4  max-w-3xl mx-auto mt-16  animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            <a href="" className="flex items-center justify-center gap-1">
              View all Projects
              <span>
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </a>
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};

export default Projects;
