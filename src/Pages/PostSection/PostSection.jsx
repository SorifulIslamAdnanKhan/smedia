import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PostSection = () => {
    const [posts, setPosts] = useState([]);
    // Fetch API data
    const url = "https://smedia-server.vercel.app/post";

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setPosts(data);
            });
    }, []);
    return (
        <section>
            <h2 className="text-2xl md:text-4xl font-bold text-center text-blue-600">Most Liked Posts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 py-12 px-5 lg:mx-32">
                {posts.slice(3).map((post) => (
                    <div className="rounded-md border-2 text-center p-2" key={post._id}>
                        <img src={post.image}  className="w-full h-80 object-cover rounded-md" alt="" />
                        <p className="text-sm px-0 xl:px-10 py-4">{post.post.slice(0, 120)}...<button>
                            <Link to={`/post-details/${post._id}`} className="font font-semibold">See More</Link>
                        </button></p>
                        
                    </div>
                ))}

            </div>
        </section>
    );
};

export default PostSection;