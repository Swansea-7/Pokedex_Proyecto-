import React from "react";

import "./styleList.css";

function List() {
    return (
        <div className="window">
            <div className="headerlist">
                <div>
                    <div><img src="images/pokeball.svg" /></div>
                    <div><h1>Pokedex</h1></div>
                </div>
                <div>
                    <img src="/images/sort-0-9.svg" />
                    <img src="/images/sort-a-z.svg" />
                </div>
            </div>
            <div className="containersearch">
                <div className="search innersearch">
                    <img className="icon" src="/images/search.svg" />
                    <input type="text" className="inputsearch" name="search" placeholder="Search" />
                </div>
            </div>
            <div className="containerlist">
                <p>Oooppss, parece que no hay elementos por aqui</p>
            </div>
        </div>
    );
}

export default List;
