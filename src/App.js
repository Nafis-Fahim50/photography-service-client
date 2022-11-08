import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Home/Services/Services';
import Login from './Pages/Login/Login';
import ReviewFrom from './Pages/Review/ReviewFrom';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import Signup from './Pages/Signup/Signup';

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
          loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
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
          element:<ReviewFrom></ReviewFrom>
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
