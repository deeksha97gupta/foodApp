import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import BodyContainer from "./components/BodyContainer";
import ErrorComponent from "./components/ErrorComponent";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestroDetailedCard from "./components/RestroDetailedCard";

const AppContainer = () => {
    return (
       <div>
        <Header />
        <Outlet />
       </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppContainer />,
        children: [
            {
                path: "/",
                element: <BodyContainer />
            },
            {
                path: "/about",
                element: <AboutUs />
            },
            {
                path: "/contact",
                element: <ContactUs />
            },
            {
                path: "/restro/:resId",
                element: <RestroDetailedCard />
            }
        ],
        errorElement: <ErrorComponent />
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);
