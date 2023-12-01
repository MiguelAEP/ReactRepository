import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const BuscarPelicula = ({ setSearchPeliInput }) => {
    const navigate = useNavigate();
    const [searchPeli, setSearchPeli] = useState('')

    const HandleSubmit = (e) => {
        e.preventDefault()
        setSearchPeliInput(searchPeli.trim());
    }

    const ToPeople = () => {
        navigate(`/PeliMovie/Actores`)
    }

    return (
        <>
            <form className='d-flex mb-3 w-25' onSubmit={HandleSubmit}>
                <input onChange={(e) => setSearchPeli(e.target.value)} name='peli' value={searchPeli}
                    type="text" className="form-control " placeholder="buscar pelicula"></input>
                <button className='btn btn-primary'>search</button>

                <button className="btn btn-secondary" style={{ marginLeft: '10px' }} type="button" onClick={() => ToPeople()} >Persona</button>
            </form>




        </>
    )
}
