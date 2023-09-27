import { Link } from "react-router-dom";

const PostSection = () => {
    return (
        <section>
            <h2 className="text-2xl md:text-4xl font-bold text-center text-blue-600">Most Liked Posts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 py-12 px-5 lg:mx-32">
                <div className="rounded-md border-2 text-center p-2">
                    <img src="https://firebasestorage.googleapis.com/v0/b/biomed-3abc5.appspot.com/o/photos%2Fcamilo-botia-k4vFDPJoDZk-unsplash.jpge3284916-1e0d-48e7-aaa3-bf2b2384daae?alt=media&token=53fecce7-8b50-4b89-b699-950776b53dbc" className="w-full rounded-md" alt="" />
                    <p className="text-sm px-0 xl:px-10 py-4">Natures beauty is an extraordinary tapestry, meticulously crafted over.</p>
                    <div className="py-4">
                    <Link to='/post-details' className="rounded-md px-3 py-2 text-sm md:text-base md:px-8 hover:bg-blue-600 text-black bg-transparent hover:text-white border-blue-600 border-2 duration-500">Details</Link>
                    </div>
                </div>
                <div className="rounded-md border-2 text-center p-2">
                    <img src="https://firebasestorage.googleapis.com/v0/b/biomed-3abc5.appspot.com/o/photos%2Fcamilo-botia-k4vFDPJoDZk-unsplash.jpge3284916-1e0d-48e7-aaa3-bf2b2384daae?alt=media&token=53fecce7-8b50-4b89-b699-950776b53dbc" className="w-full rounded-md" alt="" />
                    <p className="text-sm px-0 xl:px-10 py-4">Natures beauty is an extraordinary tapestry, meticulously crafted over.</p>
                    <div className="py-4">
                    <Link to='/post-details' className="rounded-md px-3 py-2 text-sm md:text-base md:px-8 hover:bg-blue-600 text-black bg-transparent hover:text-white border-blue-600 border-2 duration-500">Details</Link>
                    </div>
                </div>
                <div className="rounded-md border-2 text-center p-2">
                    <img src="https://firebasestorage.googleapis.com/v0/b/biomed-3abc5.appspot.com/o/photos%2Fcamilo-botia-k4vFDPJoDZk-unsplash.jpge3284916-1e0d-48e7-aaa3-bf2b2384daae?alt=media&token=53fecce7-8b50-4b89-b699-950776b53dbc" className="w-full rounded-md" alt="" />
                    <p className="text-sm px-0 xl:px-10 py-4">Natures beauty is an extraordinary tapestry, meticulously crafted over.</p>
                    <div className="py-4">
                    <Link to='/post-details' className="rounded-md px-3 py-2 text-sm md:text-base md:px-8 hover:bg-blue-600 text-black bg-transparent hover:text-white border-blue-600 border-2 duration-500">Details</Link>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default PostSection;