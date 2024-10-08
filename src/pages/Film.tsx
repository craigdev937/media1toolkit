import React from "react";
import { API } from "../global/API";
import { FilmCard } from "../containers/film/FilmCard";

export const Film = () => {
    const { error, isLoading, data } = API.usePopQuery();
    console.log(data);

    if (error) {
        if ("status" in error) {
            const errMSG = "error" in error ?
                error.error :
                JSON.stringify(error.data);
            return <h1>Error: {errMSG}</h1>;
        } else {
            return <h1>Error: {error.message}</h1>
        }
    };

    return (
        <React.Fragment>
            {isLoading ? (
                <h1>Loading...</h1>
            ) : (
                <section className="grid">
                    {data!.results.map((film) => (
                        <FilmCard 
                            key={film.id} 
                            film={film} 
                        />
                    ))}
                </section>
            )}
        </React.Fragment>
    );
};



