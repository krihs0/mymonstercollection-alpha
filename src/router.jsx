import {createBrowserRouter, Navigate} from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import HomePage from "./views/HomePage.jsx";
import Finder from "./components/Finder/Finder.jsx";
import Account from "./components/Account/Account.jsx";
import Collection from "./components/Collection/Collection.jsx";
import ShopFinder from "./components/ShopFinder/ShopFinder.jsx";
import Shop from "./components/Shop/Shop.jsx";

const router = createBrowserRouter([
    
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to="/dashboard" />
            },
            {
                path: '/homepage',
                element: <HomePage />
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/account',
                element: <Account />
            },
            {
                path: '/finder',
                element: <Finder />
            },
            {
                path: '/collection',
                element: <Collection />
            },
            {
                path: '/shopfinder/:id',
                element: <ShopFinder />
            },
            {
                path: '/shopfinder',
                element: <ShopFinder />
            },
            {
                path: '/shop/:id',
                element: <Shop />
            }
        ]
    },
])

export default router;
