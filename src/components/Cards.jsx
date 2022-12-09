import React from "react";
import { useParams, Link } from "react-router-dom";

import "./styleCards.css";

function Cards(props) {

    const { idPokemon } = useParams();

    const pokemon = props.pokemones.find((pokemon) => {
        return pokemon.id == idPokemon;
    });

    return (
        <div className="window" id="card-grid">
            {props.pokemones.map((pokemonCard) => {
                return (
                    <div name="card" className="card ">
                        <Link to={`/Details/${pokemonCard.id}`}>
                            <div className="containerwhite">
                                <div><h3 className="color">#{pokemonCard.id}</h3></div>

                                <div><img className="picture" src={pokemonCard.imagen} alt={pokemonCard.nombre} /></div>
                            </div>
                            <div className="containercolor">
                                <div><h2>{pokemonCard.nombre}</h2></div>
                            </div>
                        </Link>
                    </div>
                );
            })}
        </div >
    );
}

export default Cards;
