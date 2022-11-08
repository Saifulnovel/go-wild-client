import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../../../Main/Home/Home';
import Main from '../../../Main/Main';
import Blogs from '../../Pages/Blogs/Blogs';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/blogs',
                element:<Blogs></Blogs>
            }
        ]
    }
])
export default routes;