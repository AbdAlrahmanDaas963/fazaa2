import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./views/pages/Home";
import About from "./views/pages/About";
import Contact from "./views/pages/Contact";
import Menu from "./views/pages/Menu";
import SignIn from "./views/pages/SignIn";
import SignUp from "./views/pages/SignUp";
import Pagenotfound from "./views/pages/Pagenotfound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/*",
    element: <Pagenotfound />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
