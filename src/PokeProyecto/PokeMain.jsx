import { useState } from "react"
import { useEffect } from "react"
import { CardTotales } from "./CardTotales"
import { useNavigate } from 'react-router-dom'


export const PokeMain = () => {
    const navigate = useNavigate();
    const URL = 'https://pokeapi.co/api/v2/pokemon'

    const [pokemones, setpokemones] = useState([])
    const [setsearchPoke, setsetsearchPoke] = useState('')
    const cargarPokemones = async () => {
        try {
            const respuesta = await fetch(URL)
            const resultado = await respuesta.json()

            resultado.results.forEach(async (element) => {
                const response = await fetch(element.url)
                const json = await response.json()
                let pokemon = {
                    id: json.id,
                    name: json.name,
                    avatar: json.sprites.front_default,
                    tipo: json.types
                }
                setpokemones((pokemones) => [...pokemones, pokemon]);
            })
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        getPoke(setsearchPoke)
    }

    const onInputChange = (e) => {
        setsetsearchPoke(e.target.value)
    }

    const getPoke = async (pokemon) => {

        try {
            const respuesta = await fetch(`${URL}/${pokemon}`)
            const resultado = await respuesta.json()
            const poke = {
                id: resultado.id,
                nombre: resultado.name,
                avatar: resultado.sprites.front_default,
                tipo: resultado.types[0].type.name,
                tipo1: resultado.types[1]?.type.name
            }

            navigate(`/pokeProyect/${poke.id}`)

        } catch (error) {
            console.log(error);
        }


    }


    useEffect(() => {
        cargarPokemones()
    }, [])



    return (
        <>
            <form onSubmit={handleSubmit}>
                <input className="form-control form-control" type="text" placeholder="search some pokemon.."
                    onChange={onInputChange}
                    name="pokeName" value={setsearchPoke} />
                <button type="submit" className="btn btn-outline-primary mt-1">search</button>
            </form>

            <CardTotales pokemones={pokemones} />
        </>
    )
}
