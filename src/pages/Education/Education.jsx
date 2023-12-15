import Heading from "../../shared/Heading/Heading";
import { motion } from "framer-motion";

const Education = () => {
    return (
        <div id="education" className="max-w-screen-xl mx-auto">
            <Heading title="my education & experiences"></Heading>
            <div className="flex flex-col lg:flex-row gap-6 md:gap-0 px-6 lg:px-0">
                <motion.div initial={{ y: 150 }} animate={{ y: 0 }} transition={{ duration: "8", delay: "0" }}>
                    <h1 className="text-center font-semibold text-xl py-4 md:text-3xl">Education</h1>
                    <div>
                        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                            <li>
                                <div className="timeline-middle">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                </div>
                                <div className="timeline-start md:text-end mb-10">
                                    <time className="font-mono italic">2022-Present</time>
                                    <div className="font-extrabold"><p>Bachelor of Science in Computer Science and Engineering</p><p>Dhaka City College</p></div>
                                    <p className="text-sm">Currently pursuing a comprehensive BSc program with a focus on Computer Science and Engineering at City College, Dhaka.
                                    Gaining a solid foundation in core computer science principles, algorithms, and data structures.
                                    Actively participating in coursework covering a range of topics including software engineering, databases, and web development.
                                    Engaging in hands-on projects that apply theoretical concepts to real-world scenarios, fostering practical problem-solving skills.</p>
                                </div>
                                <hr />
                            </li>
                            <li>
                                <hr />
                                <div className="timeline-middle">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                </div>
                                <div className="timeline-start md:text-end mb-10">
                                    <time className="font-mono italic">2021-2022</time>
                                    <div className="font-extrabold"><p>Higher Secondary Certificate (HSC)</p><p>Engineering University School & College</p></div>
                                    <p className="text-sm">Successfully completed the Higher Secondary Certificate program with a focus on a well-rounded education at Engineering University School & College, Dhaka.</p>
                                </div>
                                <hr />
                            </li>
                            <li>
                                <hr />
                                <div className="timeline-middle">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                </div>
                                <div className="timeline-start md:text-end mb-10">
                                    <time className="font-mono italic">2020</time>
                                    <div className="font-extrabold"><p>Secondary School Certificate (SSC)</p><p>Dhaka Collegiate School, Dhaka</p></div>
                                    <p className="text-sm">Successfully completed the SSC program with a specialization in Science from Dhaka Collegiate School.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </motion.div>
                <div className="space-y-3">
                    <h1 className="text-center font-semibold text-xl py-4 md:text-3xl">Experiences</h1>
                    <motion.div initial={{ y: -150 }} animate={{ y: 0 }} transition={{ duration: "8", delay: "0" }}>
                        <time className="font-mono italic">November 2023 - Present</time>
                        <div className="font-extrabold">Freelance Frontend Developer</div>
                        <div className="timeline-end md:text-start mb-10 text-sm">
                            Independently managing and executing frontend development projects, specializing in responsive web design, user interface development.
                            Collaborating with clients to understand project requirements and translating design concepts into functional, user-friendly interfaces.
                            Implementing best practices in web development to ensure code quality, performance, and scalability.
                            Continuously expanding technical skill set through self-directed learning and staying updated on industry trends.
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Education;