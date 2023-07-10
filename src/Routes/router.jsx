import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home";
import Profile from "../Components/Profile";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";
import Error from "../Pages/Error";
import About from "../Pages/About";
import Appoinment from "../Pages/Appoinment";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/profile/:id',
          element: <Profile></Profile>,
          loader: ({params}) => fetch(`https://doc-house-server-amber.vercel.app/doctors/${params.id}`)
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/appointment',
          element: <Appoinment></Appoinment>
        }
      ]
    },
    {
      path: 'signUp',
      element: <SignUp></SignUp>
    },
    {
      path: 'login',
      element: <Login></Login>
    },
    {
      path: '*',
      element: <Error></Error>
    }
  ]);

  export default router;