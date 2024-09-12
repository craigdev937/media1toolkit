import React from "react";
import "./App.css";
import Bane from "@public/Bane46.jpg";

export const App = () => {
    return (
        <React.Fragment>
            <img 
                src={Bane} alt="Bane from Batman" 
                height={"600px"} width={"auto"}
            />
        </React.Fragment>
    );
};


