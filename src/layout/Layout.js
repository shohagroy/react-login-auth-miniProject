import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from '../components/ErrorPage';
import Footer from '../components/Footer';
import Home from '../components/Home';
import Main from '../components/Main';
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import PrivateRoute from '../components/PrivateRoute';

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage/>,
        element: <Main/>, children: [
            {path: '/', element: <PrivateRoute><Home/></PrivateRoute>},
            {path: '/login', element: <Login/>},
            {path: '/sign-up', element: <SignUp/>}
        ]
    }
])

const Layout = () => {
    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
};

export default Layout;