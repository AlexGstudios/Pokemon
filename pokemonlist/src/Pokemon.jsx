import React, { useState, useEffect } from "react"


export const Pokemon = (props) => {

    const [pokemon, setPokemon] = useState([])

    useEffect(() => {

        const fetchData = async () => {

            const response = await fetch(props.passURL)
            const data = await response.json()
            setPokemon(data)
        }
        fetchData()
    }, [])

    const picture = () => {

        props.parentToDefault(pokemon.sprites && pokemon.sprites.other.dream_world.front_default)
    }

    return(
        <>
            <img src={pokemon.sprites && pokemon.sprites.other.dream_world.front_default} alt={pokemon.name}/>
            <h1>{pokemon.name}</h1>
            <p>Height: {pokemon.height} Weight: {pokemon.weight}</p>
            <p>HP: {pokemon.stats && pokemon.stats[0].base_stat}</p>
            <p>Attack: {pokemon.stats && pokemon.stats[1].base_stat} | Special Attack: {pokemon.stats && pokemon.stats[3].base_stat}</p>
            <p>Defense: {pokemon.stats && pokemon.stats[2].base_stat} | Special defense: {pokemon.stats && pokemon.stats[4].base_stat}</p>
            <p>Speed: {pokemon.stats && pokemon.stats[5].base_stat}</p>
            <button onClick={picture}>Back To List</button>
        </>
    )
}