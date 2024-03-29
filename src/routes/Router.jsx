import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "../pages/Shop";
import ProductDetails from "../pages/ProductDetails";
import About from "../pages/About";
import Error from "../pages/Error";
import Home from "../pages/Home";
import App from "./App";

export default function Router({ })
{
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            errorElement: <Error />,
            children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: "about",
                    element: <About />
                },
                {
                    path: "shop",
                    element: <Shop />,
                    children: [
                        {
                            path: ":productId",
                            element: <ProductDetails />,
                        }
                    ]
                },
            ]
        },
    ]);

    return (
    <RouterProvider router={routes} />
    )
}