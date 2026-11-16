import Button from "../components/custom/Button";

function Cta() {
    return (
        <section id="contact" className="py-12 lg:px-[10%] px-4 flex items-center justify-center h-[60vh]">
            <div className="text-center md:max-w-[680px] lg:max-w-[800px] flex flex-col items-center">
                <div>
                    <p className="eyebrow">have a project in mind?</p>
                    <h1 className="text-4xl md:max-w-[620px] lg:max-w-none lg:text-6xl font-bold mt-2">Let's make Something worth remembering</h1>
                </div>
                <p className="mt-6 max-w-[500px] text-gray-600 leading-[1.2em] text-center lg:max-w-[640px]">
                    From first idea to final detail, we create thoughtful digital 
                    experiences that look great, feel effortless, and 
                    make an impact.
                </p>

                <Button 
                    cta={"Start a Project"}
                />
            </div>
        </section>
    )
}


export default Cta;