import { GrDownload } from "react-icons/gr";
import "./Banner.css";
import pdf from "../../../assets/Resume - Google Docs.pdf";
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {

    const handleDownloadResume = () => {
        const pdfPath = pdf;
        const link = document.createElement('a');
        link.href = pdfPath;
        link.download = 'Tahmidur Rahman Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <div className="background" id="home">
            <div className="max-w-screen-xl mx-auto min-h-screen">
                <div className="flex flex-col lg:flex-row justify-evenly items-center gap-8 lg:gap-16 xl:gap-60 py-24 lg:py-56">
                    <div className="space-y-6 lg:w-3/4 px-16 lg:px-4">
                        <h1 className="text-2xl md:text-4xl font-extrabold text-white">Hello, I'm <br /><span className="text-4xl md:text-6xl">Tahmidur Rahman</span></h1>
                        <TypeAnimation
                            sequence={[
                                'Frontend Alchemist : Transforming Vision into Interactive Reality.',
                                1000, 
                                'Code Composer : Crafting Aesthetically Pleasing User Journeys.',
                                1000,
                                'Pixel Perfect Developer : Bringing Designs to Life with Precision.',
                                1000,
                                'Navigating the Digital Frontier : Where Creativity Meets Code.',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '2em', display: 'inline-block' }}
                            repeat={Infinity}
                        />
                        <button onClick={handleDownloadResume} className="flex gap-3 justify-center items-center py-3 px-6 rounded-full bg-[#c60678] hover:text-[#c60678] border text-white border-[#c60678] hover:bg-[#09101a]">Download Resume <GrDownload /></button>
                    </div>
                    <div>
                        <img className="rounded-full border-x-transparent border-y-[#c60678]  border-8 w-96 lg:w-full" src="https://i.ibb.co/Nr7XXRX/270224004-3140648616261730-993033304660391605-n.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;