const experiences = [
  {
    period: "2012 — 2023",
    role: "Secondary School Education (Class 10)",
    company: "Abhilasha School",
    description:
      "Built a strong academic foundation while developing curiosity for mathematics, science, and computer technology. This is where my interest in programming and problem-solving began.",
    technologies: ["Mathematics", "Science", "Computer Basics"],
    current: false,
  },
  {
    period: "2023 — 2025",
    role: "Higher Secondary Education (Class 11 & 12)",
    company: "Alpha Higher Secondary School",
    description:
      "Completed higher secondary education with a focus on Physics, Chemistry, and Mathematics. Strengthened analytical thinking and prepared for engineering entrance examinations.",
    technologies: ["Physics", "Chemistry", "Mathematics"],
    current: false,
  },
  {
    period: "2025 — Present",
    role: "B.Tech in Computer Science & Engineering (*Second Year)",
    company: "Sardar Vallabhbhai National Institute of Technology (SVNIT), Surat",
    description:
      "Currently pursuing my Bachelor's degree in Computer Science and Engineering. Actively learning Data Structures & Algorithms, Full-Stack Web Development, and Software Engineering while building real-world projects using modern technologies.",
    technologies: [
      "C++",
      "Java",
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    current: true,
  },
  {
    period: "Future",
    role: "Full-Stack Software Engineer",
    company: "Dream Company",
    description:
      "My goal is to become a skilled software engineer who builds scalable web applications, contributes to innovative products, and continuously learns new technologies to solve real-world problems.",
    technologies: [
      "System Design",
      "Cloud Computing",
      "DevOps",
      "AI",
      "Leadership",
    ],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            My Journey
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            My Educational
            <span className="font-serif italic font-normal text-white">
              {" "}
              Journey.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            From school to SVNIT, every stage of my journey has strengthened my
            passion for technology, software development, and continuous
            learning.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-70"></span>
                  )}
                </div>

                {/* Timeline Card */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/60 hover:shadow-[0_0_25px_rgba(0,255,200,0.15)] transition-all duration-500">
                    <span className="text-sm font-semibold text-primary">
                      {exp.period}
                    </span>

                    <h3 className="text-xl font-bold mt-2">{exp.role}</h3>

                    <p className="text-muted-foreground font-medium mt-1">
                      {exp.company}
                    </p>

                    <p className="text-sm text-muted-foreground leading-7 mt-4">
                      {exp.description}
                    </p>

                    <div
                      className={`flex flex-wrap gap-2 mt-5 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium"
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