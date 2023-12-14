import { GrDownload } from "react-icons/gr";
import "./Banner.css";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";

const Banner = () => {

    return (
        <div className="background" id="home">
            <div className="max-w-screen-xl mx-auto min-h-screen">
                <div className="flex flex-col lg:flex-row justify-evenly items-center gap-8 lg:gap-16 xl:gap-60 py-24 lg:py-56">
                    <div className="space-y-6 lg:w-3/4 px-16 lg:px-4">
                        <motion.div initial={{ y: -150 }} animate={{ y: 0 }} transition={{ duration: "2", delay: "0" }} className="text-xl md:text-4xl font-extrabold text-white">Hello, I'm <br /><span className="text-2xl  lg:text-6xl">Tahmidur Rahman</span></motion.div>
                        <TypeAnimation
                            sequence={[
                                'Transforming Vision into Interactive Reality.',
                                1000,
                                'Crafting Aesthetically Pleasing User Journeys.',
                                1000,
                                'Bringing Designs to Life with Precision.',
                                1000,
                                'Where Creativity Meets Code.',
                                1000
                            ]}
                            wrapper="span"
                            className="text-[#c60678] font-semibold text-xl md:text-2xl lg:text-3xl"
                            speed={50}
                            style={{ display: 'inline-block'}}
                            repeat={Infinity}
                        />
                        <div className="flex">
                            <a href="https://drive.google.com/uc?export=download&id=1Vgbx0G83EJLYEIjQm048Mh0mgdzEhQYN" className="flex gap-2 md:gap-3 justify-center items-center py-2 px-4 md:py-3 md:px-6 rounded-full bg-[#c60678] hover:text-[#c60678] border text-white border-[#c60678] hover:bg-[#09101a]">Download Resume <GrDownload /></a>
                        </div>
                    </div>
                    <motion.div initial={{ y: 150 }} animate={{ y: 0 }} transition={{ duration: "2", delay: "0"}}>
                        <img className="rounded-full border-x-transparent border-y-[#c60678]  border-8 w-60 md:w-72 lg:w-full" src="https://i.ibb.co/Nr7XXRX/270224004-3140648616261730-993033304660391605-n.jpg" alt="" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Banner;