import { ArrowUpRight, MoveRight } from "lucide-react";
import { motion } from "motion/react";
import Button from "../components/custom/Button";
import Footer from "./Footer";

const principles = [
    {
        number: "01",
        title: "Make it clear",
        body: "Good design gives people confidence. We simplify the complex and make every interaction feel considered."
    },
    {
        number: "02",
        title: "Make it useful",
        body: "Beauty works harder when it serves a purpose. Strategy, content, and technology should move together."
    },
    {
        number: "03",
        title: "Make it last",
        body: "We build thoughtful systems rather than one-off moments, giving every product room to grow."
    }
];

function About() {
    return (
        <main>
            <section className="min-h-screen bg-[#f5f5f3] px-4 py-6 md:px-8 lg:px-[10%]">
                <motion.header
                    className="flex items-center justify-between"
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <a href="/" aria-label="Return to Nova home">
                        <img src="/logo.svg" alt="Nova" className="h-8 w-auto" />
                    </a>
                    <a
                        href="/"
                        className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide transition-colors hover:text-[#3157ff]"
                    >
                        back home
                        <ArrowUpRight size={18} color="#3157ff" />
                    </a>
                </motion.header>

                <motion.div
                    className="flex min-h-[80vh] flex-col justify-center py-20"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } }
                    }}
                >
                    <motion.p className="eyebrow" variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}>
                        about nova
                    </motion.p>
                    <motion.h1
                        className="mt-4 max-w-5xl text-5xl font-semibold tracking-tight md:text-7xl lg:text-8xl"
                        variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        We bring clarity to ambitious ideas.
                    </motion.h1>
                    <motion.div
                        className="mt-10 grid max-w-5xl gap-8 md:grid-cols-[1.2fr_0.8fr] md:gap-16"
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <p className="text-xl leading-[1.6em] text-gray-600 md:text-2xl">
                            Nova is an independent digital studio for brands that want to
                            move with intention. We combine strategy, identity, design, and
                            technology to create digital experiences people remember.
                        </p>
                        <p className="self-end text-base leading-[1.8em] text-gray-500">
                            Based in Lagos, working with curious teams everywhere.
                            <br />
                            From first sketch to final launch.
                        </p>
                    </motion.div>
                </motion.div>
            </section>

            <motion.section
                className="bg-[#111] px-4 py-24 text-white md:px-8 lg:px-[10%]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
            >
                <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16 lg:gap-24">
                    <div>
                        <p className="eyebrow !text-white">how we think</p>
                        <h2 className="mt-3 text-4xl font-semibold md:text-6xl">
                            Thoughtful by default.
                        </h2>
                    </div>
                    <div>
                        <p className="max-w-2xl text-xl leading-[1.7em] text-white/70 md:text-2xl">
                            The best digital work feels inevitable: clear enough to use,
                            distinctive enough to remember, and flexible enough to evolve.
                            Our process is collaborative, practical, and shaped around the
                            people the work is for.
                        </p>
                        <a
                            href="/#projects"
                            className="mt-10 inline-flex items-center gap-3 text-lg font-semibold uppercase underline underline-offset-4 transition-colors hover:text-[#3157ff]"
                        >
                            see selected work
                            <MoveRight color="#3157ff" />
                        </a>
                    </div>
                </div>
            </motion.section>

            <section className="px-4 py-24 md:px-8 lg:px-[10%]">
                <div className="mb-14">
                    <p className="eyebrow">our principles</p>
                    <h2 className="mt-3 max-w-3xl text-4xl font-semibold md:text-6xl">
                        The details are where the difference lives.
                    </h2>
                </div>

                <div className="grid gap-10 md:grid-cols-3 md:gap-8">
                    {principles.map((principle, index) => (
                        <motion.article
                            key={principle.number}
                            className="border-t border-black pt-5"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
                        >
                            <span className="text-sm font-semibold text-[#3157ff]">
                                {principle.number}
                            </span>
                            <h3 className="mt-16 text-3xl font-semibold">{principle.title}</h3>
                            <p className="mt-4 text-gray-600 leading-[1.8em]">{principle.body}</p>
                        </motion.article>
                    ))}
                </div>
            </section>

            <section className="flex min-h-[60vh] items-center justify-center px-4 py-24 text-center md:px-8">
                <div className="flex max-w-3xl flex-col items-center">
                    <p className="eyebrow">let&apos;s make something</p>
                    <h2 className="mt-3 text-4xl font-bold md:text-6xl">
                        Have an idea worth exploring?
                    </h2>
                    <p className="mt-6 max-w-xl text-gray-600">
                        Tell us where you want to go. We&apos;ll help you find the clearest
                        way to get there.
                    </p>
                    <Button cta="Start a Project" />
                </div>
            </section>

            <Footer />
        </main>
    );
}

export default About;
