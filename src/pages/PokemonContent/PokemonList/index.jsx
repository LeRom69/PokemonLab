import React from "react";
import "./PokemonStyle.css";
import PokemonListItem from "../PokemonListItem"

function PokemonList({allPokemons, currentCard}){

    return(
        <div>
            <ol className="index-style">
                {allPokemons.map((pokemon, index) =>(
                      <PokemonListItem key={index} currentCard = {currentCard} pokemon = {pokemon} />
                    ))}
            </ol>
        </div>
    )
}

export default PokemonList;
