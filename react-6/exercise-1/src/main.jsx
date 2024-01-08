import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/style/index.css'
import Navbar from './Nav';
import Login from './component/login'
import Signup from './component/signup,';
import Error from './component/error';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import Signup from './component/signup,';


const router = createBrowserRouter([
  {
    path: '/',
    element: <>
        <App />
    </>
  },
  {
    path: '/login',
    element: <>
        <Login />
    </>
  },
  {
    path: '/signup',
    element: <>
        <Signup />
    </>
  },
  {
    path: '/error',
    element: <>
        <Error />
    </>
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
