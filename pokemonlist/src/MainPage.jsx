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

    const toDefault = (event) => {

        setPage('')
    }

    switch(page) {
        case 'pokemon':
            return(
                <>
                    <Pokemon passURL={pokemon.url} onClick={() => toDefault()}></Pokemon>
                </>
            )
        default:
            return(
                <>
                    <ul>
                        {pokemons.map(items => {
                            return <PokeList key={items.name} name={items.name} onClick={() => newPage(items)}></PokeList>
                        })}
                    </ul>
                </>
            )
    }
}