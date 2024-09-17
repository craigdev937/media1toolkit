import React from "react";
import "./MediaDetail.css";
import { useParams } from "react-router-dom";
import { API } from "../../global/API";
const IMG = "https://image.tmdb.org/t/p/w500";

export const MediaDetail = () => {
    const { id } = useParams();
    const movieID = id !== undefined ? Number(id) : 0;
    const { error, isLoading, data } = API.useMovQuery(movieID);
    const DET = data!;

    if (error) {
        if ("status" in error) {
            const errMSG = "error" in error ?
                error.error :
                JSON.stringify(error.data);
            return <h1>Error: {errMSG}</h1>
        } else {
            return <h1>Error: {error.message}</h1>
        }
    };

    if (isLoading) return <h1>Loading...</h1>;

    return (
        <section className="detail">
            <h1>{DET.title}</h1>
            <img
                alt={DET.title} 
                src={`${IMG}/${DET.backdrop_path}`} 
            />
            <h3>{DET.overview}</h3>
        </section>
    );
};


