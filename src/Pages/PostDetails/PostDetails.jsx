
const PostDetails = () => {
    return (
        <div className="rounded-md border-2 p-2">
             <div className="flex flex-col md:flex-row justify-center items-center shadow-lg p-4 gap-4 ">
                <img src="https://firebasestorage.googleapis.com/v0/b/biomed-3abc5.appspot.com/o/photos%2Fcamilo-botia-k4vFDPJoDZk-unsplash.jpge3284916-1e0d-48e7-aaa3-bf2b2384daae?alt=media&token=53fecce7-8b50-4b89-b699-950776b53dbc" className="w-80 rounded-md" alt="" />
                <div className="flex flex-col">
                    <p className="px-0 xl:px-10 text-lg">Natures beauty is an extraordinary tapestry, meticulously crafted over countless millennia. It encompasses the grandeur of towering mountains, the serenity of meandering rivers, and the captivating diversity of life. In verdant forests, an enchanting array of flora and fauna thrives, each a testament to the intricacies of ecosystems. Crystal-clear lakes mirror the sky, offering a canvas for the play of light and reflection. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue ultricies justo. Quisque gravida congue lectus.</p>
                    <div className="flex justify-around mt-5 p-2">
                        <p className="text-lg">Total Liked: 100</p>
                    </div>
                </div>
            </div>
            <div className="max-w-2xl mx-auto flex flex-col gap-4 items-center py-10">
                <p className="bg-gray-400 py-2 text-sm px-10 text-center">Natures beauty is an extraordinary tapestry, meticulously crafted over countless millennia. It encompasses the grandeur of towering mountains,</p>
            </div>
                <form action="#" className="py-12 w-full md:w-[550px] mx-auto flex flex-col gap-5 items-center p-2">
                    <textarea name="comment" rows="3" className=" py-5 px-3 border w-full border-gray-300 rounded-md" placeholder="Comment" required />
                    <button className="rounded-md px-3 py-2 text-sm md:text-base md:px-8 hover:bg-blue-600 text-black bg-transparent hover:text-white border-blue-600 border-2 duration-500">Add Comment</button>
                </form>
            </div>
    );
};

export default PostDetails;