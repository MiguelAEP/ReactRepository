import React from 'react'
import { useNavigate } from 'react-router-dom'

export const TipoPoke = ({ nombre, avatar, tipo, tipo1 }) => {

    const navigate = useNavigate();

    const backMain = () => {
        navigate('/pokeProyect')
    }
    return (
        <>
            <img style={{ width: 360, height: 250, backgroundColor: 'powderblue', }}
                src={avatar} className="card-img-top " />
            <div className="card-body">
                <h4 className="card-title"><strong>Pokemon: </strong>{nombre}</h4>
                <h4 className="card-text"><strong>Tipo: </strong>{tipo} - {tipo1}</h4>
                <button className='btn btn-outline-primary' onClick={() => backMain()}>Regresar</button>
            </div>
        </>
    )
}
