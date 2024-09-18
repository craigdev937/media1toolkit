import React from "react";
import { createBrowserRouter, 
    RouterProvider } from "react-router-dom";
import { NotFound } from "../components/NotFound";
import { Navbar } from "./Navbar";
import { Film } from "../pages/Film";
import { People } from "../pages/People";
import { Telly } from "../pages/Telly";
import { FilmDetail } from "../containers/film/FilmDetail";
import { FilmVideo } from "../containers/film/FilmVideo";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Film />
            },
            {
                path: "/film/:id",
                element: <FilmDetail />
            },
            {
                path: "/fvideo/:id",
                element: <FilmVideo />
            },
            {
                path: "/people",
                element: <People />
            },
            {
                path: "/telly",
                element: <Telly />
            }
        ]
    }
]);

export const Main = () => {
    return (
        <React.Fragment>
            <RouterProvider router={Router} />
        </React.Fragment>
    );
};



