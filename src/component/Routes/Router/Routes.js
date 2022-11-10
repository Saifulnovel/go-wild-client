import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../../../Main/Home/Home';
import Main from '../../../Main/Main';
import Blogs from '../../Pages/Blogs/Blogs';
import ErrorPage from '../../Pages/ErrorPage/ErrorPage';
import Login from '../../Pages/Login/Login';
import Review from '../../Pages/Review/Review';
import Service from '../../Pages/Service/Service';
import ServiceDetails from '../../Pages/Service/ServiceDetails';
import SignUp from '../../Pages/SignUp/SignUp';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/review",
        element: <Review />,
      },
      {
        path: "/services",
        element: <Service></Service>,
        loader: () => fetch("https://y-coral-gamma.vercel.app/photos"),
      },
      {
        path: "/services/:id",
        loader: ({ params }) =>
          fetch(`https://y-coral-gamma.vercel.app/photos/${params.id}`),
        element:<ServiceDetails></ServiceDetails>
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
export default routes;