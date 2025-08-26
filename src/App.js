import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import BodyContainer from "./components/BodyContainer";
import ErrorComponent from "./components/ErrorComponent";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestroDetailedCard from "./components/RestroDetailedCard";
import UserContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const AppContainer = () => {
    const [userName, setUserName] = useState();
    useEffect(() => {
      const name = 'Deeksha Gupta';
      setUserName(name)
    }, [])

    return (
        <Provider store={appStore} >
            <UserContext.Provider value={{ loginUser: userName, setUserName }}>
                <div>
                    <Header />
                    <Outlet />
                </div>
            </UserContext.Provider> 
        </Provider>
    )
}

const Grocery = lazy(() => import("./components/Grocery"));

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
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/restro/:resId",
                element: <RestroDetailedCard />
            },
            {
                path: "/grocery",
                element: <Suspense><Grocery /></Suspense>
            }
        ],
        errorElement: <ErrorComponent />
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);
