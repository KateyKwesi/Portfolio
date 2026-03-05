const Experience = () => {
  const experiences = [
    {
      period: "2026 — Present",
      role: "Freelance Frontend Developer",
      company: "Self-Employed",
      description:
        "Building responsive web applications and implementing frontend solutions using React, Next.js, TypeScript, and Tailwind CSS.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      current: true,
    },
    {
      period: "2026 — Ongoing",
      role: "Personal Projects",
      company: "Self-Driven Development",
      description:
        "Developing small-scale projects to strengthen frontend skills, explore modern frameworks, and solve real coding challenges.",
      technologies: [
        "React",
        "Next.js",
        "Three.js",
        "TypeScript",
        "Tailwind CSS",
      ],
      current: true,
    },
    {
      period: "2025",
      role: "Catch-Up Squad Member (Volunteer)",
      company: "ALX Africa",
      description:
        "Supported learners by answering technical questions, assisting with debugging, and sharing resources to help peers complete projects.",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      current: false,
    },
    {
      period: "2025 — 2026",
      role: "Frontend Software Engineering Trainee",
      company: "ALX Africa",
      description:
        "Completed a project-based frontend program based on the Holberton School curriculum, building responsive web applications and implementing best coding practices.",
      technologies: ["HTML", "CSS", "JavaScript", "React", "TypeScript"],
      current: false,
    },
  ];

  return (
    <section id="experience" className="relative overflow-hidden py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-l from-transparent via-orange-500/80 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-l from-transparent via-white/20 to-transparent"></div>

      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />
      <div className="mx-auto container px-6 mb-16">
        <div className="space-y-4 max-w-3xl mb-16">
          <p className="text-primary/40 uppercase font-semibold text-sm tracking-wider animate-fade-in">
            Career Journey
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-black"
          >
            From Beginner to
            <span className=" text-primary font-serif italic"> Builder.</span>
          </h2>
        </div>
        <div className="relative ">
          <div className="timeline-glow absolute inset-0 md:left-1/2 w-0.5  bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative grid md:grid-cols-2 animate-fade-in "
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>
                <div
                  className={`${index % 2 === 0 ? `md:text-right md:pr-16 ` : `md:col-start-2 md:pl-16`} pl-8  md:pl-0`}
                >
                  <div
                    className={`glass-white p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl text-black font-semibold mt-2">
                      {exp.role}
                    </h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        index % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, index) => (
                        <span
                          className="px-3 py-1 glass-white text-xs text-muted-foreground rounded-full "
                          key={index}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
