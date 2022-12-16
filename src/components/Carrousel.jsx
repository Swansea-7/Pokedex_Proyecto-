import React, { useEffect, useState } from "react";
import Details from "./Details";

import "./styleCarrousel.css"

function Carrousel() {

    let curSlide = 0;

    // functions
    const goToSlide = (pokemon) => {
        pokemones.forEach((s, i) => {
            s.style.transform = `translateX(${100 * (i - pokemon)}%)`;
        });
    };

    const nextSlide = function () {
        curSlide === pokemones.length - 1 ? (curSlide = 0) : curSlide++;
        goToSlide(curSlide);
    };

    const prevSlide = function () {
        curSlide === 0 ? (curSlide = pokemones.length - 1) : curSlide--;
        goToSlide(curSlide);
    };

    const btnLeft = () => {
        return prevSlide
    }
    const btnRight = () => {
        return nextSlide
    }

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

    return (

        <div class="carousel">
            <button class="btn-arrow btn-arrow-left" onClick={btnLeft}><img src="/images/chevron-left.svg" alt="izquierda" /></button>
            <button class="btn-arrow btn-arrow-right" onClick={btnRight}><img src="/images/chevron-right.svg" alt="derecha" /></button>
            <div class="inner">
                {pokemones?.map((pokemon) => {
                    return (
                        <ul class="container">
                            <li class="slide">
                                <Details>
                                    {pokemon}
                                </Details>
                            </li>
                        </ul>
                    );
                })}
            </div>
        </div>

    );
}
export default Carrousel;