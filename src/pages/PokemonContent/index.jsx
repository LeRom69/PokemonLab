import React from "react";
import PokemonList from "./PokemonList";
import PokemonCard from "./PokemonCard";

function PokemonContent({ allPokemons }) {
    return (
        <div className="pokemon-list-wrapper">
            <div className="column-1">
            <PokemonList allPokemons={allPokemons} />
            </div>
            <div className="column-2">
                <PokemonCard allPokemons={allPokemons} />
            </div>
        </div>
    )
}

export default PokemonContent;