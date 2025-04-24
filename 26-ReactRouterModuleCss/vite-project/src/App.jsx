import React from 'react'

import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
          path:"/services",
          element:<Services/>
        }
      ]
    }
  ]
)
const App = () => {
  
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App