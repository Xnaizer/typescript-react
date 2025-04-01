import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../pages/ErrorPage";
import Navbar from "../layout/Navbar";
import Quran from "../pages/Quran";
import SurahDetail from "../components/SurahDetail";
import JuzDetail from "../components/JuzDetail";
import ThemeDetail from "../components/ThemeDetail";
import AsmaulHusna from "../pages/AsmaulHusna";
import Doa from "../pages/Doa";
import Home from "../pages/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element:<Navbar />,
      errorElement: <ErrorPage />, 
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/alquran",
          element: <Quran />, 
        },
        {
          path: "/testing",
          element:<ThemeDetail />
        },
        {
          path: "surah/:id",
          element: <SurahDetail />
        },
        {
          path:"/juz/:id",
          element: <JuzDetail />
        },
        {
          path:"/tema/:id",
          element: <ThemeDetail/>
        },
        {
          path: "/asmaul-husna",
          element: <AsmaulHusna />
        },
        {
          path: "/doa",
          element: <Doa />
        }


      ],
    },
]);