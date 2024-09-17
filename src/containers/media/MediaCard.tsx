import "./MediaCard.css";
import { IMediaCard } from "../../models/Interfaces";
const IMG = "https://image.tmdb.org/t/p/w500";

type ALL = {
    media: IMediaCard
};

export const MediaCard = ({media}: ALL) => {
    return (
        <section className="media">
            <img 
                className="media__img"
                alt={media.title}
                src={`${IMG}/${media.poster_path}`}  
            />
            <h4>{media.title}</h4>
        </section>
    );
};


