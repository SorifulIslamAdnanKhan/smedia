import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import About from "../Pages/About/About";
import Media from "../Pages/Media/Media";
import PostDetails from "../Pages/PostDetails/PostDetails";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const router = createBrowserRouter ([
    {
        path: '/',
        element: <Main/>,
        children:[
            {
                path: '/',
                element: <PrivateRoute><Home/></PrivateRoute>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/media',
                element: <Media/>
            },
            {
                path: '/post-details',
                element: <PostDetails/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signup',
                element: <Signup/>
            },
        ]
    }
])