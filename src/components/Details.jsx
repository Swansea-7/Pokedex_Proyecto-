import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./styleDetails.css";

function Details() {

    const { idPokemon } = useParams();

    const [pokemon, setPokemon] = useState([])

    const [pokemones, setPokemones] = useState([])

    const callApi = () => {
        fetch("http://localhost:3000/pokemones", {
            method: "GET",
        })
            .then((response) => response.json())
            .then((response) => setPokemones(response))
            .catch((err) => console.error(err));
    }

    useEffect(() => {
        callApi()
    }, []);

    const getPokemonDetail = () => {
        const detailPokemon = pokemones.find((pokemon) => {
            return pokemon.id == idPokemon
        })
        setPokemon(detailPokemon)
    }

    useEffect(() => {
        getPokemonDetail()
    }, [pokemones]);

    console.log(pokemon)

    return (
        <div className="window">
            <div><img src="/images/Pokeball.png" alt="pokeball" /></div>
            <div className="card picture color">
                <div className="headerdetails">
                    <div><img src="/images/arrow-back.svg" alt="atras" /></div>
                    <div>
                        <h1>{pokemon.nombre}</h1>
                    </div>
                    <div>
                        <h4>#{pokemon.id}</h4>
                    </div>
                </div>
                <div className="profile">
                    <div><img src="/images/chevron-left.svg" alt="izquierda" /></div>
                    <div><img src={pokemon.imagen} alt={pokemon.nombre} /></div>
                    <div><img src="/images/chevron-right.svg" alt="derecha" /></div>
                    <div><button>TYPE</button></div>
                    <div className="about">
                        <h3>About</h3>
                        <div>
                            <div>
                                <div><img src="/images/Weight.svg" alt="peso" /></div>
                                <div><p>{pokemon.peso}</p></div>
                                <div><p>Weight</p></div>
                            </div>
                            <br />
                            <div>
                                <div><img src="/images/Height.svg" alt="altura" /></div>
                                <div><p>{pokemon.altura}</p></div>
                                <div><p>Height</p></div>
                            </div>
                            <br />
                            <div>
                                <div><p>{pokemon.movimientos}</p></div>
                                <div><p>Moves</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="description">
                        <p>{pokemon.descripcion}</p>
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
                                <label>{pokemon.estadisticas.hp}</label>
                                <input type="range" min={0} max={100} className="range" step={1} value={pokemon.estadisticas.hp}></input>
                                <label>{pokemon.estadisticas.atk}</label>
                                <input type="range" min={0} max={100} className="range" step={1} value={pokemon.estadisticas.atk}></input>
                                <label>{pokemon.estadisticas.def}</label>
                                <input type="range" min={0} max={100} className="range" step={1} value={pokemon.estadisticas.def}></input>
                                <label>{pokemon.estadisticas.satk}</label>
                                <input type="range" min={0} max={100} className="range" step={1} value={pokemon.estadisticas.satk}></input>
                                <label>{pokemon.estadisticas.sdef}</label>
                                <input type="range" min={0} max={100} className="range" step={1} value={pokemon.estadisticas.sdef}></input>
                                <label>{pokemon.estadisticas.spd}</label>
                                <input type="range" min={0} max={100} className="range" step={1} value={pokemon.estadisticas.spd}></input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;