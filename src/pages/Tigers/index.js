import React, {useContext} from "react";
import AnimalContext from "../../utils/AnimalContext";

function Tigers(props) {
    const {animal, feline, roar} = useContext(AnimalContext);
    return (
        <div>
            <h2>Hello! You've reached the TIGERS page.</h2>
            <h3>Roar?</h3>

            <p>Below is the state</p>
            <p>Animal: {animal}</p>
            <p>Feline?: {feline ? "Yes" : "Nope"}</p>
            <p>Roar: {roar ? "RoOOoooar" : "Arf"}</p>
        </div>
    )
}

export default Tigers;