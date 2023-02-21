import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonContent from '../PokemonContent/index';

function Home() {
    const [data, setData] = useState([])
    const [allPokemons, setAllPokemons] = useState([])
    useEffect(
        () => async () => {
            try {
                const result = await axios(
                    "https://pokeapi.co/api/v2/pokemon?limit=100"
                )
                setData(result.data.results)

                result.data.results.map(async (item) => {
                    const result = await axios(item.url)
                    setAllPokemons(oldArray => [...oldArray, result.data])
                })
            } catch { }
        }, [])
    console.log(allPokemons)
    return (
        <>
            <div>
                <Link to="/about">
                    <div className="App">About</div>
                </Link>
                <PokemonContent allPokemons={allPokemons} />
            </div>
        </>
    )
}

export default Home