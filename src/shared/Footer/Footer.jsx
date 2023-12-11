import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
    return (
        <div>
            <footer className="p-10 footer bg-[#09101a] text-neutral-content">
                <div className="max-w-screen-xl mx-auto w-full footer">
                    <aside className="flex justify-center items-center">
                        <img className="w-[60px]" src="https://i.ibb.co/zSQRGMx/21904da7d079ccffa6b95ecfc6f7bbb7-1.png" alt="" />
                        <p>Copyright © 2023 | All Rights Reserved</p>
                    </aside>
                    <nav>
                        <header className="footer-title">Social</header>
                        <div className="grid grid-flow-col gap-4">
                            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/tahmidur-rahmann/"><FaLinkedin size={23}></FaLinkedin></a>
                            <a rel="noreferrer" target="_blank" href="https://github.com/tahmidurrahmann"><FaGithub size={23}></FaGithub></a>
                            <a rel="noreferrer" target="_blank" href="https://www.facebook.com/tahmidurrahmann/"><FaFacebookF size={23}></FaFacebookF></a>
                            <a rel="noreferrer" target="_blank" href="https://www.instagram.com/tahmidurahmann/"><FaInstagram size={23}></FaInstagram></a>
                        </div>
                    </nav>
                </div>
            </footer>
        </div>
    );
};

export default Footer;