import { FaMessage } from "react-icons/fa6";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import toast from "react-hot-toast";

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_c1kaq1l', 'template_sbprd1h', form.current, 'kM2ZZ-I4QiQPp3W81')
            .then((result) => {
                if (result.text) {
                    toast.success('Successfully sended your message!')
                }
            }, (error) => {
                toast.error(error.text);
            });
    };

    return (
        <div id="contact">
            <h1 className="uppercase text-[#c60678] text-center font-semibold text-xl pt-24 md:pt-40">Get in touch</h1>
            <p className="text-2xl md:text-5xl font-bold text-center py-4">Let's discuss <br /> about an project!</p>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-16 max-w-screen-xl mx-auto text-white my-16 md:px-6">
                <div>
                    <h1 className="text-2xl text-center md:text-left md:text-3xl font-bold py-6">Message me</h1>
                    <form ref={form} onSubmit={sendEmail} className="bg-[#09101A] p-8">
                        <div className="flex flex-col md:flex-row md:gap-12 gap-6 justify-center items-center">
                            <label
                                htmlFor="UserName"
                                className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                            >
                                <input
                                    type="text"
                                    id="UserName"
                                    name="user_name"
                                    placeholder="Your Name"
                                    className="peer h-8 w-72 border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                />
                                <span
                                    className="absolute left-0 top-2 -translate-y-1/2 text-xs transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                                >
                                    Your Name
                                </span>

                            </label>
                            <label
                                htmlFor="UserEmail"
                                className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                            >
                                <input
                                    type="email"
                                    id="UserEmail"
                                    name="user_email"
                                    placeholder="Your Email"
                                    className="peer h-8 w-72 border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                />
                                <span
                                    className="absolute left-0 top-2 -translate-y-1/2 text-xs transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                                >
                                    Your Email
                                </span>

                            </label>
                        </div>
                        <div className="my-6">
                            <label
                                htmlFor="Subject"
                                className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                            >
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    placeholder="Subject Field"
                                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                />
                                <span
                                    className="absolute left-0 top-2 -translate-y-1/2 text-xs transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                                >
                                    Subject Field
                                </span>

                            </label>
                        </div>
                        <div>
                            <label htmlFor="OrderNotes" className="sr-only">Order notes</label>
                            <div className="overflow-hidden my-6">
                                <textarea
                                    id="OrderNotes"
                                    name="message"
                                    className="w-full resize-none border-x-0 border-t-0 border-gray-200 bg-[#09101A] p-4 align-top sm:text-sm"
                                    rows="8"
                                    placeholder="Message Field"
                                ></textarea>
                            </div>
                        </div>
                        <button className="flex gap-6 py-2 my-8 justify-center items-center w-full bg-[#c60678] hover:text-[#c60678] border text-white border-[#c60678] value='Send Message' hover:bg-[#09101a]" type="submit">Send Message <FaMessage /></button>
                    </form>
                    {/* <form ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <input type="text" className="text-black" name="user_name" />
                        <label>Email</label>
                        <input type="email" className="text-black" name="user_email" />
                        <label>Message</label>
                        <textarea className="text-black" name="message" />
                        <input type="submit" value="Send" />
                    </form> */}
                </div>
                <div style={{ width: "100%" }}><iframe width="100%" height="600" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=28/2%20Shamibagh,%20dhaka+(Tahmidur%20Rahman)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population calculator map</a></iframe></div>
            </div>
        </div>
    );
};

export default Contact;