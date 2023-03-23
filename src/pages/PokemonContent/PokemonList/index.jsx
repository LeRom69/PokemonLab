import React from "react";
import "./PokemonStyle.css";
import PokemonListItem from "../PokemonListItem"

function PokemonList({allPokemons, currentPokemon}){

    return(
        <div>
            <ol className="index-style">
                {allPokemons.map((pokemon, index) =>(
                      <PokemonListItem key={index} currentPokemon = {currentPokemon} pokemon = {pokemon} />
                    ))}
            </ol>
        </div>
    )
}

export default PokemonList;
