import Heading from "../../shared/Heading/Heading";
import Marquee from "react-fast-marquee";

const Skills = () => {
    return (
        <div id="skills">
            <Heading title="My Skills"></Heading>
            <div className="max-w-screen-xl mx-auto px-6 lg:px-0">
                <Marquee>
                    <div className="flex justify-between items-center gap-8 md:gap-32">
                        <img src="https://i.ibb.co/k0wwS3z/HTML.png" />
                        <img src="https://i.ibb.co/3WKV4vK/css.png" />
                        <img src="https://i.ibb.co/8247qLL/Java-Script.png" />
                        <img src="https://i.ibb.co/0yzRCQW/react.png" />
                        <img src="https://i.ibb.co/Bs3RD3Z/tailwind.png" />
                        <img src="https://i.ibb.co/1X22qrB/firebase.png" />
                        <img src="https://i.ibb.co/VM0Nntk/node.png" />
                        <img src="https://i.ibb.co/2NHC17p/express.png" />
                        <img src="https://i.ibb.co/BcgLQ58/mongo.png" />
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default Skills;