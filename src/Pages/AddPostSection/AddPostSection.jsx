
const AddPostSection = () => {
    return (
        <div className="py-12 px-5 lg:mx-32">
            <h2 className="text-2xl md:text-4xl font-bold text-center text-blue-600">Add Your Post</h2>
            <form action="#" className="py-12 w-full md:w-[550px] mx-auto flex flex-col gap-5 items-center p-2">
                <textarea name="post" rows="6" className=" py-5 px-3 border w-full border-gray-300 rounded-md" placeholder="Post" required />
                <input type="file" name="post-image" className=" w-full py-5 px-3 my-5 border border-gray-300 rounded-md" placeholder="Post Image" required />
                <button className="rounded-md px-3 py-2 text-sm md:text-base md:px-8 hover:bg-blue-600 text-black bg-transparent hover:text-white border-blue-600 border-2 duration-500">Submit</button>
            </form>
        </div>
    );
};

export default AddPostSection;