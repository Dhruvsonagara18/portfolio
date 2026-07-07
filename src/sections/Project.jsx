import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "A modern and responsive developer portfolio built with React, Tailwind CSS, and Vite. It showcases my skills, education, projects, and contact information with smooth animations, glassmorphism UI, and a clean user experience.",
    image: "/projects/portfolio.png",
    tags: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "Vite",
      "Responsive Design",
    ],
    link: "#",
    github: "https://github.com/Dhruvsonagara18",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            My Projects
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            Building ideas into
            <span className="font-serif italic font-normal text-white">
              {" "}
              reality.
            </span>
          </h2>

          <p className="text-muted-foreground leading-7">
            Every project is a step forward in my journey as a software
            developer. Here are the applications I've built while learning
            modern web development.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* Portfolio Project */}
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden border border-border/30 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />

                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition duration-300">
                  <a
                    href={project.link}
                    className="glass p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>

                  <a
                    href={project.github}
                    className="glass p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-muted-foreground leading-7 mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Coming Soon Card */}
          <div className="glass rounded-2xl border-2 border-dashed border-primary/20 flex flex-col justify-center items-center text-center p-10 hover:border-primary/50 transition-all duration-500">
            <div className="text-6xl mb-6">🚀</div>

            <h3 className="text-2xl font-bold mb-4">
              More Projects Coming Soon
            </h3>

            <p className="text-muted-foreground leading-7 max-w-sm">
              I am currently working on exciting projects including a Weather
              App, AI Resume Builder, Chat Application, and Full-Stack
              E-Commerce platform. Stay tuned!
            </p>
          </div>
        </div>

        {/* Button */}
        <div className="text-center mt-14">
          <AnimatedBorderButton>
            More Projects Soon
            <ArrowUpRight className="w-5 h-5 ml-2" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};