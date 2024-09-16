import { createApi, 
    fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IAll } from "../models/Interfaces";
const KEY = process.env.API_KEY;
const URL = "https://api.themoviedb.org/3/";

export const API = createApi({
    reducerPath: "API",
    tagTypes: ["Film", "Show"],
    baseQuery: fetchBaseQuery({ baseUrl: URL }),
    endpoints: (builder) => ({
        pop: builder.query<IAll, void>({
            query: () => ({
                url: `/trending/movie/day?api_key=${KEY}`,
                method: "GET"
            }),
            providesTags: ["Film", "Show"]
        })
    })
});


