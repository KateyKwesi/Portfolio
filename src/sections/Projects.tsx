import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "../conponents/AnimatedBorderButton";

const Projects = () => {
  const projects = [
    {
      title: "SlateFlix",
      description:
        "A modern movie discovery app powered by the TMDB API, featuring real-time search, dynamic movie backdrops, and a cinematic UI built with React.",
      image: "/public/projects/project1.png",
      tags: ["React", "Vite", "Tailwind CSS", "React Query", "TMDB API"],
      link: "https://slateflix.netlify.app/",
      github: "https://github.com/KateyKwesi/movieApp",
    },
    {
      title: "AI Recipe Generator",
      description:
        "An AI-powered app that generates structured recipes from simple ingredients, featuring markdown rendering and a clean responsive UI.",
      image: "/public/projects/project2.png",
      tags: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "OpenRouter",
        "React Markdown",
      ],
      link: "https://recipe-generator-katey.vercel.app/",
      github: "https://github.com/KateyKwesi/Recipe-Generator",
    },
  ];

  return (
    <section id="projects" className="relative overflow-hidden  py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-orange-500/80 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent"></div>

      <div className="px-6 container mx-auto">
        <div className="text-center gap-4  max-w-3xl mx-auto mb-16 ">
          <h3 className="text-4xl md:text-5xl text-black mt-16 mb-6 font-bold animate-fade-in animation-delay-100">
            Recent Projects and{" "}
            <span className="text-primary font-serif font-normal italic">
              Achievements
            </span>
          </h3>
        </div>
        <div className="grid md:grid-cols-2 max-w-6xl mx-auto gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass-white rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 gap-2 flex items-center justify-center opacity-0 hover:opacity-100 hover:text-primary ">
                  <a
                    href={project.link}
                    className="p-3  rounded-full glass-white  text-white hover:text-white hover:bg-primary transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3  rounded-full glass-white  text-white hover:text-white hover:bg-primary transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between">
                  <h3 className="text-xl font-semibold text-black group-hover:text-primary transition-colors">
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
                      className="px-4 py-1.5 rounded-full glass-white text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
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
            <a
              href="https://github.com/KateyKwesi?tab=repositories"
              className="flex items-center justify-center gap-1"
            >
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
