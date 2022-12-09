import React from "react";

import "./styleSearch.css";

function Search(props) {

    const onChangeBusqueda = (e) => {
        props.buscar(e.target.value)
    }

    const ordenarAB = () => {
        props.sortAB()
    }

    const ordenar12 = () => {
        props.sort12()
    }

    return (
        <div className="container">
            <div className="headerlist">
                <div className="logo">
                    <div><img src="images/pokeball.svg" alt="pokeball" /></div>
                    <div><h1>Pokedex</h1></div>
                </div>
                <div className="btn-grupo-ordenar">
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
        </div>
    );
}

export default Search;
