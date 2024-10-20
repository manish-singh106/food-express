import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import Restaurants from "./components/Restaurants/Restaurants";
import AboutUS from "./components/AboutUS/AboutUS";
import Restaurants from "./components/Restaurants/Restaurants";
import ContactUS from "./components/ContactUs/ContactUS";
import RestaurantMenu from "./components/RestaurantMenu/RestaurantMenu";
import Cart from "./components/Cart/Cart";
import appStore from './reduxToolkit/store';
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Outlet,
} from "react-router-dom";

const App = () => {
  return (
    <div>
      <Provider store = {appStore}>
        <Header />
        <Outlet />
      </Provider>
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
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
