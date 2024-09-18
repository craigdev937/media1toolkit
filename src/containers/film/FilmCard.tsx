import "./FilmCard.css";
import { Link } from "react-router-dom";
import { IFilmCard } from "../../models/Interfaces";
const IMG = "https://image.tmdb.org/t/p/w500";

type ALL = {
    film: IFilmCard
};

export const FilmCard = ({film}: ALL) => {
    return (
        <section className="film">
            <Link to={`/film/${film.id}`}>
                <img 
                    className="film__img"
                    alt={film.title}
                    src={`${IMG}/${film.poster_path}`}  
                />
                <h4>{film.title}</h4>
            </Link>
        </section>
    );
};


