import { Code2, Rocket, Users, Lightbulb } from "lucide-react";

export const highlights = [
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
    description:
      "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Exploring modern technologies and creative solutions to solve real-world problems.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.9fr] gap-16 items-start">

          {/* LEFT */}
          <div className="space-y-8">

            <div className="animate-fade-in">
              <span
                className="
                text-secondary-foreground
                text-md
                font-medium
                tracking-wider
                uppercase
                "
              >
                About Me
              </span>
            </div>

            <h2
              className="
              text-4xl
              md:text-5xl
              font-bold
              leading-tight
              animate-fade-in
              text-secondary-foreground
              "
            >
              Building the future
              <span className="font-serif italic font-normal text-white">
                {" "}one component at a time.
              </span>
            </h2>

            <div className="space-y-5 text-muted-foreground leading-8 animate-fade-in">

              <p>
                I am a Computer Science Engineering student passionate about
                building modern, responsive, and user-friendly web
                applications. I enjoy transforming ideas into real-world
                digital experiences through clean, maintainable code.
              </p>

              <p>
                My primary focus is Full-Stack Web Development using React,
                Tailwind CSS, Node.js, Express.js, and MongoDB. I also
                strengthen my problem-solving skills through Data Structures
                and Algorithms in C++.
              </p>

              <p>
                I believe in continuous learning, teamwork, and building
                software that creates real value. My goal is to become a
                skilled software engineer who develops scalable and impactful
                applications.
              </p>

            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in">
              <p className="text-base italic font-medium text-foreground leading-7">
                My mission is to build modern, high-performance, and
                user-focused web applications while continuously learning and
                solving real-world problems through technology.
              </p>
            </div>

          </div>

          {/* RIGHT */}
          <div className="lg:mt-24">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="glass rounded-2xl p-6 border border-white/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 group animate-fade-in"
                  style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};