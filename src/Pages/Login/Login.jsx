import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
const Login = () => {

    const {login} = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = (event) =>{
        setError('');

        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
        .then(result =>{
            const user = result.user;
            form.reset();
            navigate(from, {replace: true})
        })
        .catch(error=>{
            setError(error.message);
        })
    }

    return (
        <div className="py-12">
            <form onSubmit={handleLogin} action="#" className="my-5 flex flex-col justify-center items-center p-2">
                <h3 className="text-2xl md:text-4xl font-bold text-blue-600">Log In</h3>
                <div className="w-full md:w-[550px] mx-auto mt-12">
                    <input type="email" name="email" className="w-full py-5 px-3 border border-gray-300 rounded-md" placeholder="Email" />
                    <input type="password" name="password" className="w-full py-5 px-3 my-5 border border-gray-300 rounded-md" placeholder="Password" />
                </div>
                <div className="text-center my-5">
                    <button className="rounded-md px-3 py-2 text-sm md:text-base md:px-8 hover:bg-blue-600 text-black bg-transparent hover:text-white border-blue-600 border-2 duration-500">Log In</button>
                </div>
                <p className='text-sm mt-4 text-red-600'>{error}</p>
                <p className="text-sm">Do not have account. Please <Link to="/signup" className="text-blue-600">Register!</Link></p>
            </form>
        </div>
    );
};

export default Login;