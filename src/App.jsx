import { useEffect } from "react";
import HomeSection from "./sections/Home";
import Numbers from "./sections/Numbers";
import Projects from "./sections/Projects";
import Services from "./sections/services";
import Statement from "./sections/Statement";
import Process from "./sections/Process";
import Cta from "./sections/cta";
import Testimonial from "./sections/testimonials";
import Footer from "./sections/Footer";
import About from "./sections/About";
import CaseStudy from "./sections/CaseStudy";

function App() {
    const caseStudyMatch = window.location.pathname.match(/^\/case-study\/([^/]+)\/?$/);

    useEffect(() => {
        if (window.location.hash) {
            requestAnimationFrame(() => {
                document.getElementById(window.location.hash.slice(1))?.scrollIntoView();
            });
        }
    }, []);

    if (caseStudyMatch) {
        return <CaseStudy slug={caseStudyMatch[1]} />;
    }

    if (window.location.pathname === "/about") {
        return <About />;
    }

    return (
        <main>
            <HomeSection />
            <Statement />
            <Numbers />
            <Services />
            <Projects />
            <Process />
            <Testimonial />
            <Cta /> 
            <Footer />
        </main>
    )
}

export default App;
