import React, { useState, useEffect } from "react";

import "./App.css";
import List from "./components/List";
import Card from "./components/Card";
import Details from "./components/Details";

function App() {

  const [pokemones, setPokemones] = useState([])

  const [flag, setFlag] = useState(false)

  useEffect(() => {
    fetch("http://localhost:3000/pokemones", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => setPokemones(response))
      .catch((err) => console.error(err));
  }, [flag]);

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

  const [isOpen, setIsOpen] = useState(false);
  const [pokemonSelect, setPokemonSelect] = useState({})

  const open = (pokemon) => {
    setPokemonSelect(pokemon);
    setIsOpen(!isOpen);
  };

  const close = () => {
    setIsOpen(false);
  }

  const sortByLetter = () => {
    let pokemonesOrdenados = [...pokemones].sort((a, b) => {
      if (a.nombre > b.nombre) return 1
      if (a.nombre < b.nombre) return -1
      return 0
    })
    setPokemones(pokemonesOrdenados)
  }

  const sortByNumber = () => {
    let pokemonesPorId = [...pokemones].sort((a, b) => {
      if (a.id > b.id) return 1
      if (a.id < b.id) return -1
      return 0
    })
    setPokemones(pokemonesPorId)
  }

  return (
    <>
      <List buscar={buscar} ordenarNumero={sortByNumber} ordenarLetra={sortByLetter} />
      <Card pokemones={pokemones} open={open} />
      {isOpen && <Details pokemon={pokemonSelect} close={close} />}
    </>
  );
}

export default App;
