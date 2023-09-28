import { FaGoogle } from 'react-icons/fa';
import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const Signup = () => {

    const { createUser, updateUser, googleSignIn } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [signupError, setSignupError] = useState('');

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    // Insert User to Database
    const saveUserToDB = (user) => {
        
        const userData = {
            name: user.name,
            email: user.email,
        }

        fetch(`http://localhost:5000/user`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(data => { })
    }

    // Create User

    const handleSignup = (data) => {

        setSignupError('');

        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success(`Signup successfully.`);
                navigate(from, { replace: true });
                reset();

                const userData = {
                    displayName: data.name,
                }
                updateUser(userData)
                    .then(() => {
                        saveUserToDB(data);
                    })
                    .catch(error => console.log(error))
            })
            .catch(error => {
                console.log(error.message);
                setSignupError(error.message);
            })
    }

    // Google Sign In

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                const googleUser = {
                    name: user.displayName,
                    email: user.email
                }

                console.log(googleUser);
                saveUserToDB(googleUser);
                toast.success(`Signup successfully.`);
                navigate(from, { replace: true });
                setSignupError('');
            })
            .catch(error => {
                setSignupError(error.message);
            });
    }

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
                <div>
                    {signupError && <p className='text-red-600'>{signupError}</p>}
                </div>
                
            </form>
            <div className="flex flex-col justify-center items-center gap-2">
                    <p className="text-sm py-5">Already have account. Please <Link to="/login" className="text-blue-600">Login!</Link></p>
                    <button onClick={handleGoogleSignIn} className="px-4 py-3 mt-5 text-white duration-500 bg-blue-600 rounded-md"><FaGoogle /></button>
                </div>
          

        </div>

    );
};

export default Signup;