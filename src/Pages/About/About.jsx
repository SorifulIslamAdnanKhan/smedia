import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="w-full md:w-[550px] mx-auto py-12">
            <div className="rounded-md border-2 p-2 py-4">
                <h3 className="text-xl md:text-2xl py-4">Natures beauty is an</h3>
                <div className="py-4">
                    <p className="px-0 xl:px-10">Email: </p>
                    <p className="px-0 xl:px-10 py-4">Address: </p>
                    <p className="px-0 xl:px-10">University: </p>
                </div>
                <div className="text-center">
                    <Link to='/post-details' className="rounded-md px-3 py-2 text-sm md:text-base md:px-8 hover:bg-blue-600 text-black bg-transparent hover:text-white border-blue-600 border-2 duration-500">Edit</Link>
                </div>
            </div>
        </div>


    );
};

export default About;