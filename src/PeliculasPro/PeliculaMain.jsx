import React, { useState } from 'react'
import { useEffect } from 'react'
import { fetchPeli } from './fechPeli'
import { CardsTotales } from './CardsTotales'
import { PeliculaHeader } from './PeliculaHeader'
import { useNavigate } from 'react-router-dom'
import { BuscarPelicula } from './BuscarPelicula'

export const PeliculaMain = () => {
    const navigate = useNavigate();

    const URL = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true'

    const [getAllPeliculas, setgetAllPeliculas] = useState([])
    const [selectToHeader, setSelectToHeader] = useState({})
    const [searchPeliInput, setSearchPeliInput] = useState('')

    const getPeliculas = async () => {
        const result = await fetchPeli(URL)
        result.results.forEach(elementos => {
            let peliObj = {
                id: elementos.id,
                titulo: elementos.title,
                resumen: elementos.overview,
                avatar: elementos.poster_path
            }
            setgetAllPeliculas((peli) => [...peli, peliObj]);
        })

        let objInicial = {
            id: result.results[0].id,
            titulo: result.results[0].title,
            resumen: result.results[0].overview,
            avatar: result.results[0].poster_path
        };
        setSelectToHeader(objInicial);
    }

    const getToHeader = (pelicula) => {
        const index = getAllPeliculas.findIndex(elemento => elemento.id === pelicula.id)
        setSelectToHeader(getAllPeliculas[index]);
    }

    const ToCardSelect = (id) => {
        navigate(`/PeliMovie/${id}`)
    }

    const searchMovieInput = () => {
        const index = getAllPeliculas.findIndex(elemento => elemento.titulo === searchPeliInput)
        if (index === -1) return
        const idSearch = `${getAllPeliculas[index].id}`
        navigate(`/PeliMovie/${idSearch}`)
    }

    useEffect(() => {
        getPeliculas()
        searchMovieInput()
    }, [searchPeliInput])

    return (
        <>
            <div className='d-flex'>
                <BuscarPelicula setSearchPeliInput={setSearchPeliInput} />
            </div>

            <PeliculaHeader selectToHeader={selectToHeader} />
            <CardsTotales
                getAllPeliculas={getAllPeliculas}
                getToHeader={getToHeader}
                ToCardSelect={ToCardSelect}
            />


        </>
    )
}
