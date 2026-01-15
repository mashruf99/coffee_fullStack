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
      Component: AddCoffee
    },
    {
      path: 'update-coffee/:id',
      loader: ({params})=> fetch(`http://localhost:3000/coffees/${params.id}`),
      Component: UpdateCoffe
    },
    {
      path: 'coffee/:id',
      Component: CoffeeDetails
    }
    ],
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
