import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import AddService from './Pages/AddService/AddService';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Home/Services/Services';
import Login from './Pages/Login/Login';
import MyReview from './Pages/Review/MyReview';
import ReviewFrom from './Pages/Review/ReviewFrom';
import Update from './Pages/Review/Update/Update';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import Signup from './Pages/Signup/Signup';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/services',
          element:<Services></Services>
        },
        {
          path:'/services/:id',
          element:<ServiceDetails></ServiceDetails>,
          loader: ({params})=> fetch(`https://nafis-photography-server.vercel.app/services/${params.id}`)
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<Signup></Signup>
        },
        {
          path:'/review/:id',
          element:<PrivateRoute><ReviewFrom></ReviewFrom></PrivateRoute>,
          loader: ({params})=> fetch(`https://nafis-photography-server.vercel.app/services/${params.id}`)
        },
        {
          path:'/myreview',
          element:<PrivateRoute><MyReview></MyReview></PrivateRoute>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/addservice',
          element:<PrivateRoute><AddService></AddService></PrivateRoute>
        },
        {
          path:'/update/:id',
          element:<PrivateRoute><Update></Update></PrivateRoute>,
          loader: ({params})=> fetch(`https://nafis-photography-server.vercel.app/review/${params.id}`)
        },
        {
          path:'/contact',
          element:<Contact></Contact>
        }
      ]
    }
  ])
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
