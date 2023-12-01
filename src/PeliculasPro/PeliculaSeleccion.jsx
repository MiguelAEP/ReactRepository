import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPeli } from './fechPeli'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
export const PeliculaSeleccion = () => {
    const navigate = useNavigate();
    const { id } = useParams()
    const URL = `https://api.themoviedb.org/3/movie/${id}`
    const [cardPeli, setcardPeli] = useState({})

    const getCardPeli = async () => {
        const respuesta = await fetchPeli(URL)
        const card = {
            id: respuesta.id,
            titulo: respuesta.title,
            avatar: respuesta.backdrop_path,
            resumen: respuesta.overview,
            genero: respuesta.genres[0].name,
            lanzamiento: respuesta.release_date
        }
        setcardPeli(card)
        console.log(card);
    }

    const ToMain = () => {
        navigate(`/PeliMovie`)
    }

    useEffect(() => {
        getCardPeli()
    }, [id])


    return (
        <>

            <div className="col-6 w-100 " >
                <figure className=' d-flex p-5 justify-content-center align-items-center' onClick={() => ToMain()}>
                    <img className="card-img-top w-50 rounded-pill  " src={`https://image.tmdb.org/t/p/original${cardPeli.avatar}`} />
                    <div className="p-5">
                        <h5 className="card-title text-white">{cardPeli.titulo}</h5>
                        <strong className='text-white '>Resumen : </strong>
                        <p className="card-text text-white ">{cardPeli.resumen}</p>
                        <strong className='d-flex text-white '>Estreno :</strong>
                        <p className="card-text text-white">{cardPeli.lanzamiento}</p>
                        <strong className='d-flex text-white '>Genero :</strong>
                        <p className="card-text text-white">{cardPeli.genero}</p>
                    </div>
                </figure>
            </div>


        </>
    )
}
