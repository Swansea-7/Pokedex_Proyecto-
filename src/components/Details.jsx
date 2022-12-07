import React from "react";

import "./styleDetails.css";

function Details(props) {

    function closeDetails() {
        props.close(false);
    }

    return (
        <div className="window">
            <div><img src="images/Pokeball.png" alt="pokeball" /></div>
            <div className="card picture color">
                <div className="headerdetails">
                    <div onClick={closeDetails}><img src="/images/arrow-back.svg" alt="atras" /></div>
                    <div>
                        <h1>{props.pokemones.nombre}</h1>
                    </div>
                    <div>
                        <h4>#{props.pokemones.id}</h4>
                    </div>
                </div>
                <div className="profile">
                    <div><img src="/images/chevron-left.svg" alt="izquierda" /></div>
                    <div><img src={props.pokemones.foto} alt={props.pokemones.nombre} /></div>
                    <div><img src="/images/chevron-right.svg" alt="derecha" /></div>
                    <div><button>TYPE</button></div>
                    <div className="about">
                        <h3>About</h3>
                        <div>
                            <div>
                                <div><img src="/images/Weight.svg" alt="peso" /></div>
                                <div><p>{props.pokemones.peso}</p></div>
                                <div><p>Weight</p></div>
                            </div>
                            <br />
                            <div>
                                <div><img src="/images/Height.svg" alt="altura" /></div>
                                <div><p>{props.pokemones.altura}</p></div>
                                <div><p>Height</p></div>
                            </div>
                            <br />
                            <div>
                                <div><p>{props.pokemones.movimientos}</p></div>
                                <div><p>Moves</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="description">
                        <p>{props.pokemones.descripcion}</p>
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
                                <input type="range" min={0} max={100} className="range" step={1} value={props.pokemones.estadisticas.HP}></input>
                                <label>pokemon.stats.atk</label>
                                <input type="range" min={0} max={100} className="range" step={1} value={props.pokemones.estadisticas.ATK}></input>
                                <label>pokemon.stats.def</label>
                                <input type="range" min={0} max={100} className="range" step={1} value={props.pokemones.estadisticas.DEF}></input>
                                <label>pokemon.stats.satk</label>
                                <input type="range" min={0} max={100} className="range" step={1} value={props.pokemones.estadisticas.SATK}></input>
                                <label>pokemon.stats.sdef</label>
                                <input type="range" min={0} max={100} className="range" step={1} value={props.pokemones.estadisticas.SDEF}></input>
                                <label>pokemon.stats.spd</label>
                                <input type="range" min={0} max={100} className="range" step={1} value={props.pokemones.estadisticas.SPD}></input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;