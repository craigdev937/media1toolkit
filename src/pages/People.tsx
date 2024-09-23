import React from "react";
import { API } from "../global/API";
import { PeopleCard } from "../containers/people/PeopleCard";

export const People = () => {
    const { error, isLoading, data } = 
        API.usePeoQuery();

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
                <section className="people__grid">
                    {data!.results.map((people) => (
                        <PeopleCard 
                            key={people.id} 
                            people={people} 
                        />
                    ))}
                </section>
            )}
        </React.Fragment>
    );
};



