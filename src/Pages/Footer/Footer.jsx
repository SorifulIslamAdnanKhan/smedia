import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black py-12 p-4 md:px-24 text-gray-400">
            <div className="flex justify-between items-center flex-col lg:flex-row gap-4 py-5">
                <Link to="/" className="text-2xl font-bold md:text-3xl text-blue-600">SMedia</Link>
                <div className="flex gap-2 py-3 ">
                        <a href="#" className="rounded-full bg-blue-600 p-2  text-white"><FaFacebookF></FaFacebookF></a>
                        <a href="#" className="rounded-full bg-blue-600 p-2 text-white"><FaTwitter></FaTwitter></a>
                        <a href="#" className="rounded-full bg-blue-600 p-2 text-white"><FaLinkedin></FaLinkedin></a>
                        <a href="#" className="rounded-full bg-blue-600 p-2 text-white"><FaYoutube></FaYoutube></a>
                    </div>
            </div>
            <div className="py-5 flex flex-col-reverse lg:flex-row items-center justify-around gap-4 border-t-2 border-slate-900">
                <p className="">Copyright © 2023 SMedia - All right reserved</p>
                <ul className="flex gap-5 items-center text-sm">
                    <li><Link to="">Terms of Use</Link></li>
                    <li><Link to="">Privacy Policy</Link></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;