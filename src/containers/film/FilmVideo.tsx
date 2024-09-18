import React from "react";
import "./FilmVideo.css";
import { useParams } from "react-router-dom";
import { API } from "../../global/API";
import { Spinner } from "../../components/Spinner";
const YOU = "https://www.youtube.com/embed";

export const FilmVideo = () => {
    const { id } = useParams();
    const vidID = id !== undefined ? Number(id) : 0;
    const { error, isLoading, data } = API.useVidQuery(vidID);

    if (error) {
        if ("status" in error) {
            const errMSG = "error" in error ?
                error.error :
                JSON.stringify(error.data);
            return <h1>Error: {errMSG}</h1>;
        } else {
            return <h1>Error: {error.message}</h1>;
        }
    };

    if (isLoading) return <Spinner />

    return (
        <React.Fragment>
            {data && data.results.map((video) => (
                <section key={video.id}>
                    <a href={`${YOU}/${video.key}`}>
                        <button>Trailer: {video.name}</button>
                    </a>
                </section>
            ))}
        </React.Fragment>
    );
};



