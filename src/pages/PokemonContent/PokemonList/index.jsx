import React from "react";
import "./PokemonStyle.css"

function PokemonList({allPokemons}){
    const hideAllCards = () =>{
       const cardList = document.querySelectorAll(".pokemon-card.show");
       [...cardList].forEach(card => {
            card.classList.remove("show")
       })
    }
    const showCard = (event)=>{
        if(event.target.classList.contains("pokemon-item")){
            hideAllCards();
            const cardId = event.target.dataset.cardId;
            const cardEl = document.getElementById(cardId);
            cardEl.classList.add("show");
        }
    }
    return(
        <div>
            <ol onMouseOver = {showCard} onMouseLeave = {hideAllCards} className="index-style">
                {allPokemons.map((pokemon, index) =>(
                    <li key={index} >
                        <a data-card-id = {pokemon.id} className ="pokemon-item" href ="#">
                        <img src={pokemon.sprites.front_default} alt =""/> <span className="pokemon-name-style">{pokemon.name}</span>
                        </a>
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default PokemonList;