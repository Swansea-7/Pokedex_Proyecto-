import React from "react";
import { Link } from "react-router-dom";

import "./styleCards.css";

function Cards(props) {



    return (
        <div className="window card-grid">
            {props.pokemones.map((pokemonCard) => {
                return (
                    <div name="card" id="card" className={`${pokemonCard.tipo[0]}`} >
                        <Link className="enlace" to={`/Details/${pokemonCard.id}`}>
                            <div className="containerwhite">
                                <div className="pokemonid"><h3 className={'id' + `${pokemonCard.tipo[0]}`}>#{pokemonCard.id}</h3></div>

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
