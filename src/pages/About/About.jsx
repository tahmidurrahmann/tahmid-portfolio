import "./About.css"
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Heading from "../../shared/Heading/Heading";

const About = () => {
    return (
        <div id="about">
            <Heading title="About Me"></Heading>
            <div className="flex flex-col lg:flex-row justify-evenly items-center gap-8 lg:gap-16 xl:gap-60 max-w-screen-xl mx-auto">
                <div className="px-6">
                    <img className="rounded-full border-x-transparent border-y-[#c60678]  border-8 w-96 lg:w-full" src="https://i.ibb.co/ZJ4KsqS/316938397-3409644562695466-8999828180897054437-n.jpg" alt="" />
                </div>
                <div className="space-y-6 lg:w-3/4 px-16 lg:px-4">
                    <p className="text-gray-300 font-medium">👋 Hello there! I'm <span className="font-bold text-white">Tahmidur Rahman</span>, a passionate <span className="font-bold text-white">Frontend Developer</span>  dedicated to crafting seamless web applications. Expert in translating functionality into user-friendly interfaces, collaborating with design and back-end teams. Passionate about staying ahead in frontend technologies to build dynamic and engaging digital experiences.</p>
                    <p className="flex gap-6 items-center"><FaWhatsapp className="text-[#c60678]" size={26}></FaWhatsapp><span className="flex flex-col gap-2"><span className="font-bold">Whatsapp</span><span>+8801843821277</span></span></p>
                    <p className="flex gap-6 items-center"><FaLocationDot className="text-[#c60678]" size={26}></FaLocationDot><span className="flex flex-col gap-2"><span className="font-bold">Location</span><span>28/2 Shamibagh Road, Dhaka</span></span></p>
                    <p className="flex gap-6 items-center"><MdEmail className="text-[#c60678]" size={26}></MdEmail><span className="flex flex-col gap-2"><span className="font-bold">Email</span><span> tahmidurahmann@gmail.com</span></span></p>
                    <button className="py-3 px-6 font-bold text-xl rounded-full bg-[#c60678] hover:text-[#c60678] border text-white border-[#c60678] hover:bg-[#09101a]"><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/tahmidur-rahmann/" className="flex gap-3 justify-center items-center">LinkedIn<FaLinkedin size={23}></FaLinkedin></a></button>
                </div>
            </div>
        </div>
    );
};

export default About;