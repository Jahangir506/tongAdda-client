import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AdminLayouts from "../components/layouts/AdminLayouts";
import About from "../pages/About";
import AddServices from "../pages/AddServices/AddServices";
import Contact from "../pages/Contact";
import ErrorPages from "../pages/ErrorPages/ErrorPages";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ManageServices from "../pages/ManageServices/ManageServices";
import Menu from "../pages/Menu/Menu";
import Register from "../pages/Register";
import Schedules from "../pages/Schedules/Schedules";
import Services from "../pages/Services/Services";
import SingleServices from "../pages/SingleServices/SingleServices";
import PrivateRoutes from "./PrivateRoutes";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <ErrorPages></ErrorPages>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: 'services',
                element: <Services></Services>
            },
            {
                path: 'menu',
                element:<Menu></Menu>
            },
            {
                path: 'singleServices',
                element: <PrivateRoutes><SingleServices></SingleServices></PrivateRoutes>
            },
            {
                path: 'addServices',
                element: <PrivateRoutes><AddServices></AddServices></PrivateRoutes>
            },
            {
                path: '/manageServices',
                element: <PrivateRoutes><ManageServices></ManageServices></PrivateRoutes>
            },
            {
                path: 'schedules',
                element: <PrivateRoutes><Schedules></Schedules></PrivateRoutes>
            },
            {
                path: 'about',
                element: <About></About>
            },
            {
                path: 'contact',
                element: <Contact></Contact>
            },
            {
                path: 'login',
                element: <Login></Login>,
            },
            {
                path: 'register',
                element: <Register></Register>
            },        
        ]
    },
    {
        path: '/admin',
        element: <AdminLayouts></AdminLayouts>,
        children: [
            
        ]
    }
])
export default routes;