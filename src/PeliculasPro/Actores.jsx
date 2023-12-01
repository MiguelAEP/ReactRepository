import React, { useEffect, useState } from 'react'
import { fetchPeli } from './fechPeli'
import { useNavigate } from 'react-router-dom'
import { Spinner } from './Spinner';

export const Actores = () => {
    const navigate = useNavigate();
    const URL = 'https://api.themoviedb.org/3/person/popular'
    const [actor, setactor] = useState([])
    const [cargando, setCargando] = useState(false)

    const getActores = async () => {
        const respuesta = await fetchPeli(URL)
        //  console.log(respuesta.results);
        respuesta.results.forEach(elementos => {
            console.log(elementos);
            const Actor = {
                id: elementos.id,
                nombre: elementos.name,
                avatar: elementos.profile_path,
                pelicula: elementos.known_for[0].original_title,
                resumen: elementos.known_for[0].overview
            }
            setactor((actor) => [...actor, Actor])
            setCargando(false)
        })

    }

    useEffect(() => {
        setCargando(true)
        getActores()

    }, [URL])

    const toPeople = (nombre) => {
        navigate(`/PeliMovie/Actores/${nombre}`)
    }

    return (
        <>

            <strong><h1 className='text-white'>Actores Populares</h1></strong>
            {cargando ?
                <Spinner />
                :
                <div className='row'>
                    {actor.map((elementos, index) => (
                        <div className="col-3 " key={index} onClick={() => toPeople(elementos.nombre)}>
                            <div className="card  cardBody m-2" >
                                <img className="card-img-top " src={`https://image.tmdb.org/t/p/original${elementos.avatar}`} />
                                <div className="card-body ">
                                    <h5 className="card-title">{elementos.nombre}</h5>
                                    <p className="card-text">{elementos.pelicula}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            }

        </>
    )
}
