import React from "react";
import PokemonList from "./PokemonList";
import PokemonCard from "./PokemonCard";
import { useState } from 'react';

function PokemonContent({ allPokemons }) {
    const [currentPokemonCard, setCurrentPokemonCard] = useState({});

    const currentCard = {
        get: currentPokemonCard,
        set: setCurrentPokemonCard
    }

    return (
        <div className="pokemon-list-wrapper">
            <div className="column-1">
                <PokemonList currentCard={currentCard} allPokemons={allPokemons} />
            </div>
            <div className="column-2">
                {
                    currentCard.get.id ?
                        <PokemonCard currentCard={currentCard} allPokemons={allPokemons} /> : null
                }
            </div>
        </div>
    )
}

export default PokemonContent;