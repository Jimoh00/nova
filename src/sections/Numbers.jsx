import NumberCard from "../components/custom/NumberCards";

const stats = [
    {
        value: 30,
        suffix: "+",
        title: "Successful Clients",
        body: `
            From startup to giants each treated like our only one.
        `
    },
    {
        value: 10,
        suffix: "+",
        title: "Years of expertise",
        body: `
            Bringing years of design, development, and problem-solving 
            into every project we take on.
        `
    },
    {
        value: 48,
        suffix: "+",
        title: "Projects delivered",
        body: `
            From early ideas to polished digital products, turning concepts
            into experiences people remember.
        `
    },
    {
        value: 12,
        suffix: "+",
        title: "Industry explored",
        body: `
            Working across different industries, bringing fresh perspectives and new ideas
            to every challenge.  
        `
    },
]

function Numbers () {
    return (
        <section className="px-4 lg:px-[10%] py-12">
            <p className="eyebrow">our numbers</p>

            <div className="md:px-4">
                <NumberCard 
                    stat={stats}
                />
            </div>
        </section>
    )
}

export default Numbers;