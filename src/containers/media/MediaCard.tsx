import React from "react";
import "./MediaCard.css";
// import { Link } from "react-router-dom";
import { IMediaCard } from "../../models/Interfaces";
const IMG = "https://image.tmdb.org/t/p/w500";

type ALL = {
    media: IMediaCard
};

export const MediaCard = ({media}: ALL) => {
    return (
        <React.Fragment>
            <section className="media">
                <img 
                    className="media__img"
                    alt={media.title}
                    src={`${IMG}/${media.poster_path}`}  
                />
            </section>
        </React.Fragment>
    );
};


