import "./PeopleDetail.css";
import { useParams } from "react-router-dom";
import { API } from "../../global/API";
const IMG = "https://image.tmdb.org/t/p/w500";

export const PeopleDetail = () => {
    const { id } = useParams();
    const peoID = id !== undefined ? Number(id) : 0;
    const { error, isLoading, data } = API.usePerQuery(peoID);
    const PEO = data!;

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

    if (isLoading) return <h1>Loading...</h1>;

    return (
        <section className="people">
            <aside>
                <h1>{PEO.name}</h1>
                <h5>Birthday: {PEO.birthday}</h5>
                <h5>Hometown: {PEO.place_of_birth}</h5>
            </aside>
            <aside>
                <img 
                    className="people__img"
                    alt={PEO.name}
                    src={`${IMG}/${PEO.profile_path}`} 
                />
            </aside>
            <aside>
                <p className="people__bio">{PEO.biography}</p>
            </aside>
        </section>
    );
};


