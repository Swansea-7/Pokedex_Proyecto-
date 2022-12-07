import React from "react";

import "./styleCard.css";

function Card(props) {

    const toggleDetails = (pokemon) => {
        props.open(pokemon);
    };

    return (
        <div className="window card-grid">
            {props.pokemones.map((pokemon) => {
                return (
                    <div name="card" className="card" onChange={() => toggleDetails(pokemon)}>
                        <div className="containerwhite">
                            <div><h3 className="color">#{pokemon.id}</h3></div>
                            <div><img className="picture" src={pokemon.imagen} alt={pokemon.nombre} /></div>
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
