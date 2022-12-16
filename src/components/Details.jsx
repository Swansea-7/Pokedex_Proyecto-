import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import "./styleDetails.css";

function Details() {

    const { idPokemon } = useParams();

    const [pokemon, setPokemon] = useState()

    const [pokemones, setPokemones] = useState([])

    /* const [cambiarColor, setCambiarColor] = useState()

    const [colorLeido, setColorLeido] = useState("") */

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

    /* const traerColor = () => {
        const colorTipo = pokemon.tipo.length((tipoPokemon) => {
            return colorTipo = tipoPokemon[0]
        })
        setColorLeido(colorTipo)
    }

    const handleColor = (colorLeido) => {
        const colorAsignado = pokemones.map((pokemon) => {
            if (pokemon.color === colorLeido) {
                return { ...pokemon, color: colorLeido };
            }
            return pokemon;
        })
        setCambiarColor(colorAsignado)
    } */

    /* const [elementoActivo, setElementoActivo] = useState(0);
    const [anterior, setAnterior] = useState(pokemones.length - 1);
    const [siguiente, setSiguiente] = useState(elementoActivo + 1);

    useEffect(() => {
        if (elementoActivo === 0) {
            setAnterior(pokemones.length - 1);
            setSiguiente(elementoActivo + 1);
        } else if (elementoActivo === pokemones.length - 1) {
            setAnterior(elementoActivo - 1);
            setSiguiente(0);
        } else {
            setAnterior(elementoActivo - 1);
            setSiguiente(elementoActivo + 1);
        }
    }, [elementoActivo]); */


    return (
        <div id="windowDetail" className={`${pokemon?.tipo[0]}`}>
            <div className="pokeball"><img src="/images/Pokeball.png" alt="pokeball" /></div>
            <div className="detail">
                <div className="headerdetails">
                    <Link to={`/`}>
                        <div>
                            <img src="/images/arrow-back.svg" alt="atras" />
                        </div>
                    </Link>
                    <div>
                        <h1>{pokemon?.nombre}</h1>
                    </div>
                    <div>
                        <h4>#{pokemon?.id}</h4>
                    </div>
                </div>
                <div className="profile">
                    {/*  <Link to={`/Details/${anterior}`}>
                        <div>
                            <button><img src="/images/chevron-left.svg" alt="izquierda" /></button>
                        </div>
                    </Link> */}
                    <div>
                        <img src={pokemon?.imagen} alt={pokemon?.nombre} />
                    </div>
                    {/* <Link to={`/Details/${siguiente}`}>
                        <div>
                            <button><img src="/images/chevron-right.svg" alt="derecha" /></button>
                        </div>
                    </Link> */}
                </div>
                <div className="types">
                    {pokemon?.tipo.map((item, index) => {
                        return (
                            <div id="type" className={`${pokemon?.tipo[index]}`}>
                                <label>{item}</label>
                            </div>
                        );
                    })}
                </div>
                <div className="about">
                    <h3 className={'id' + `${pokemon?.tipo[0]}`}>About</h3>
                    <div className="resume">
                        <div className="weight alinear">
                            <div className="dato">
                                <img src="/images/Weight.svg" alt="peso" />
                                <p>{pokemon?.peso}</p>
                            </div>
                            <span>Weight</span>
                        </div>
                        <div className="line1"></div>
                        <div className="height alinear">
                            <div className="dato">
                                <img src="/images/Height.svg" alt="altura" />
                                <p>{pokemon?.altura}</p>
                            </div>
                            <span>Height</span>
                        </div>
                        <div className="line1"></div>
                        <div className="moves">
                            {pokemon?.movimientos.map((item) => {
                                return (
                                    <>
                                        <div className="dato"><p>{item}</p></div>
                                    </>
                                );
                            })}
                            <span>Moves</span>
                        </div>
                    </div>
                </div>
                <div className="description">
                    <p>{pokemon?.descripcion}</p>
                </div>
                <div className="stats">
                    <h3 className={'id' + `${pokemon?.tipo[0]}`}>Base Stats</h3>
                    <div className="containerstats">
                        <div className="subtitle">
                            <h4 className={'id' + `${pokemon?.tipo[0]}`}>HP</h4>
                            <h4 className={'id' + `${pokemon?.tipo[0]}`}>ATK</h4>
                            <h4 className={'id' + `${pokemon?.tipo[0]}`}>DEF</h4>
                            <h4 className={'id' + `${pokemon?.tipo[0]}`}>SATK</h4>
                            <h4 className={'id' + `${pokemon?.tipo[0]}`}>SDEF</h4>
                            <h4 className={'id' + `${pokemon?.tipo[0]}`}>SPD</h4>
                        </div>
                        <div className="line2"></div>
                        <div className="inputs">
                            <label>{pokemon?.estadisticas.hp}</label>
                            <label>{pokemon?.estadisticas.atk}</label>
                            <label>{pokemon?.estadisticas.def}</label>
                            <label>{pokemon?.estadisticas.satk}</label>
                            <label>{pokemon?.estadisticas.sdef}</label>
                            <label>{pokemon?.estadisticas.spd}</label>
                        </div>
                        <div className="ranges">
                            <input type="range" min={0} max={100} className={`${pokemon?.tipo[0]}`} step={1} value={pokemon?.estadisticas.hp}></input>
                            <input type="range" min={0} max={100} className={`${pokemon?.tipo[0]}`} step={1} value={pokemon?.estadisticas.atk}></input>
                            <input type="range" min={0} max={100} className={`${pokemon?.tipo[0]}`} step={1} value={pokemon?.estadisticas.def}></input>
                            <input type="range" min={0} max={100} className={`${pokemon?.tipo[0]}`} step={1} value={pokemon?.estadisticas.satk}></input>
                            <input type="range" min={0} max={100} className={`${pokemon?.tipo[0]}`} step={1} value={pokemon?.estadisticas.sdef}></input>
                            <input type="range" min={0} max={100} className={`${pokemon?.tipo[0]}`} step={1} value={pokemon?.estadisticas.spd}></input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;