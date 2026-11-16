import StaggeredMenu from "../components/reactbits/StaggeredMenu";
import DotGrid from "../components/reactbits/DotGrid"
import Button from "../components/custom/Button";

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home section', link: '#home' },
  { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
  { label: 'Services', ariaLabel: 'View our services', link: '#services' },
  { label: 'Projects', ariaLabel: 'View our projects', link: '#projects' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '#contact' }
];

const socialItems = [
  { label: 'Twitter', link: 'https://twitter.com' },
  { label: 'GitHub', link: 'https://github.com' },
  { label: 'LinkedIn', link: 'https://linkedin.com' }
];

function HomeSection() {
    return (
        <section id="home" className="overflow-x-hidden">
            <div className="h-screen z-10">
                <StaggeredMenu
                    position="right"
                    items={menuItems}
                    socialItems={socialItems}
                    displaySocials
                    displayItemNumbering={true}
                    menuButtonColor="#111111"
                    openMenuButtonColor="#111111"
                    changeMenuColorOnOpen={true}
                    colors={['#B497CF', '#3157ff']}
                    logoUrl="/logo.svg"
                    accentColor="#3157ff"
                    onMenuOpen={() => console.log('Menu opened')}
                    onMenuClose={() => console.log('Menu closed')}
                />
            </div>

            <div className="absolute top-0 left-0 w-screen min-h-screen overflow-hidden">
                <div className="inset-0 z-0 absolute">
                    <DotGrid
                        dotSize={2}
                        gap={45}
                        baseColor="#2F293A"
                        activeColor="#3157ff"
                        proximity={120} 
                        shockRadius={120}
                        shockStrength={10}
                        resistance={790}
                        returnDuration={1.5}
                    />
                </div>

                <div className="relative z-10 flex p-2 flex-col min-h-screen text-center items-center justify-center">
                    <h1 className="text-[45px] md:text-6xl lg:text-7xl leading-[1.1em] font-bold">
                        We make the web <br className="hidden lg:flex" /> feel different.
                    </h1>
                    <p className="mt-5 text-gray-600 w-full md:max-w-[620px] lg:w-[600px] leading-[1.8em] tracking-wide text-lg">
                        We design and build thoughtful digital products, websites, and
                        experiences for brands ready to stand apart.
                    </p>

                    <Button 
                        cta={"Let's Work together"}
                    />
                </div>

            </div>
                        
        </section>
    )
}

export default HomeSection;