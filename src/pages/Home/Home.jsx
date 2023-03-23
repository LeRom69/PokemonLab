import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonContent from '../PokemonContent/index';
import Pagination from "../Pagination/Pagination"

function Home() {
    const [data, setData] = useState([])
    const [allPokemons, setAllPokemons] = useState([])

    const [currentPage, setCurrentPage] = useState(1)
    const [pokemonPerPage] = useState(7)

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

    const lastPokemonIndex = currentPage * pokemonPerPage;
    const firstPokemonIndex = lastPokemonIndex - pokemonPerPage;
    const pokemonsPage = allPokemons.slice(firstPokemonIndex, lastPokemonIndex);
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <>
            <div>

                <PokemonContent allPokemons={pokemonsPage} />

                <Pagination
                    pokemonPerPage={pokemonPerPage}
                    totalPokemon={allPokemons.length}
                    paginate={paginate}
                />
            </div>
        </>
    )
}

export default Home