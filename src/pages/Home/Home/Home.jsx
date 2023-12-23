import Banner from "../Banner/Banner";
import Contact from "../../Contact/Contact";
import About from "../../About/About";
import Skills from "../../Skills/Skills";
import Education from "../../Education/Education";
import Projects from "../../Projects/Projects";
import ScrollToTop from "react-scroll-up";
import { FaArrowUp } from "react-icons/fa";

const Home = () => {
    return (
        <div>
            <ScrollToTop showUnder={160}>
                <span><FaArrowUp className="text-[#c60678]" size={32}/></span>
            </ScrollToTop>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Education></Education>
            <Contact></Contact>
        </div>
    );
};

export default Home;