import React from "react";

function PokemonListItem({ pokemon, currentPokemon }) {
    const aboutPageURL = `/about/${pokemon.name}`;

    const removeActiveCard = () =>{
        currentPokemon.set({});
    }
    
    const setActiveCard = ()=>{
        currentPokemon.set(pokemon);
    }
    
    return (
        <li>
            <a onMouseOver = {setActiveCard} onMouseLeave = {removeActiveCard} className="pokemon-item" href={aboutPageURL} >
                <img src={pokemon.sprites.front_default} alt="" /> <span className="pokemon-name-style">{pokemon.name}</span>
            </a>
        </li>
    )
}

export default PokemonListItem;
