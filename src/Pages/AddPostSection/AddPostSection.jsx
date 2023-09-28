import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const AddPostSection = () => {

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const imageHostKey = import.meta.env.VITE_APP_IMBB_Key;
    console.log(imageHostKey);
    const handleAddProduct = (data) => {

        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(photoData => {
                if (photoData.success) {
                    const post = {
                        post: data.post,
                        image: photoData.data.url,
                    }

                    fetch(`http://localhost:5000/post`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(post)
                    })
                        .then(res => res.json())
                        .then(() => {
                            toast.success(`Post is added successfully.`)
                            navigate('/media')
                        })
                }
            })
    }
    return (
        <div className="py-12 px-5 lg:mx-32">
            <h2 className="text-2xl md:text-4xl font-bold text-center text-blue-600">Add Your Post</h2>
            <form onSubmit={handleSubmit(handleAddProduct)} action="#" className="py-12 w-full md:w-[550px] mx-auto flex flex-col gap-5 items-center p-2">
                <textarea {...register('post',
                    { required: 'Post content is required.' })}
                    className="py-5 px-3 border w-full border-gray-300 rounded-md"
                    rows="4" />
                {errors.description && <p className='text-red-600'>{errors.description.message}</p>}
                <input 
                type='file'
                {...register('image',
                    { required: 'Post image is required.' })}
                    className="w-full py-5 px-3 my-5 border border-gray-300 rounded-md" />
                {errors.image && <p className='text-red-600'>{errors.image.message}</p>}
                <button className="rounded-md px-3 py-2 text-sm md:text-base md:px-8 hover:bg-blue-600 text-black bg-transparent hover:text-white border-blue-600 border-2 duration-500">Submit</button>
            </form>
        </div>
    );
};

export default AddPostSection;