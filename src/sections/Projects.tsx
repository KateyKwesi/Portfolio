import { ArrowUpRight, Github } from "lucide-react";
import slateflix from "../assets/projects/project1.png";
import chef from "../assets/projects/project2.png";

const projects = [
  {
    title: "SlateFlix",
    description: "A modern movie discovery app powered by the TMDB API, featuring real-time search, dynamic backdrops, and a cinematic UI.",
    image: slateflix,
    tags: ["React", "Vite", "Tailwind CSS", "React Query", "TMDB API"],
    link: "https://slateflix.vercel.app/",
    github: "https://github.com/KateyKwesi/movieApp",
  },
  {
    title: "AI Recipe Generator",
    description: "An AI-powered app that generates structured recipes from simple ingredients, with markdown rendering and a clean responsive UI.",
    image: chef,
    tags: ["React", "TypeScript", "Tailwind CSS", "OpenRouter", "React Markdown"],
    link: "https://recipe-generator-katey.vercel.app/",
    github: "https://github.com/KateyKwesi/Recipe-Generator",
  },
];

const Projects = () => (
  <section id="projects" className="relative py-32 overflow-hidden">
    <div className="divider absolute top-0 left-0 right-0" />
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="label mb-4 animate-fade-up">Selected work</p>
            <h2 className="font-serif text-5xl md:text-6xl animate-fade-up animation-delay-100">
              Recent <span className="text-primary italic">Projects</span>
            </h2>
          </div>
          <a
            href="https://github.com/KateyKwesi?tab=repositories"
            className="hidden md:inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            All projects <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="card card-hover rounded-xl overflow-hidden group animate-fade-up"
              style={{ animationDelay: `${(i + 1) * 150}ms` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <a href={project.link} className="p-3 rounded-full bg-card border border-border text-foreground hover:text-primary hover:border-primary transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <a href={project.github} className="p-3 rounded-full bg-card border border-border text-foreground hover:text-primary hover:border-primary transition-colors">
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-foreground">{project.title}</h3>
                  <a href={project.link}>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <a
            href="https://github.com/KateyKwesi?tab=repositories"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            All projects <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
