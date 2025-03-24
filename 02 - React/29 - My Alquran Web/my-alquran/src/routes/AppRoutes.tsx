import { createBrowserRouter } from "react-router-dom";
import App from "../App";


import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage />, 
      children: [
        {
          path: "/",
          element: <App />, 
        },


      ],
    },
]);