import React from "react";

import "./styleList.css";

function List(props) {

    const onChangeBusqueda = (e) => {
        props.buscar(e.target.value)
    }

    const ordenar12 = () => {
        props.ordenarNumero()
    }

    const ordenarAB = () => {
        props.ordenarLetra()
    }

    return (
        <div className="window">
            <div className="headerlist">
                <div>
                    <div><img src="images/pokeball.svg" alt="pokeball" /></div>
                    <div><h1>Pokedex</h1></div>
                </div>
                <div>
                    <button><img src="/images/sort-0-9.svg" alt="orden#" onClick={ordenar12} /></button>
                    <button><img src="/images/sort-a-z.svg" alt="ordenAB" onClick={ordenarAB} /></button>
                </div>
            </div>
            <div className="containersearch">
                <div className="search innersearch">
                    <img className="icon" src="/images/search.svg" alt="search" />
                    <input type="text" className="inputsearch" name="search" placeholder="Search" onChange={onChangeBusqueda} />
                </div>
            </div>
            {props.pokemones == "" && (
                <div className="containerlist">
                    <p>Oooppss, parece que no hay elementos por aqui</p>
                </div>
            )}
        </div>
    );
}

export default List;
