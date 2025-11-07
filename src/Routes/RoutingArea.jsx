import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Flipkart from "../FlipKart/Flipkart";
import Admin from "../AdminPannel/Admin";
// import NotFound from "../Comonents/NotFound";

const RoutingArea = () => {
  const ways = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "/", element: <Flipkart /> },
        { path: "/admin", element: <Admin /> },
      ],
    },
    // { path: "/*", element: <NotFound /> },
  ]);
  return <RouterProvider router={ways}></RouterProvider>;
};

export default RoutingArea;
