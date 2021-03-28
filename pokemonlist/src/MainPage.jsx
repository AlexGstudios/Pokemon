import React, { useState, useEffect } from 'react'
import { PokeList } from './PokeList'
import { Pokemon } from './Pokemon'

export const MainPage = () => {

    const [page, setPage] = useState('default')
    const [pokemons, setPokemons] = useState([])
    const [pokemon, setPokemon] = useState()

    const URL = 'https://pokeapi.co/api/v2/pokemon?limit=100'

    useEffect(() => {
        
        const fetchData = async () => {

            const response = await fetch(URL)
            const data = await response.json()
            setPokemons(data.results)
        }
        fetchData()
    }, [])

    const newPage = (item) => {

        setPokemon(item)
        setPage('pokemon')
    }

    const toDefault = (picID, picUrl) => {

        var newPokemons = pokemons.filter(poke => poke === pokemons[picID])

        const udtNewPokemons = {
            name: newPokemons[0].name,
            url: newPokemons[0].url,
            pic: picUrl
        }

        const newPokemonList = pokemons.map(el => (el === pokemons[picID] ? Object.assign(el, udtNewPokemons) : el))

        setPokemons(newPokemonList)
        setPage('')

    }

    const deletePokemon = (thisPokemon) => {

        const newPokemonList = pokemons.filter(poke => poke.name !== thisPokemon)
        setPokemons(newPokemonList)
        setPage('')
    }

    switch(page) {
        case 'pokemon':
            return(
                <>
                    <Pokemon passURL={pokemon.url} parentToDefault={toDefault} deletePokemon={deletePokemon}></Pokemon>
                </>
            )
        default:
            return(
                <>
                    <ul>
                        {pokemons.map(items => {
                            return <PokeList key={items.name} name={items.name} picture={items.pic} onClick={() => newPage(items)}></PokeList>
                        })}
                    </ul>
                </>
            )
    }
}