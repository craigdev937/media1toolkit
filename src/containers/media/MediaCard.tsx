import "./MediaCard.css";
import { Link } from "react-router-dom";
import { IMediaCard } from "../../models/Interfaces";
const IMG = "https://image.tmdb.org/t/p/w500";

type ALL = {
    media: IMediaCard
};

export const MediaCard = ({media}: ALL) => {
    return (
        <section className="media">
            <Link to={`/film/${media.id}`}>
                <img 
                    className="media__img"
                    alt={media.title}
                    src={`${IMG}/${media.poster_path}`}  
                />
                <h4>{media.title}</h4>
            </Link>
        </section>
    );
};


