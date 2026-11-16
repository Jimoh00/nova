import TestimonialCard from "../components/custom/TestimonialCard";
import { Marquee } from "../components/ui/marquee";

function Testimonial() {
    return (
        <section className="px-4 py-24 md:px-8 lg:px-[10%]">
            <div className="text-center">
                <p className="eyebrow">what people say</p>
                <h1 className="text-4xl font-bold md:text-5xl">Good Words from Good People</h1>
            </div>

            <Marquee
                pauseOnHover
                className="mt-8 [--duration:30s]"
            >
                <TestimonialCard 
                    testimony = {`
                        Nove brought our ideas to life better than we imagined    
                    `}
                    name={"John Doe"}
                    role={"Founder, Company"}
                />

                <TestimonialCard 
                    testimony = {"The attention to detail was incredible"}
                    name={"Jane Smith"}
                    role={"Creative Director"}
                />

                <TestimonialCard 
                    testimony = {"Clean thoughtful and exactly what we needed."}
                    name={"Alex Williams"}
                    role={"Founder, Studio"}
                />

                <TestimonialCard 
                    testimony = {`
                        They took a rough idea and turned it into something that felt
                        polished from every angle.
                    `}
                    name={"Micheal Carter"}
                    role={"Founder, Northline"}
                />
            </Marquee>

            <Marquee
                pauseOnHover
                className={"mt-4 [--duration:30s]"}
                reverse
            >
                <TestimonialCard 
                    testimony = {`
                        The final result was simple, fast and genuinely enjoyable to 
                        use.     
                    `}
                    name={"Sophie Williams"}
                    role={"Product Lead, Atlas"}
                />

                <TestimonialCard 
                    testimony = {`
                        Every detail felt intentional, Nova understood exactly what we
                        were trying to achieve.    
                    `}
                    name={`Daniel Brooks`}
                    role={"Creative Director, Sonder"}
                />

                <TestimonialCard 
                    testimony = {`
                        From the first concept to the final launch, the whole experience
                        felt effortless    
                    `}
                    name={"Olivia Bennett"}
                    role={"Founder, Common Ground"}
                />

                <TestimonialCard 
                    testimony = {`
                        We wanted something that stood out without trying too hard. They
                        absolutely nailed it.    
                    `}
                    name={"James Anderson"}
                    role={"Co-founder, Studio Eight"}
                />
            </Marquee>
        </section>
    )
}

export default Testimonial;