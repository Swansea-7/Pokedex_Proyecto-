import React from "react";

import "./styleCard.css";

function Card(props) {

    const toggleDetails = (pokemon) => {
        props.open(pokemon);
    };

    return (
        <div className="window">
            {props.pokemoness.map((pokemon) => {
                return (
                    <div className="card picture color" onChange={() => toggleDetails(pokemon)}>
                        <div className="containerwhite">
                            <div><h3>#{pokemon.id}</h3></div>
                            <div><img src={pokemon.foto} alt="pokemon.id" /></div>
                        </div>
                        <div className="containercolor">
                            <div><h2>{pokemon.nombre}</h2></div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Card;
