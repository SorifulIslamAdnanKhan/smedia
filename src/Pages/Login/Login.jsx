import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="py-12">
            <form action="#" className="my-5 h-screen flex flex-col justify-center items-center">
                <h3 className="text-2xl md:text-4xl font-bold text-blue-600">Log In</h3>
                <div className="w-full md:w-[550px] mx-auto mt-12">
                    <input type="email" name="email" className="w-full py-5 px-3 border border-gray-300 rounded-md" placeholder="Email" />
                    <input type="password" name="password" className="w-full py-5 px-3 my-5 border border-gray-300 rounded-md" placeholder="Password" />
                </div>
                <div className="text-center my-5">
                    <button className="rounded-md px-3 py-2 text-sm md:text-base md:px-8 hover:bg-blue-600 text-black bg-transparent hover:text-white border-blue-600 border-2 duration-500">Log In</button>
                </div>
                <p className="text-sm">Do not have account. Please <Link to="/signup" className="text-blue-600">Register!</Link></p>
            </form>
        </div>
    );
};

export default Login;