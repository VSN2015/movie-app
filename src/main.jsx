import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import TVShowDetail from "@pages/TVShowDetail";
import HomePage from "@pages/HomePage";
import MovieDetail from "@pages/MovieDetail";
import RootLayout from "@pages/RootLayout";

const router = createBrowserRouter([
  {
    element: <RootLayout/>,
    children: [
      {
        path: '/',
        element: <HomePage/>
      },
      {
        path: '/movie/:id',
        element: <MovieDetail/>
      },
      {
        path: '/tv/:id',
        element: <TVShowDetail/>
      }
    ]
  }
])

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
  // <StrictMode>
  // </StrictMode>
);
