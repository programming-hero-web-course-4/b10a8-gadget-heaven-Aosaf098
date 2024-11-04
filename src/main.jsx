import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Home from "./Components/Home.jsx";
import Dashboard from "./Components/Dashboard.jsx";
import Stats from "./Components/Stats.jsx";
import Offers from "./Components/Offers.jsx";
import GadgetDetails from "./Components/GadgetDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'stats',
        element: <Stats />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'offers',
        element: <Offers />,
      },
      {
        path: 'gadgets/:gadgetId',
        element: <GadgetDetails />,
        loader: () => fetch('/gadgets.json')
      }
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
