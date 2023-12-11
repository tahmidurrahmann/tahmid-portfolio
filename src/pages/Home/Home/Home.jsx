import Banner from "../Banner/Banner";
import Contact from "../../Contact/Contact";
import About from "../../About/About";
import Skills from "../../Skills/Skills";
import Education from "../../Education/Education";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Education></Education>
            <Contact></Contact>
        </div>
    );
};

export default Home;