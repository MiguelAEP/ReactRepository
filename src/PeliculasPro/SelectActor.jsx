import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchPeli } from './fechPeli'
import { useState } from 'react'
import { Spinner } from './Spinner'
import { useNavigate } from 'react-router-dom'

export const SelectActor = () => {

    const { actor } = useParams()
    const URL = 'https://api.themoviedb.org/3/search/person?query='
    const [actorSelect, setactorSelect] = useState({})
    const [cargando, setCargando] = useState(false)

    const navigate = useNavigate();
    const getActorSelected = async () => {
        const respuesta = await fetchPeli(`${URL}${actor}`)
        console.log(respuesta);
        const actorSe = {
            id: respuesta.results[0].id,
            nombre: respuesta.results[0].name,
            avatar: respuesta.results[0].profile_path,
            peliculaOneImagen: respuesta.results[0].known_for[0]?.backdrop_path,
            peliculaOneTitle: respuesta.results[0].known_for[0]?.original_title,
            peliculaTwoImagen: respuesta.results[0].known_for[1]?.backdrop_path,
            peliculaTwoTitle: respuesta.results[0].known_for[1]?.original_title,
            peliculaThreeImagen: respuesta.results[0].known_for[2]?.backdrop_path,
            peliculaThreeTitle: respuesta.results[0].known_for[2]?.original_title,
        }


        setactorSelect(actorSe)
        setCargando(false)
    }

    useEffect(() => {
        setCargando(true)
        getActorSelected()

    }, [])


    const ToActores = () => {
        navigate(`/PeliMovie/Actores`)
    }

    return (
        <>
            {cargando
                ?
                <Spinner> </Spinner>

                :
                <div className="row mt-5" >
                    <div className="col-4">
                        <div className="card " onClick={() => ToActores()} style={{ width: '450px', height: '650px', background: '#EEF8F9', opacity: '60%', cursor: 'pointer' }}>
                            <div className="card-body  text-center" >
                                <h5 className="card-title">{actorSelect.nombre}</h5>
                                <img className="card-img-top w-100 h-75 rounded-circle mt-4" src={`https://image.tmdb.org/t/p/original${actorSelect.avatar}`} />
                            </div>
                        </div>
                    </div>

                    <div className="col-8">
                        <div className="card" style={{ background: '#EEF8F9', opacity: '60%' }}>
                            <h1 className="card-title" >Interpretacion : </h1>

                            <h5 className="card-title" >{actorSelect.nombre}</h5>
                            <div className="card-body d-flex flex-column justify-content-center align-items-center " style={{ width: '400px', height: '450px', overflow: 'hidden' }}>

                                <div className="card d-flex justify-content-center align-items-center m-2" style={{ width: '350px', height: '150px' }} >
                                    <strong>{actorSelect.peliculaOneTitle}</strong>
                                    <img className="card-img-top w-50 h-75  rounded-circle" src={`https://image.tmdb.org/t/p/original${actorSelect.peliculaOneImagen}`} />
                                </div>

                                {actorSelect.peliculaTwoTitle && <div className="card d-flex justify-content-center align-items-center m-2" style={{ width: '350px', height: '150px' }} >
                                    <strong>{actorSelect.peliculaTwoTitle}</strong>
                                    <img className="card-img-top w-50 h-75  rounded-circle" src={`https://image.tmdb.org/t/p/original${actorSelect.peliculaTwoImagen}`} />
                                </div>}

                                {actorSelect.peliculaThreeTitle && <div className="card d-flex justify-content-center align-items-center m-2" style={{ width: '350px', height: '150px' }} >
                                    <strong>{actorSelect.peliculaThreeTitle}</strong>
                                    <img className="card-img-top w-50 h-75  rounded-circle" src={`https://image.tmdb.org/t/p/original${actorSelect.peliculaThreeImagen}`} />
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>

            }

        </>
    )
}
