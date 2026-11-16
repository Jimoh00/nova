import { Timeline } from "../components/ui/timeline";
import ProcessCard from "../components/custom/ProcessCard";

const content = [
    {
        title: "Discovery",
        description: `
            We start by understanding the idea, the people it is for, and 
            what it needs to achieve. This gives us a clear direction before
            anything is designed or built.
        `
    },
    {
        title: "We Design",
        description: `
            We turn the direction into a visual experience with 
            thoughtful layouts, typography, interactions, and details that
            make the product feel clear and intentional.
        `
    },
    {
        title: "We Build",
        description: `
            Once the direction is right, we bring it to life with clean, 
            responsive development. Every part is built to work 
            smoothly across devices and feel as good as it looks
        `
    },
    {
        title: "Launch",
        description: `
            We refine the details, test the experience, and make sure everything
            is ready for the real world. Then we ship it and let the work 
            speak for itself.
        `
    },
]


const data = [
    {
        title: "1",
        content: (
            <div>
                <h3 className="text-xl font-semibold">Discovery</h3>
                <p className="mt-2 text-neutral-600">
                    We start by understanding the idea, the people it is for, and 
                    what it needs to achieve. This gives us a clear direction before
                    anything is designed or built.
                </p>
            </div>
        )
    },
    {
        title: "2",
        content: (
            <div>
                <h3 className="text-xl font-semibold">Design</h3>
                <p className="mt-2 text-neutral-600">
                    We turn the direction into a visual experience with 
                    thoughtful layouts, typography, interactions, and details that
                    make the product feel clear and intentional.
                </p>
            </div>
        )
    },
    {
        title: "3",
        content: (
            <div>
                <h3 className="text-xl font-semibold">Build</h3>
                <p className="mt-2 text-neutral-600">
                    Once the direction is right, we bring it to life with clean, 
                    responsive development. Every part is built to work 
                    smoothly across devices and feel as good as it looks
                </p>
            </div>
        )
    },
    {
        title: "4",
        content: (
            <div>
                <h3 className="text-xl font-semibold">Launch</h3>
                <p className="mt-2 text-neutral-600">
                    We refine the details, test the experience, and make sure everything
                    is ready for the real world. Then we ship it and let the work 
                    speak for itself.
                </p>
            </div>
        )
    },
]

function Process() {
    return (
        <section className="p-4 lg:px-[10%] bg-white py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 ">
                <div>
                    <p className="eyebrow">our process</p>
                    <h1 className="text-5xl font-semibold mt-1">
                        From Idea to Reality
                    </h1>

                </div>

                <div>
                    <Timeline 
                        data={data}
                    />
                </div>
            </div>
        </section>
    )
}

export default Process;