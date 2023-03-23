import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import axios from 'axios';
import "./AboutPageStyle.css"

function About() {
    const navigate = useNavigate();
    const params = useParams();
    const pokemonName = params.pokemonName;

    const [pokemonData, setPokemonData] = useState(null);
    const [evolutionChain, setEvolutionChain] = useState(null);

    const loadDataFromAPI = async () => {
        const pokemonJson = await getDataFromAPI('pokemon', pokemonName);
        const evoChain = await getDataFromAPI('evolution-chain', pokemonJson.id);
        setPokemonData(pokemonJson);
        setEvolutionChain(evoChain);
    }

    const getDataFromAPI = async (endpoint, id) => {
        try {
            const result = await axios(
                `https://pokeapi.co/api/v2/${endpoint}/${id}`
            )
            return result.data;
        } catch {
            return {};
        }
    }

    const generateEvoChain = (evoChain) => {
        if (evoChain.evolves_to.lenght) {

        } else {
            return null;
        }
    }

    useEffect(() => {
        loadDataFromAPI();
    }, []);

    console.log(evolutionChain);

    return (
        <div>
            {
                pokemonData ?
                    <>
                        <div className='about-wrapper'>
                            <div className='about-header'>
                                <button className='back-button' onClick={() => navigate("/")}>Back</button>
                                <span className='pokeName'>{pokemonData.name} <span className='pokeID'>#{pokemonData.id}</span></span>
                            </div>
                            <div class='content-wrapper'>
                                <img className='poke-image' src={pokemonData.sprites.other.dream_world.front_default} alt="" />
                                <div className='info-tab'>

                                    <Tabs>
                                        <TabList>
                                            <Tab>PokeDex</Tab>
                                            <Tab>Stats</Tab>
                                            <Tab>Evolution</Tab>
                                        </TabList>

                                        <TabPanel>
                                            <p>Type <span className="text-type"/>{pokemonData.types.map((item, index) => (
                                                <span className='colour-text' key={index}>{item.type.name} </span>
                                            ))} </p>
                                            <p className="text-left">Height <span className="text-right">{pokemonData.height} yards</span></p>
                                            <p>Weight <span className="text-right">{pokemonData.weight} Lbs</span></p>
                                            <span>Abilities:</span> <span className="text-type" /><ul>
                                                {pokemonData.abilities.map((item, index) => (
                                                    <li className='colour-li' key={index}>{item.ability.name}</li>
                                                ))} </ul>

                                        </TabPanel>
                                        <TabPanel>
                                            <p>Health&#9829; <span className="text-type1"> {pokemonData.stats[0].base_stat}</span></p>
                                            <p>Attack&#10537; <span className="text-type1"> {pokemonData.stats[1].base_stat}</span></p>
                                            <p>Defense&#10050; <span className="text-type1"> {pokemonData.stats[2].base_stat}</span></p>
                                            <p>Special-Attack&#9885; <span className="text-type1"> {pokemonData.stats[3].base_stat}</span></p>
                                            <p>Special-Defense&#9884; <span className="text-type1"> {pokemonData.stats[4].base_stat}</span></p>
                                            <p>Speed&#8258; <span className="text-type1"> {pokemonData.stats[5].base_stat}</span></p>
                                        </TabPanel>
                                        <TabPanel>

                                        </TabPanel>
                                    </Tabs>
                                </div>
                            </div>
                        </div>
                    </> : null
            }
        </div>
    )
}

export default About