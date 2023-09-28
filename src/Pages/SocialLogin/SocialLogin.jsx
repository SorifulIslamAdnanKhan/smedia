import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const SocialLogin = () => {
    const {  googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;

        const saveUser = { name: user.displayName, email: user.email };
        fetch("http://localhost:5000/user", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then(() => {
            navigate(from, { replace: true });
          });
      })
      .catch((error) => console.log(error.message));
};


    return (
        <div className="flex flex-col justify-center items-center gap-2">
            <p className="text-sm py-5">Already have account. Please <Link to="/login" className="text-blue-600">Login!</Link></p>
            <button onClick={handleGoogleSignIn} className="px-4 py-3 mt-5 text-white duration-500 bg-blue-600 rounded-md"><FaGoogle /></button>
        </div>
    );
};

export default SocialLogin;