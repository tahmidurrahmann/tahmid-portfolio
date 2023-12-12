import Heading from "../../shared/Heading/Heading";

const Skills = () => {
    return (
        <div id="skills">
            <Heading title="My Skills"></Heading>
            <div className="max-w-screen-xl mx-auto px-12 lg:px-0">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-24">
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-center items-center gap-12">
                            <img src="https://i.ibb.co/k0wwS3z/HTML.png" />
                            <div className="flex flex-col justify-center items-center gap-4">
                                <p className="text-xl font-bold">70%</p>
                                <progress className="progress bg-white progress-error w-52 md:w-96" value="70" max="100"></progress>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-12">
                            <img src="https://i.ibb.co/3WKV4vK/css.png" />
                            <div className="flex flex-col justify-center items-center gap-4">
                                <p className="text-xl font-bold">65%</p>
                                <progress className="progress bg-white progress-error w-52 md:w-96" value="65" max="100"></progress>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-12">
                            <img src="https://i.ibb.co/8247qLL/Java-Script.png" />
                            <div className="flex flex-col justify-center items-center gap-4">
                                <p className="text-xl font-bold">60%</p>
                                <progress className="progress bg-white progress-error w-52 md:w-96" value="60" max="100"></progress>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-12">
                            <img src="https://i.ibb.co/0yzRCQW/react.png" />
                            <div className="flex flex-col justify-center items-center gap-4">
                                <p className="text-xl font-bold">70%</p>
                                <progress className="progress bg-white progress-error w-52 md:w-96" value="70" max="100"></progress>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-center items-center gap-12">
                            <img src="https://i.ibb.co/Bs3RD3Z/tailwind.png" />
                            <div className="flex flex-col justify-center items-center gap-4">
                                <p className="text-xl font-bold">90%</p>
                                <progress className="progress bg-white progress-error w-52 md:w-96" value="90" max="100"></progress>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-12">
                            <img src="https://i.ibb.co/1X22qrB/firebase.png" />
                            <div className="flex flex-col justify-center items-center gap-4">
                                <p className="text-xl font-bold">70%</p>
                                <progress className="progress bg-white progress-error w-52 md:w-96" value="70" max="100"></progress>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-12">
                            <img src="https://i.ibb.co/VM0Nntk/node.png" />
                            <div className="flex flex-col justify-center items-center gap-4">
                                <p className="text-xl font-bold">60%</p>
                                <progress className="progress bg-white progress-error w-52 md:w-96" value="60" max="100"></progress>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-12">
                            <img src="https://i.ibb.co/2NHC17p/express.png" />
                            <div className="flex flex-col justify-center items-center gap-4">
                                <p className="text-xl font-bold">50%</p>
                                <progress className="progress bg-white progress-error w-52 md:w-96" value="50" max="100"></progress>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-start items-center gap-12 mt-8">
                        <img src="https://i.ibb.co/BcgLQ58/mongo.png" />
                        <div className="flex flex-col justify-center items-center gap-4">
                            <p className="text-xl font-bold">65%</p>
                            <progress className="progress bg-white progress-error w-52 md:w-96" value="65" max="100"></progress>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Skills;