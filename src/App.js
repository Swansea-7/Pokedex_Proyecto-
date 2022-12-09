import React, { useState, useEffect } from "react";

import "./App.css";
import Search from "./components/Search";
import Cards from "./components/Cards";


function App() {

  const [pokemones, setPokemones] = useState([])

  const [flag, setFlag] = useState(false)

  const buscar = (nombre) => {
    if (nombre == "") {
      setFlag(!flag)
    }
    else {
      let pokemon = pokemones.filter((pokemon) => {
        return pokemon.nombre.toLowerCase().includes(nombre.toLowerCase());
      });
      setPokemones(pokemon)
    }
  }

  useEffect(() => {
    callApi()
  }, [flag]);

  const callApi = () => {
    fetch("http://localhost:3000/pokemones", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => setPokemones(response))
      .catch((err) => console.error(err));
  }

  const sortAB = () => {
    let pokemonesOrdenados = [...pokemones].sort((a, b) => {
      if (a.nombre > b.nombre) return 1
      if (a.nombre < b.nombre) return -1
      return 0
    })
    setPokemones(pokemonesOrdenados)
  }

  const sort12 = () => {
    let pokemonesPorId = [...pokemones].sort((a, b) => {
      if (a.id > b.id) return 1
      if (a.id < b.id) return -1
      return 0
    })
    setPokemones(pokemonesPorId)
  }

  return (
    <>
      <Search buscar={buscar} sort12={sort12} sortAB={sortAB} />
      <Cards pokemones={pokemones} />
    </>
  );
}

export default App;
