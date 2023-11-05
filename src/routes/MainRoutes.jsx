import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AdminLayouts from "../components/layouts/AdminLayouts";
import About from "../pages/About";
import AddService from "../pages/AddService";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoutes from "./PrivateRoutes";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: 'about',
                element: <PrivateRoutes><About></About></PrivateRoutes>
            },
            {
                path: 'contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>
            },        
        ]
    },
    {
        path: '/admin',
        element: <AdminLayouts></AdminLayouts>,
        children: [
            {
                path: 'addService',
                element: <AddService></AddService>
            }
        ]
    }
])
export default routes;