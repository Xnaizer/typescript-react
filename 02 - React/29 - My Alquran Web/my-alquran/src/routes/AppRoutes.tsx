import { createBrowserRouter } from "react-router-dom";



import ErrorPage from "../pages/ErrorPage";
import Navbar from "../layout/Navbar";
import Quran from "../pages/Quran";
import QuranThemes from "../components/QuranThemes";
import SurahDetail from "../components/SurahDetail";
import JuzDetail from "../components/JuzDetail";

export const router = createBrowserRouter([
    {
      path: "/",
      element:<Navbar />,
      errorElement: <ErrorPage />, 
      children: [
        {
          path: "/alquran",
          element: <Quran />, 
        },
        {
          path: "/testing",
          element: <QuranThemes />
        },
        {
          path: "surah/:id",
          element: <SurahDetail />
        },
        {
          path:"/juz",
          element: <JuzDetail />
        }


      ],
    },
]);