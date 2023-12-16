import "./About.css"
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Heading from "../../shared/Heading/Heading";
import { motion } from "framer-motion";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const About = () => {

    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <div id="about">
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 6,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 3000,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
            />
            <Heading title="About Me"></Heading>
            <div className="flex flex-col lg:flex-row justify-evenly items-center gap-8 lg:gap-16 xl:gap-60 max-w-screen-xl mx-auto">
                <motion.div initial={{ y: -150 }} animate={{ y: 0 }} transition={{ duration: "4", delay: "0" }} className="px-6">
                    <img className="rounded-full border-x-transparent border-y-[#c60678]  border-8 w-60 md:w-72 lg:w-full" src="https://i.ibb.co/ZJ4KsqS/316938397-3409644562695466-8999828180897054437-n.jpg" alt="" />
                </motion.div>
                <motion.div initial={{ y: 150 }} animate={{ y: 0 }} transition={{ duration: "4", delay: "0" }} className="space-y-6 lg:w-3/4 px-16 lg:px-4">
                    <p className="text-gray-300 font-medium">👋 Hello there! I'm <span className="font-bold text-white">Tahmidur Rahman</span>, a passionate <span className="font-bold text-white">Frontend Developer</span>  dedicated to crafting seamless web applications. Expert in translating functionality into user-friendly interfaces, collaborating with design and back-end teams. Passionate about staying ahead in frontend technologies to build dynamic and engaging digital experiences.</p>
                    <p className="flex gap-6 items-center"><FaWhatsapp className="text-[#c60678]" size={26}></FaWhatsapp><span className="flex flex-col gap-2"><span className="font-bold">Whatsapp</span><span>+8801843821277</span></span></p>
                    <p className="flex gap-6 items-center"><FaLocationDot className="text-[#c60678]" size={26}></FaLocationDot><span className="flex flex-col gap-2"><span className="font-bold">Location</span><span>28/2 Shamibagh Road, Dhaka</span></span></p>
                    <p className="flex gap-6 items-center"><MdEmail className="text-[#c60678]" size={26}></MdEmail><span className="flex flex-col gap-2"><span className="font-bold">Email</span><span> tahmidurahmann@gmail.com</span></span></p>
                    <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/tahmidur-rahmann/" className="butn"><i className="animation"></i>LinkedIn<FaLinkedin size={23} /><i className="animation"></i>
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default About;