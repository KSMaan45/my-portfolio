import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Unalive",
    description: "Website used to calculate remaining age based on given input.",
    image: "https://github.com/KSMaan45/React-Projects/blob/main/Unalive/Unalive-Preview.png?raw=true",
    tags: ["React", "TailwindCSS", "FantaCSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/KSMaan45/React-Projects/tree/main/Unalive",
  },
  {
    id: 2,
    title: "EdgeAI",
    description:
      "A sleek, responsive design that highlights EdgeAI SaaS product’s unique value proposition..",
    image: "https://github.com/KSMaan45/React-Projects/blob/main/EdgeAI/EdgeAI-Preview.png?raw=true",
    tags: ["React", "TypeScript", "TailwindCSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/KSMaan45/React-Projects/tree/main/EdgeAI",
  },
  {
    id: 3,
    title: "Waywes",
    description:
      "waywes is bash script use to run waydroid on x11.",
    image: "https://github.com/KSMaan45/waywes/blob/main/S1%20Main.png?raw=true",
    tags: ["Bash","Shell Scripting"],
    demoUrl: "#",
    githubUrl: "https://github.com/KSMaan45/waywes",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/KSMaan45"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
