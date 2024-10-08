import { createApi, 
    fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IAll, IFilmDetail, IFilmVideo, IPeople, 
    IPerson } from "../models/Interfaces";
const KEY = process.env.API_KEY || "";
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
        film: builder.query<IFilmDetail, number>({
            query: (id: number) => ({
                url: `/movie/${id}?api_key=${KEY}`,
                method: "GET"
            }),
            providesTags: ["Film"]
        }),
        fvid: builder.query<IFilmVideo, number>({
            query: (id: number) => ({
                url: `/movie/${id}/videos?api_key=${KEY}`,
                method: "GET"
            }),
            providesTags: ["Film"]
        }),
        peo: builder.query<IPeople, void>({
            query: () => ({
                url: `/trending/person/day?api_key=${KEY}`,
                method: "GET"
            })
        }),
        per: builder.query<IPerson, number>({
            query: (id: number) => ({
                url: `/person/${id}?api_key=${KEY}`,
                method: "GET"
            })
        }),
    })
});



