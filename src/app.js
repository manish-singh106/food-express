import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import Restaurants from "./components/Restaurants/Restaurants";
import AboutUS from "./components/AboutUS/AboutUS";
import Restaurants from "./components/Restaurants/Restaurants";
import ContactUS from "./components/ContactUs/ContactUS";
import RestaurantMenu from "./components/RestaurantMenu/RestaurantMenu";

import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Outlet,
} from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Restaurants />,
      },
      {
        path: "/about-us",
        element: <AboutUS />,
      },
      {
        path: "/contact-us",
        element: <ContactUS />,
      },
      {
        path: "restaurant/:resid",
        element: <RestaurantMenu />
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
