import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TipoPoke } from './TipoPoke';


export const PokeId = () => {

    const [pokeBuscado, setpokeBuscado] = useState({})
    const [tipoPokemon, setTipoPokemon] = useState('')

    const { id } = useParams()

    const URL = 'https://pokeapi.co/api/v2/pokemon/'

    const getPoke = async () => {
        const respuesta = await fetch(`${URL}${id}`)
        const resultado = await respuesta.json()
        const poke = {
            nombre: resultado.name,
            avatar: resultado.sprites.front_default,
            tipo: resultado.types[0].type.name,
            tipo1: resultado.types[1]?.type.name
        }
        setpokeBuscado(poke)
        setTipoPokemon(resultado.types[0].type.name)
    }

    const clasePokemon = () => {
        let tipoPoke = ''

        switch (tipoPokemon) {

            case "fire":
                tipoPoke = "fire"
                break;

            case "grass":
                tipoPoke = "grass"
                break;

            case "bug":
                tipoPoke = "bug"
                break;

            case "water":
                tipoPoke = "water"
                break;

            case "normal":
                tipoPoke = "normal"
                break;

            default:
                break;
        }
        return tipoPoke
    }


    useEffect(() => {
        getPoke()
    }, [id])



    return (
        <>
            {clasePokemon() === "fire" && <div className="card p-2 m-1 bg-danger  shrink" style={{ width: 380, height: 400 }} >
                <TipoPoke nombre={pokeBuscado.nombre} avatar={pokeBuscado.avatar} tipo={pokeBuscado.tipo} tipo1={pokeBuscado.tipo1}></TipoPoke>
            </div>
            }

            {clasePokemon() === "grass" && <div className="card p-2 m-1 bg-success shrink" style={{ width: 380, height: 400 }} >
                <TipoPoke nombre={pokeBuscado.nombre} avatar={pokeBuscado.avatar} tipo={pokeBuscado.tipo} tipo1={pokeBuscado.tipo1}></TipoPoke>
            </div>
            }


            {clasePokemon() === "bug" && <div className="card p-2 m-1 bg-primary  shrink" style={{ width: 380, height: 400 }} >
                <TipoPoke nombre={pokeBuscado.nombre} avatar={pokeBuscado.avatar} tipo={pokeBuscado.tipo} tipo1={pokeBuscado.tipo1}></TipoPoke>
            </div>
            }

            {clasePokemon() === "water" && <div className="card p-2 m-1 bg-info  shrink" style={{ width: 380, height: 400 }} >
                <TipoPoke nombre={pokeBuscado.nombre} avatar={pokeBuscado.avatar} tipo={pokeBuscado.tipo} tipo1={pokeBuscado.tipo1}></TipoPoke>
            </div>
            }

            {clasePokemon() === "normal" && <div className="card p-2 m-1 bg-secondary  shrink" style={{ width: 380, height: 400 }} >
                <TipoPoke nombre={pokeBuscado.nombre} avatar={pokeBuscado.avatar} tipo={pokeBuscado.tipo} tipo1={pokeBuscado.tipo1}></TipoPoke>
            </div>
            }
        </>
    )
}
