import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <div className="fixed w-full z-10">
            <div className="max-w-screen-xl mx-auto navbar">
                <div className="flex-none lg:hidden">
                    <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                </div>
                <div className="flex-1 px-2 mx-2"><span className="flex font-permanent text-3xl items-center justify-center text-white"><img className="w-[60px]" src="https://i.ibb.co/3BPbCfh/21904da7d079ccffa6b95ecfc6f7bbb7-1.png" alt="" />Tahmid</span></div>
                <div className="flex-none hidden lg:block">
                    <div className="flex justify-center items-center gap-6 font-permanent text-white">
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
                </div>
            </div>
        </div>
    );
};

export default Navbar;