import React from "react";

import "./styleDetails.css";

function Details(props) {

    function closeDetails() {
        props.close(false);
    }

    return (
        <div className="window">
            <div><img src="images/Pokeball.png" /></div>
            <div className="card picture color">
                <div className="headerdetails">
                    <div onClick={closeDetails}><img src="/images/arrow-back.svg" /></div>
                    <div>
                        <h1>{props.pokemon.nombre}</h1>
                    </div>
                    <div>
                        <h4>#{props.pokemon.id}</h4>
                    </div>
                </div>
                <div className="profile">
                    <div><img src="/images/chevron-left.svg" /></div>
                    <div><img src="" alt="pokemon.id" /></div>
                    <div><img src="/images/chevron-right.svg" /></div>
                    <div><button>TYPE</button></div>
                    <div className="about">
                        <h3>About</h3>
                        <div>
                            <div>
                                <div><img src="/images/Weight.svg" /></div>
                                <div><p>{props.pokemon.peso}</p></div>
                                <div><p>Weight</p></div>
                            </div>
                            <br />
                            <div>
                                <div><img src="/images/Height.svg" /></div>
                                <div><p>{props.pokemon.altura}</p></div>
                                <div><p>Height</p></div>
                            </div>
                            <br />
                            <div>
                                <div><p>{props.pokemon.movimientos}</p></div>
                                <div><p>Moves</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="description">
                        <p>{props.pokemon.descripcion}</p>
                    </div>
                    <div className="stats">
                        <h3>Base Stats</h3>
                        <div>
                            <div>
                                <h4>HP</h4>
                                <h4>ATK</h4>
                                <h4>DEF</h4>
                                <h4>SATK</h4>
                                <h4>SDEF</h4>
                                <h4>SPD</h4>
                            </div>
                            <br />
                            <div>
                                <label>pokemon.stats.hp</label>
                                <input type="range" min={0} max={100} className="range" step={1} value=""></input>
                                <label>pokemon.stats.atk</label>
                                <input type="range" min={0} max={100} className="range" step={1} value=""></input>
                                <label>pokemon.stats.def</label>
                                <input type="range" min={0} max={100} className="range" step={1} value=""></input>
                                <label>pokemon.stats.satk</label>
                                <input type="range" min={0} max={100} className="range" step={1} value=""></input>
                                <label>pokemon.stats.sdef</label>
                                <input type="range" min={0} max={100} className="range" step={1} value=""></input>
                                <label>pokemon.stats.spd</label>
                                <input type="range" min={0} max={100} className="range" step={1} value=""></input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;