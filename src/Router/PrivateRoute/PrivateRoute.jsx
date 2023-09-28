import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const PrivateRoute = ({children}) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className="flex justify-center items-center h-screen">
            <div className="w-10 h-10 border-4 border-slate-700 rounded-full animate-spin"></div>
        </div>
    }

   else if (user) {
        return children;
    }

    return (<Navigate to='/login' state={{ from: location }} replace></Navigate>);
};

export default PrivateRoute;