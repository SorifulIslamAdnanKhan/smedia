import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header>
            <div className="py-4">
                {/* Main Navigation Menu */}
                <nav className="relative flex items-center justify-between lg:justify-around p-2">
                    {/* Logo section */}
                    <Link to="/" className="text-2xl md:text-3xl font-bold text-blue-600">SMedia</Link>
                    {/* Nav Items Section */}
                    <ul className="items-center hidden space-x-8 lg:flex">
                        <li className="hover:border-b-4 border-b-blue-500 pr-4 duration-200">
                            <NavLink to='/' className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-slate-950')}>Home</NavLink>
                        </li>
                        <li className="hover:border-b-4 border-b-blue-500 pr-4 duration-200">
                            <NavLink to='/about' className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-slate-950')}>About</NavLink>
                        </li>
                        <li className="hover:border-b-4 border-b-blue-500 pr-4 duration-200">
                            <NavLink to='/media' className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-slate-950')}>Media</NavLink>
                        </li>
                        <li className="hover:border-b-4 border-b-blue-500 pr-4 duration-200">
                            <NavLink to='/login' className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-slate-950')}>Login</NavLink>
                        </li>
                        <li className="hover:border-b-4 border-b-blue-500 pr-4 duration-200 space-y-4">
                            <NavLink to='/signup' className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-slate-950')}>Signup</NavLink>
                        </li>
                        
                    </ul>
                    <div className="flex gap-3 justify-center items-center">
                        {/* Mobile Navbar Section */}
                        <div className="lg:hidden">
                            {/* Dropdown Open Button */}
                            <button
                                aria-label="Open Menu"
                                title="Open Menu"
                                onClick={() => setIsMenuOpen(true)}
                            >
                                <FaBars className="text-xl mt-1 text-gray-600" />
                            </button>
                            {isMenuOpen && (
                                <div className="absolute top-0 left-0 w-full z-30">
                                    <div className="p-5 bg-white border rounded shadow-sm">
                                        {/* Logo section */}
                                        <div className="flex items-center justify-between mb-4">
                                            <div>
                                                <Link to="/" className="inline-flex items-center text-2xl md:text-3xl font-bold text-blue-600">SMedia</Link>
                                            </div>
                                            {/* Dropdown Menu Close Button */}
                                            <div>
                                                <button
                                                    aria-label="Close Menu"
                                                    title="Close Menu"
                                                    onClick={() => setIsMenuOpen(false)}
                                                >
                                                    <GrClose className="text-xl text-gray-600" />
                                                </button>
                                            </div>
                                        </div>
                                        {/* Mobile Nav Items Section */}
                                        <nav>
                                            <ul className="space-y-4">
                                                <li>
                                                    <NavLink to='/' className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-slate-950')}>Home</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to='/about' className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-slate-950')}>About</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to='/media' className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-slate-950')}>Media</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to='/login' className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-slate-950')}>Login</NavLink>
                                                </li>
                                                <li className="space-y-4">
                                                    <NavLink to='/signup' className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-slate-950')}>Signup</NavLink>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;