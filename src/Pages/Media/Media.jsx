import { useEffect, useState } from "react";
import { PiThumbsUp } from "react-icons/pi";
import { Link } from "react-router-dom";
const Media = () => {

    const [posts, setPosts] = useState([]);

    // Fetch API data
    const url = 'http://localhost:5000/post';

    useEffect(() => {

        fetch(url)
            .then(res => res.json())
            .then(data => {
                setPosts(data)
            })
    }, []);

    return (
        <div className="grid grid-cols-1 gap-5 py-12 px-5 lg:mx-32">
            {
                posts.map(post =><div className="rounded-md p-2" key={post._id}>
                <div className="flex flex-col md:flex-row justify-center items-center shadow-lg p-4 gap-4 ">
                    <img src={post.image} className="w-80 rounded-md" alt="" />
                    <div className="flex flex-col">
                        <p className="px-0 xl:px-10">{post.post}</p>
                        <div className="flex justify-around gap-5 mt-5 p-2">
                            <PiThumbsUp className="text-4xl" />
                            <Link to='/post-details' className="rounded-md px-3 py-2 text-sm md:text-base md:px-8 hover:bg-blue-600 text-black bg-transparent hover:text-white border-blue-600 border-2 duration-500">Details</Link>
                        </div>
                    </div>
                </div>
            </div>
            )
            }
        </div>
    );
};

export default Media;