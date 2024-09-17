import React from "react";
import { createBrowserRouter, 
    RouterProvider } from "react-router-dom";
import { NotFound } from "../components/NotFound";
import { Navbar } from "./Navbar";
import { Media } from "../pages/Media";
import { People } from "../pages/People";
import { Telly } from "../pages/Telly";
import { MediaDetail } from "../containers/media/MediaDetail";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Media />
            },
            {
                path: "/film/:id",
                element: <MediaDetail />
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



