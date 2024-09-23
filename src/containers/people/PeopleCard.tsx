import "./PeopleCard.css";
import { Link } from "react-router-dom";
import { IPeopleDetail } from "../../models/Interfaces";
const IMG = "https://image.tmdb.org/t/p/w500";

type PEO = {
    people: IPeopleDetail
};

export const PeopleCard = ({people}: PEO) => {
    return (
        <section className="people">
            <h1>{people.original_name}</h1>
            <Link to={`/people/${people.id}`}>
                <img 
                    className="people__img"
                    alt={people.original_name} 
                    src={`${IMG}/${people.profile_path}`} 
                />
                <h4>{people.original_name}</h4>
            </Link>
        </section>
    );
};


