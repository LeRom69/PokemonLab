import React from "react";
import "./PokeCardStyle.css"

function PokemonCard({ allPokemons }) {
    return (
        <div className="card-style">
            {allPokemons.map((pokemon, index) => (
                <div className = "pokemon-card" id={pokemon.id} key={index}><span># {index} </span><span className="text-right">{pokemon.name}</span> <br></br>
                    <img className="img-size" src={pokemon.sprites.other.dream_world.front_default} alt="" />
                    <p>Type <span className="text-type"/>{pokemon.types.map((item, index) => (  
                        <span key={index}>{item.type.name} </span>
                    ))} </p>
                    <p className="text-left">Height <span className="text-right">{pokemon.height}</span></p>
                    <p>Weight <span className="text-right">{pokemon.weight} Lbs</span></p>
                </div>
            ))}
        </div>
    )
}

export default PokemonCard;