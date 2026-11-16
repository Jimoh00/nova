import FlowingMenu from "../components/reactbits/FlowMenu";

const demoItems = [
  { link: '#', text: 'UI/UX Design', image: 'https://images.unsplash.com/photo-1782977389500-dd7adad33ebe?q=80&w=600&h=400&fit=crop&sat=-100&auto=format' },
  { link: '#', text: 'Web Design', image: 'https://images.unsplash.com/photo-1781499455083-6ccc3beb20cd?q=80&w=600&h=400&fit=crop&sat=-100&auto=format' },
  { link: '#', text: 'Brand Identity', image: 'https://images.unsplash.com/photo-1776394254711-4a0d7345269a?q=80&w=600&h=400&fit=crop&sat=-100&auto=format' },
  { link: '#', text: 'Product Design', image: 'https://images.unsplash.com/photo-1781242629922-6f39cc3671cd?q=80&w=600&h=400&fit=crop&sat=-100&auto=format' }
];

function Services() {
    return (
        <section id="services" className="bg-[#111] py-24">
            <div className="px-4 md:px-8 grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-24 items-end lg:px-[10%]">
                <div>
                    <p className="eyebrow !text-white">services</p>
                    <h1 className="font-semibold mt-3 text-5xl md:text-6xl lg:text-7xl text-white">Our Services</h1>
                </div>

                <div>
                    <p className="text-white/70 md:max-w-[440px] lg:w-[600px]">
                        We turn ideas into thoughtful digital experiences combining strategy,
                        design, and technology to create work that feels as good as it performs
                    </p>
                </div>
            </div>

            <div className="relative h-[500px] md:h-[560px] lg:h-[600px] mt-12">
                <FlowingMenu items={demoItems}
                    speed={15}
                    textColor="#ffffff"
                    bgColor="#120F17"
                    marqueeBgColor="#ffffff"
                    marqueeTextColor="#120F17"
                    borderColor="#ffffff"
                />
            </div>
        </section>
    )
}


export default Services;