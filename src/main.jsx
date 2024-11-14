
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import Body from "./components/Body/body.jsx"
import VideoIntro from "./components/Loading/VideoIntro.jsx";
import Login from "./components/Login/login.jsx"
import Block from "./components/Block/Block.jsx"
import Signup from './components/Signup/signup.jsx';
import About from "./components/About/about.jsx"
import Home from './components/Home/home.jsx';
import Admin from './components/Admin/admin.jsx'

const router= createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children: [
      {
        path:"/",
        element:<Home />,
      },
      {
        path:"body",
        element:<Body />,
      },
      {
        path:"body",
        element:<Body />,
      },
      {
      path:"login",
      element:<Login />,
      },
      {
        path:"about",
        element:<About/>,
      },
      {
        path:"block",
        element:<Block />,
      },
      {
        path:"signup",
        element:<Signup />,
      },
      {
        path:"admin",
        element:<Admin/>
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
export default router