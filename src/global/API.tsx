import { createApi, 
    fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IAll, IMovieDetail } from "../models/Interfaces";
const KEY = process.env.API_KEY!;
const URL = "https://api.themoviedb.org/3";

export const API = createApi({
    reducerPath: "API",
    tagTypes: ["Film", "Show"],
    baseQuery: fetchBaseQuery({ baseUrl: URL }),
    endpoints: (builder) => ({
        pop: builder.query<IAll, void>({
            query: () => ({
                url: `/trending/movie/week?api_key=${KEY}`,
                method: "GET"
            }),
            providesTags: ["Film"]
        }),
        mov: builder.query<IMovieDetail, number>({
            query: (id: number) => ({
                url: `/movie/${id}?api_key=${KEY}`,
                method: "GET"
            }),
            providesTags: ["Film"]
        })
    })
});


