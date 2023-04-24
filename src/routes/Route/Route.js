import { createBrowserRouter } from "react-router-dom";
import AddDoctor from "../../layout/AddDoctor/AddDoctor";
import AllUsers from "../../layout/AllUsers/AllUsers";
import DashboardLayout from "../../layout/DashboardLayout/DashboardLayout";
import Main from "../../layout/Main";
import MyAppointment from "../../layout/MyAppointment/MyAppointment";
import About from "../../pages/About/About";
import Appointment from "../../pages/Appointment/Appointment/Appointment";
import Home from "../../pages/Home/Home/Home";
import YourReviews from "../../pages/Home/Testimonial/YourReviews/YourReviews";
import Login from "../../pages/Login/Login";
import Reviews from "../../pages/Reviews/Reviews";
import Signup from "../../pages/Signup/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
            },
            {
                path: '/yourReview',
                element: <PrivateRoute><YourReviews></YourReviews></PrivateRoute>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/allusers',
                element: <AllUsers></AllUsers>
            },
            {
                path: '/dashboard/adddoctor',
                element: <AddDoctor></AddDoctor>
            }
        ]
    },
    {
        path: '*',
        element: <div>The page is not found</div>
    }
])