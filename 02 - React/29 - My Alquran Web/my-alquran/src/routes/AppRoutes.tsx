import { createBrowserRouter } from "react-router-dom";



import ErrorPage from "../pages/ErrorPage";
import Navbar from "../layout/Navbar";
import Quran from "../pages/Quran";
import QuranThemes from "../components/QuranThemes";

export const router = createBrowserRouter([
    {
      path: "/",
      element:<Navbar />,
      errorElement: <ErrorPage />, 
      children: [
        {
          path: "/",
          element: <Quran />, 
        },
        {
          path: "/testing",
          element: <QuranThemes />
        }


      ],
    },
]);