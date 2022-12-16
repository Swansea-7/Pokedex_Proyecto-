import React from "react";
import { Link } from "react-router-dom";

import "./styleCards.css";

function Cards(props) {



    return (
        <div className="window card-grid">
            {props.pokemones?.map((pokemon) => {
                return (
                    <div name="card" id="card" className={`${pokemon?.tipo[0]}`} >
                        <Link className="enlace" to={`/Details/${pokemon?.id}`}>
                            <div className="containerwhite">
                                <div className="pokemonid"><h3 className={'id' + `${pokemon?.tipo[0]}`}>#{pokemon?.id}</h3></div>

                                <div><img className="picture" src={pokemon?.imagen} alt={pokemon?.nombre} /></div>
                            </div>
                            <div className="containercolor">
                                <div><h2>{pokemon?.nombre}</h2></div>
                            </div>
                        </Link>
                    </div>
                );
            })}
        </div >
    );
}

export default Cards;
