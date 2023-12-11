import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../error/Error";
import Home from "../pages/Home/Home/Home";

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
        ]
    }
])

export default router;