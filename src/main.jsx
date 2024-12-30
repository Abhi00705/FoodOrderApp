import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contact from './Contact.jsx'
import About from './Components/About.jsx'
import Body from './Components/Body.jsx'
import Cart from './Components/Cart.jsx'
import Help from './Components/Help.jsx'

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Body/>,
      },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
        path:"/cart",
        element:<Cart/>,
      },
      {
        path:"/help",
        element:<Help/>
      },
    ]
  },
  
])
createRoot(document.getElementById('root')).render(
    <RouterProvider router={appRouter}/>
  
)
// //StrictMode : StrictMode is a tool for highlighting potential problems in an application. 
//             // Like Fragment, StrictMode does not render any visible UI. It activates additional 
//             // checks and warnings for its descendants.