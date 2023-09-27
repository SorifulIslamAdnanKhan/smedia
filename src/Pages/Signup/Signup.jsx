import { Link } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';

const Signup = () => {
    return (

        <div className="py-12">
            <form action="#" className="my-5 h-screen flex flex-col justify-center items-center p-2">
                <h3 className="text-2xl md:text-4xl font-bold text-blue-600">Register</h3>
                <div className="w-full md:w-[550px] mx-auto mt-12">
                    <input type="text" name="name" className="w-full py-5 px-3 border border-gray-300 rounded-md" placeholder="Name" required />
                    <input type="email" name="email" className="w-full py-5 px-3 my-5 border border-gray-300 rounded-md" placeholder="Email" required />
                    <input type="text" name="address" className="w-full py-5 px-3 border border-gray-300 rounded-md" placeholder="Address" required />
                    <input type="text" name="university" className="w-full py-5 px-3 my-5 border border-gray-300 rounded-md" placeholder="University" required />
                </div>
                <div className="text-center py-5">
                    <button className="rounded-md px-3 py-2 text-sm md:text-base md:px-8 hover:bg-blue-600 text-black bg-transparent hover:text-white border-blue-600 border-2 duration-500">Register</button>
                </div>

                <div className="flex flex-col justify-center items-center gap-2">
                    <p className="text-sm py-5">Already have account. Please <Link to="/login" className="text-blue-600">Login!</Link></p>
                    <button className="px-4 py-3 text-white duration-500 bg-blue-600 rounded-md"><FaGoogle/></button>
                </div>
            </form>
        </div>

    );
};

export default Signup;