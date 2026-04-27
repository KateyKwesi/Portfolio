const experiences = [
  {
    period: "2026 — Present",
    role: "Freelance Frontend Developer",
    company: "Self-Employed",
    description: "Building responsive web applications and implementing frontend solutions using React, Next.js, TypeScript, and Tailwind CSS.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    current: true,
  },
  {
    period: "2026 — Ongoing",
    role: "Personal Projects",
    company: "Self-Driven Development",
    description: "Developing projects to strengthen frontend skills, explore modern frameworks, and solve real coding challenges.",
    technologies: ["React", "Next.js", "Three.js", "TypeScript", "Tailwind CSS"],
    current: true,
  },
  {
    period: "2025",
    role: "Catch-Up Squad Member (Volunteer)",
    company: "ALX Africa",
    description: "Supported learners by answering technical questions, assisting with debugging, and sharing resources.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    current: false,
  },
  {
    period: "2025 — 2026",
    role: "Frontend Software Engineering Trainee",
    company: "ALX Africa",
    description: "Completed a project-based frontend program based on the Holberton School curriculum, building responsive web applications.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "TypeScript"],
    current: false,
  },
];

const Experience = () => (
  <section id="experience" className="relative py-32 overflow-hidden">
    <div className="divider absolute top-0 left-0 right-0" />
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <p className="label mb-4 animate-fade-up">Career journey</p>
        <h2 className="font-serif text-5xl md:text-6xl mb-16 animate-fade-up animation-delay-100">
          From Beginner<br />
          <span className="text-primary italic">to Builder</span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="relative pl-8 md:pl-20 animate-fade-up"
                style={{ animationDelay: `${(i + 1) * 100}ms` }}
              >
                {/* Dot */}
                <div className="absolute left-0 md:left-6 top-6 w-2.5 h-2.5 rounded-full bg-primary -translate-x-1/2 ring-4 ring-background">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping-slow" />
                  )}
                </div>

                <div className="card card-hover rounded-xl p-6">
                  <span className="label text-primary/70">{exp.period}</span>
                  <h3 className="font-medium text-foreground mt-2 mb-0.5">{exp.role}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{exp.company}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
