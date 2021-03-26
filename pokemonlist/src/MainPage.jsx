import React, { useState, useEffect } from 'react'
import { PokeList } from './PokeList'
import { Pokemon } from './Pokemon'

export const MainPage = () => {

    const [page, setPage] = useState('default')
    const [pokemons, setPokemons] = useState([])
    const [pokemon, setPokemon] = useState()
    const [pic, setPic] = useState([])

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

    const toDefault = (pic) => {

        console.log(pic)
        setPic(pic)
        setPage('')
    }

    switch(page) {
        case 'pokemon':
            return(
                <>
                    <Pokemon passURL={pokemon.url} parentToDefault={toDefault}></Pokemon>
                </>
            )
        default:
            return(
                <>
                    <ul>
                        {pokemons.map(items => {
                            return <PokeList key={items.name} name={items.name} pic={pic} onClick={() => newPage(items)}></PokeList>
                        })}
                    </ul>
                </>
            )
    }
}