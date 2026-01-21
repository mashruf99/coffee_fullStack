import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from './Layouts/MainLayout';
import Home from './Components/Home';
import AddCoffee from './Components/AddCoffee';
import UpdateCoffe from './Components/UpdateCoffe';
import CoffeeDetails from './Components/CoffeeDetails';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import AuthProvider from './context/AuthProvider';
import CompleteProfile from './Components/Completeprofile';
import ProtectedRoute from './Components/ProtectedRoute';


const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [{
      index: true,
      loader: ()=> fetch('http://localhost:3000/coffees'),
      Component: Home,
    },
    {
      path: 'add-coffee',
      element: <ProtectedRoute>
        <AddCoffee></AddCoffee>
      </ProtectedRoute>
    },
    {
      path: 'update-coffee/:id',
      loader: ({params})=> fetch(`http://localhost:3000/coffees/${params.id}`),
      element: <ProtectedRoute>
        <UpdateCoffe></UpdateCoffe>
      </ProtectedRoute>
    },
    {
      path: 'coffee/:id',
      Component: CoffeeDetails
    },
    {
      path: 'SignUp',
      Component: SignUp    
    },
    {
      path: 'SignIn',
      Component: SignIn
    },
    {
      path: 'complete-profile',
      Component: CompleteProfile
    }
    ],
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />,
    </AuthProvider>
  </StrictMode>,
)
