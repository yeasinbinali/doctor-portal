import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import About from "../../pages/About/About";
import Appointment from "../../pages/Appointment/Appointment/Appointment";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Reviews from "../../pages/Reviews/Reviews";
import Signup from "../../pages/Signup/Signup";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }, 
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/reviews',
                element: <Reviews></Reviews>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/login', 
                element: <Login></Login>
            }
        ]
    },
    {
        path: '*',
        element: <div>The page is not found</div>
    }
])