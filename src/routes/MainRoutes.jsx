import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AdminLayouts from "../components/layouts/AdminLayouts";
import AddServices from "../components/ui/Dashboard/AddServices/AddServices";
import ManageServices from "../components/ui/Dashboard/ManageServices/ManageServices";
import UpdateService from "../components/ui/Dashboard/ManageServices/UpdateService/UpdateService";
import MySchedules from "../components/ui/MySchedule/Booking";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ErrorPages from "../pages/ErrorPages/ErrorPages";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Menu from "../pages/Menu/Menu";
import Services from "../pages/PopularServices/PopularServices";
import Register from "../pages/Register";
import ShowAllServices from "../pages/ShowAllServices/ShowAllServices";
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
                path: 'addServices',
                element: <PrivateRoutes><AddServices></AddServices></PrivateRoutes>
            },
            {
                path: 'manageServices',
                element: <PrivateRoutes><ManageServices></ManageServices></PrivateRoutes>
            },
            {
                path: 'addService/update',
                element: <PrivateRoutes><UpdateService></UpdateService></PrivateRoutes>
            },
            {
                path: 'schedules',
                element: <PrivateRoutes><MySchedules></MySchedules></PrivateRoutes>
            },
            {
                path: 'showAllServices',
                element: <ShowAllServices></ShowAllServices>
            },
            {
                path: '/services/singleService/:id',
                element: <PrivateRoutes><SingleServices></SingleServices></PrivateRoutes>,
                loader: ({params}) => fetch(`http://localhost:5007/services/${params.id}`)
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