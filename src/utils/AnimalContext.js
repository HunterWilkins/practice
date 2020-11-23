import React from "react";

const AnimalContext = React.createContext({
    animal: "",
    feline: false,
    roar: false
});

export default AnimalContext;