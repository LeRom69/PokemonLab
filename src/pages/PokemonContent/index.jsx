import React from "react";
import PokemonList from "./PokemonList";
import PokemonCard from "./PokemonCard";
import { useState } from 'react';

function PokemonContent({ allPokemons }) {
    const [currentPokemonCard, setCurrentPokemonCard] = useState({});

    const currentPokemon = {
        get: currentPokemonCard,
        set: setCurrentPokemonCard
    }

    return (
        <div className="pokemon-list-wrapper">
            <div className="column-1">
                <PokemonList currentPokemon={currentPokemon} allPokemons={allPokemons} />
            </div>
            <div className="column-2">
                {
                    currentPokemon.get.id ?
                        <PokemonCard currentPokemon={currentPokemon} allPokemons={allPokemons} /> : null
                }
            </div>
        </div>
    )
}

export default PokemonContent;