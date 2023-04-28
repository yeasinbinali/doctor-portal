import { createBrowserRouter } from "react-router-dom";
import AddDoctor from "../../layout/AddDoctor/AddDoctor";
import DashboardLayout from "../../layout/DashboardLayout/DashboardLayout";
import Main from "../../layout/Main";
import About from "../../pages/About/About";
import AddDoctorContainer from "../../pages/AddDoctorContainer/AddDoctorContainer";
import AllUsersContainer from "../../pages/AllUserContainer/AllUserContainer";
import Appointment from "../../pages/Appointment/Appointment/Appointment";
import Home from "../../pages/Home/Home/Home";
import YourReviews from "../../pages/Home/Testimonial/YourReviews/YourReviews";
import Login from "../../pages/Login/Login";
import MyAppointmentPage from "../../pages/MyAppointmentPage/MyAppointmentPage";
import Payment from "../../pages/Payment/Payment";
import Reviews from "../../pages/Reviews/Reviews";
import Signup from "../../pages/Signup/Signup";
import DisplayError from "../../shared/DisplayError/DisplayError";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
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
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointmentPage></MyAppointmentPage>
            },
            {
                path: '/dashboard/allusers',
                element: <AllUsersContainer></AllUsersContainer>
            },
            {
                path: '/dashboard/adddoctor',
                element: <AddDoctorContainer></AddDoctorContainer>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({params}) => fetch(`http://localhost:5000/bookings/${params.id}`)
            }
        ]
    },
    {
        path: '*',
        element: <div>The page is not found</div>
    }
])