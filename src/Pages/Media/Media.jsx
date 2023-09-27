import { PiThumbsUp } from "react-icons/pi";
import { Link } from "react-router-dom";
const Media = () => {
    return (
        <div className="grid grid-cols-1 gap-5 py-12 px-5 lg:mx-32">
            <div className="rounded-md p-2">
                <div className="flex flex-col md:flex-row justify-center items-center shadow-lg p-4 gap-4 ">
                    <img src="https://firebasestorage.googleapis.com/v0/b/biomed-3abc5.appspot.com/o/photos%2Fcamilo-botia-k4vFDPJoDZk-unsplash.jpge3284916-1e0d-48e7-aaa3-bf2b2384daae?alt=media&token=53fecce7-8b50-4b89-b699-950776b53dbc" className="w-80 rounded-md" alt="" />
                    <div className="flex flex-col">
                        <p className="px-0 xl:px-10">Natures beauty is an extraordinary tapestry, meticulously crafted over countless millennia. It encompasses the grandeur of towering mountains, the serenity of meandering rivers, and the captivating diversity of life. In verdant forests, an enchanting array of flora and fauna thrives, each a testament to the intricacies of ecosystems. Crystal-clear lakes mirror the sky, offering a canvas for the play of light and reflection. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue ultricies justo. Quisque gravida congue lectus.</p>
                        <div className="flex justify-around mt-5 p-2">
                            <PiThumbsUp className="text-4xl" />
                            <Link to='/post-details' className="rounded-md px-3 py-2 text-sm md:text-base md:px-8 hover:bg-blue-600 text-black bg-transparent hover:text-white border-blue-600 border-2 duration-500">Details</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rounded-md p-2">
                <div className="flex flex-col md:flex-row justify-center items-center shadow-lg p-4 gap-4 ">
                    <img src="https://firebasestorage.googleapis.com/v0/b/biomed-3abc5.appspot.com/o/photos%2Fcamilo-botia-k4vFDPJoDZk-unsplash.jpge3284916-1e0d-48e7-aaa3-bf2b2384daae?alt=media&token=53fecce7-8b50-4b89-b699-950776b53dbc" className="w-80 rounded-md" alt="" />
                    <div className="flex flex-col">
                        <p className="px-0 xl:px-10">Natures beauty is an extraordinary tapestry, meticulously crafted over countless millennia. It encompasses the grandeur of towering mountains, the serenity of meandering rivers, and the captivating diversity of life. In verdant forests, an enchanting array of flora and fauna thrives, each a testament to the intricacies of ecosystems. Crystal-clear lakes mirror the sky, offering a canvas for the play of light and reflection. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue ultricies justo. Quisque gravida congue lectus.</p>
                        <div className="flex justify-around mt-5 p-2">
                            <PiThumbsUp className="text-4xl" />
                            <button className="rounded-md px-3 py-2 text-sm md:text-base md:px-8 hover:bg-blue-600 text-black bg-transparent hover:text-white border-blue-600 border-2 duration-500">Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Media;