import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Layout from './components/layout/Layout';
import Shop from './pages/Shop';
import Pages from './pages/Pages';
import Contact from './pages/Contact';
import Latest from './pages/Latest';
import About from './pages/About';
import Blog from './pages/Blog';
import Basket from './pages/Basket';
import Admin from './pages/admin/Admin';
import Wishlist from './pages/wishlist/Wishlist';
import Error from './pages/Error';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/pages",
        element: <Pages />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/latest",
        element: <Latest />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/basket",
        element: <Basket />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div>  <RouterProvider router={router} />
</div>
  )
}

export default App