import React from "react";
import { useState } from 'react';
import PokemonCard from "../PokemonCard"

function PokemonListItem({ pokemon, currentCard }) {
    const removeActiveCard = () =>{
        currentCard.set({});
     }
     const setActiveCard = ()=>{
        currentCard.set(pokemon);
     }
    return (
        <li>
            <a onMouseOver = {setActiveCard} onMouseLeave = {removeActiveCard} className="pokemon-item" href="#" >
                <img src={pokemon.sprites.front_default} alt="" /> <span className="pokemon-name-style">{pokemon.name}</span>
            </a>
        </li>
    )
}

export default PokemonListItem;
