
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import SocialLogin from '../SocialLogin/SocialLogin';

const Signup = () => {

    const { createUser, updateUser } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const navigate = useNavigate();


    const handleSignup = (data) => {
        createUser(data.email, data.password).then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser);

            updateUser(data.name)
                .then(() => {
                    const saveUser = { name: data.name, email: data.email };
                    fetch("https://smedia-server.vercel.app/user", {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                        },
                        body: JSON.stringify(saveUser),
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            if (data.insertedId) {
                                reset();
                                Swal.fire(
                                    "Good job!",
                                    "You have successfully signed up!",
                                    "success"
                                );
                                 navigate("/");
                            }
                        });
                })
                .catch((error) => console.log(error));
        });
    };



    return (

        <div className="py-12">
            <form onSubmit={handleSubmit(handleSignup)} action="#" className="my-5 flex flex-col justify-center items-center p-2">
                <h3 className="text-2xl md:text-4xl font-bold text-blue-600">Register</h3>
                <div className="w-full md:w-[550px] mx-auto mt-12">
                    <div>
                        <input
                            type='text'
                            placeholder='Name'
                            {...register('name',
                                { required: 'Name is required.' })}
                            className="w-full py-5 px-3 border border-gray-300 rounded-md" />
                        {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                    </div>
                    <div className="my-2">
                        <input
                            type='text'
                            placeholder='Email'
                            {...register('email',
                                { required: 'Email is required.' })}
                            className="w-full py-5 px-3 border border-gray-300 rounded-md" />
                        {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                    </div>
                    <div>
                        <input
                            type='password'
                            placeholder='Password'
                            {...register('password',
                                { required: 'Password is required.' })}
                            className="w-full py-5 px-3 border border-gray-300 rounded-md" />
                        {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                    </div>

                </div>
                <div className="text-center my-5">
                    <button className="rounded-md px-3 py-2 text-sm md:text-base md:px-8 hover:bg-blue-600 text-black bg-transparent hover:text-white border-blue-600 border-2 duration-500">Register</button>
                </div>
            </form>
            <SocialLogin />
        </div>

    );
};

export default Signup;