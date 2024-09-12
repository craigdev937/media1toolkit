import React from "react";
import { API } from "../global/API";

export const Media = () => {
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
                <section>
                    {data!.results.map((info) => (
                        <aside key={info.id}>
                            <h1>{info.title}</h1>
                        </aside>
                    ))}
                </section>
            )}
        </React.Fragment>
    );
};



