import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Footer from "./Footer";
import { projects } from "../data/projects";

function CaseStudy({ slug }) {
    const project = projects.find((item) => item.slug === slug);

    if (!project) {
        return (
            <main className="flex min-h-screen flex-col items-center justify-center bg-[#f5f5f3] px-4 text-center">
                <p className="eyebrow">case study not found</p>
                <h1 className="mt-4 text-5xl font-semibold">This project does not exist.</h1>
                <a href="/#projects" className="mt-8 inline-flex items-center gap-2 font-semibold uppercase hover:text-[#3157ff]">
                    <ArrowLeft size={18} />
                    back to projects
                </a>
            </main>
        );
    }

    return (
        <main>
            <section className="bg-[#111] px-4 py-6 text-white md:px-8 lg:px-[10%]">
                <header className="flex items-center justify-between">
                    <a href="/" aria-label="Return to Nova home">
                        <img src="/logo.svg" alt="Nova" className="h-8 w-auto" />
                    </a>
                    <a href="/#projects" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide transition-colors hover:text-[#3157ff]">
                        <ArrowLeft size={18} />
                        all projects
                    </a>
                </header>

                <div className="grid gap-12 py-24 md:grid-cols-[1.15fr_0.85fr] md:items-end md:gap-16 md:py-32">
                    <div>
                        <motion.p className="eyebrow !text-white" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                            {project.category} / {project.year}
                        </motion.p>
                        <motion.h1 className="mt-4 text-6xl font-semibold tracking-tight md:text-8xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
                            {project.title}
                        </motion.h1>
                    </div>
                    <motion.p className="max-w-xl text-xl leading-[1.7em] text-white/70 md:text-2xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
                        {project.summary}
                    </motion.p>
                </div>
            </section>

            <motion.div className="px-4 pt-8 md:px-8 lg:px-[10%] lg:pt-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.25 }}>
                <img src={project.image} alt={`${project.title} project preview`} className="h-[45vh] w-full rounded-2xl object-cover md:h-[65vh]" />
            </motion.div>

            <section className="px-4 py-24 md:px-8 lg:px-[10%]">
                <div className="grid gap-16 md:grid-cols-[0.75fr_1.25fr] md:gap-20">
                    <div>
                        <p className="eyebrow">the brief</p>
                        <p className="mt-6 text-lg leading-[1.8em] text-gray-600">{project.challenge}</p>
                    </div>
                    <div>
                        <p className="eyebrow">the approach</p>
                        <p className="mt-6 text-2xl leading-[1.6em]">{project.approach}</p>
                    </div>
                </div>
            </section>

            <section className="bg-[#f0f0ed] px-4 py-24 md:px-8 lg:px-[10%]">
                <div className="grid gap-16 md:grid-cols-[0.75fr_1.25fr] md:gap-20">
                    <div>
                        <p className="eyebrow">project details</p>
                        <dl className="mt-8 space-y-6">
                            <div>
                                <dt className="text-sm uppercase text-gray-500">Role</dt>
                                <dd className="mt-1 font-semibold">{project.role}</dd>
                            </div>
                            <div>
                                <dt className="text-sm uppercase text-gray-500">Year</dt>
                                <dd className="mt-1 font-semibold">{project.year}</dd>
                            </div>
                        </dl>
                    </div>
                    <div>
                        <p className="eyebrow">deliverables</p>
                        <div className="mt-8 grid gap-4 sm:grid-cols-2">
                            {project.deliverables.map((deliverable) => (
                                <div key={deliverable} className="border-t border-black pt-4 text-lg">{deliverable}</div>
                            ))}
                        </div>
                        <div className="mt-16 border-t border-black pt-6">
                            <p className="eyebrow">the outcome</p>
                            <p className="mt-4 text-2xl leading-[1.6em]">{project.outcome}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex min-h-[45vh] items-center justify-center px-4 py-24 text-center md:px-8">
                <div>
                    <p className="eyebrow">next project</p>
                    <a href="/#projects" className="group mt-4 inline-flex items-center gap-3 text-4xl font-semibold transition-colors hover:text-[#3157ff] md:text-6xl">
                        Explore more work
                        <ArrowUpRight className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" size={40} />
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    );
}

export default CaseStudy;
