import React, { useState } from "react";

import "./App.css";
import List from "./components/List";
import Card from "./components/Card";
import Details from "./components/Details";

function App() {

  const [pokemones, setPokemones] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/pokemones", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => setPokemones(response))
      .catch((err) => console.error(err));
  }, []);

  const buscar = (nombre) => {
    if (nombre == "") {
      setPokemones(pokemones)
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

  return (
    <>
      <List buscar={buscar} />
      <Card pokemones={pokemones} open={open} />
      {isOpen && <Details pokemon={pokemonSelect} close={close} />}
    </>
  );
}

export default App;
