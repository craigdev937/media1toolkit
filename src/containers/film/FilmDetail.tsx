import "./FilmDetail.css";
import { Link, useParams } from "react-router-dom";
import { API } from "../../global/API";
const IMG = "https://image.tmdb.org/t/p/original";

export const FilmDetail = () => {
    const { id } = useParams();
    const filmID = id !== undefined ? Number(id) : 0;
    const { error, isLoading, data } = API.useFilmQuery(filmID);
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
        <section className="film__detail">
            <h1>{DET.title}</h1>
            <img
                alt={DET.title} 
                src={`${IMG}/${DET.backdrop_path}`} 
            />
            <h3>{DET.overview}</h3>
            <Link to={`/fvideo/${DET.id}`}>
                <button>Videos</button>
            </Link>
        </section>
    );
};


