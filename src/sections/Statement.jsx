import ScrollReveal from "../components/reactbits/ScrollReveal";
import { MoveRight } from 'lucide-react';

function Statement () {
    return (
        <section id="about" className="px-4 md:px-8 lg:px-[10%] min-h-[80vh] lg:min-h-[60vh] py-[5%] w-screen overflow-x-clip flex flex-col items-start justify-center">
            <div className="grid grid-cols-1 gap-16 md:grid-cols-[1.35fr_0.65fr] md:gap-10 lg:grid-cols-2 lg:gap-0">
                <div className="overflow-hidden">
                    <p className="eyebrow">who we are</p>
                    <ScrollReveal
                        baseOpacity={0.1}
                        enableBlur
                        baseRotation={3}
                        blurStrength={6}
                        textClassName="!text-5xl md:!text-6xl lg:!text-7xl tracking-tight font-semibold"
                        containerClassName="w-full max-w-none overflow-hidden lg:max-w-6xl"
                    >
                        We make digital experiences that feel impossible to ignore
                    </ScrollReveal>
                </div>

                <div className="flex items-end justify-end">
                    <a href="/about" className="group text-xl font-semibold uppercase flex items-center gap-3 wrd-spacing underline underline-offset-4 transition-colors duration-200 hover:text-[#3157ff]">
                        <MoveRight color="#3157ff" className="transition-transform duration-200 group-hover:translate-x-1"/>
                        about the studio
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Statement;