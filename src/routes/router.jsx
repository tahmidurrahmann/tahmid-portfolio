import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../error/Error";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About/About";
import Resume from "../pages/Resume/Resume";
import Portfolio from "../pages/Portfolio/Portfolio";
import Contact from "../pages/Contact/Contact";

const router = createBrowserRouter([
    {
        path : "/",
        element : <App></App>,
        errorElement : <Error></Error>,
        children : [
            {
                path : "/",
                element : <Home></Home>
            },
            {
                path : "/about",
                element : <About></About>
            },
            {
                path : "/resume",
                element : <Resume></Resume>
            },
            {
                path : "/portfolio",
                element : <Portfolio></Portfolio>
            },
            {
                path : "/contact",
                element : <Contact></Contact>
            }
        ]
    }
])

export default router;