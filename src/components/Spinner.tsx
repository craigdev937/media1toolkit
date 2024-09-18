import React from "react";
import Spin from "@public/spin1.svg";

export const Spinner = () => {
    const [text, setText] = React.useState("");
    const [showImg, setShowImg] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            setShowImg(false);
            setText(
                `I waited for 3 Seconds 
                to be loaded, did 
                you see the Spinner?`
            );
        }, 3000)
    }, []);

    return (
        <React.Fragment>
            <aside>{showImg ? (
                    <img src={Spin} alt="Spinner" />
                ) : (
                    <h3>{text}</h3>
                )}
            </aside>
        </React.Fragment>
    );
};


