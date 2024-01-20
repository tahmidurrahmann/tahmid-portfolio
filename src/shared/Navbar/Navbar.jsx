import { useState } from "react";
import Drawer from "./Drawer";
import "./styles.css";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-scroll";
const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const navLinks = <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-6 font-permanent text-white ml-32 py-24 md:py-0 md:ml-0">
        <Link onClick={() => setIsOpen(false)} to="home" spy={true}
            smooth={true}
            offset={50}
            duration={500} className="hover:text-[#c60678] mt-6 md:mt-0">Home</Link>
        <Link onClick={() => setIsOpen(false)} to="about" spy={true}
            smooth={true}
            offset={50}
            duration={500} className="hover:text-[#c60678]">About</Link>
        <Link onClick={() => setIsOpen(false)} to="skills" spy={true}
            smooth={true}
            offset={50}
            duration={500} className="hover:text-[#c60678]">Skills</Link>
        <Link onClick={() => setIsOpen(false)} to="projects" spy={true}
            smooth={true}
            offset={50}
            duration={500} className="hover:text-[#c60678]">Projects</Link>
        <Link onClick={() => setIsOpen(false)} to="education" spy={true}
            smooth={true}
            offset={50}
            duration={500} className="hover:text-[#c60678]">Education</Link>
        <Link onClick={() => setIsOpen(false)} to="contact" spy={true}
            smooth={true}
            offset={50}
            duration={500} className="hover:text-[#c60678]">Contact</Link>
    </div>

    return (
        <div className="fixed z-10 w-full bg-[#1515154D]">
            <div className="max-w-screen-2xl mx-auto my-3">
                <div className="flex justify-between items-center px-4 xl:px-0">
                    <div className="flex gap-1">
                        <div className='font-permanent text-3xl text-white flex items-center'><img className="w-[60px]" src="https://i.ibb.co/3BPbCfh/21904da7d079ccffa6b95ecfc6f7bbb7-1.png" alt="" />Tahmid</div>
                    </div>
                    <div className="hidden md:flex gap-4">
                        {navLinks}
                    </div>
                    <button className="flex md:hidden" type="button" onClick={() => setIsOpen(!isOpen)}>
                        <CiMenuFries />
                    </button>
                    <Drawer
                        isOpen={isOpen}
                        onClose={() => setIsOpen(false)}
                        position="right"
                    >
                        <div className="demo-content">
                            <button type="button" className="hover:scale-105 text-white hover:bg-gray-400 rounded-lg" onClick={() => setIsOpen(false)}>
                                <IoMdClose size={30} />
                            </button>
                            {navLinks}
                        </div>
                    </Drawer>
                </div>
            </div>
        </div>
    );
};

export default NavBar;