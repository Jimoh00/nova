import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import { projects as projectData } from "../data/projects";

const projects = projectData.map((project) => ({
    ...project,
    content: (
        <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
        />
    ),
    liveUrl: '#',
}));

function Projects() {
    return (
        <section id="projects" className="px-3 py-12 lg:px-[10%]">
            <p className="eyebrow">selected work</p>
            <h1 className="text-4xl lg:text-5xl font-semibold">Ideas, brought to life.</h1>

            <StickyScroll content={projects} />
        </section>
    )
}

export default Projects;