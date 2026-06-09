import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import "./index.css";
import About from "./src/components/About";
import Body from "./src/components/Body";
import Contact from "./src/components/Contact";
import Header from "./src/components/Header";
import RestaurantMenu from "./src/components/RestaurantMenu";
import RestaurantUpload from "./src/components/RestaurantUpload";

const AppComponent = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
    children: [
      {
        path: "/",
        element: <Body />,
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
        path: "restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/upload",
        element: <RestaurantUpload />,
      },
    ],
  },
]);

const finalroot = ReactDOM.createRoot(document.getElementById("root"));
finalroot.render(<RouterProvider router={appRouter} />);
