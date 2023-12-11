import { Link } from 'react-scroll';

const Drawer = () => {
    return (
        <div className="menu p-4 w-80 min-h-full flex justify-center items-center gap-6 font-permanent text-white bg-black">
            <Link to="home" spy={true}
                smooth={true}
                offset={50}
                duration={500} className="hover:text-[#c60678]">Home</Link>
            <Link to="about" spy={true}
                smooth={true}
                offset={50}
                duration={500} className="hover:text-[#c60678]">About</Link>
            <Link to="skills" spy={true}
                smooth={true}
                offset={50}
                duration={500} className="hover:text-[#c60678]">Skills</Link>
            <Link to="projects" spy={true}
                smooth={true}
                offset={50}
                duration={500} className="hover:text-[#c60678]">Projects</Link>
            <Link to="education" spy={true}
                smooth={true}
                offset={50}
                duration={500} className="hover:text-[#c60678]">Education</Link>
            <Link to="experiences" spy={true}
                smooth={true}
                offset={50}
                duration={500} className="hover:text-[#c60678]">Experiences</Link>
            <Link to="contact" spy={true}
                smooth={true}
                offset={50}
                duration={500} className="hover:text-[#c60678]">Contact</Link>
        </div>
    );
};

export default Drawer;