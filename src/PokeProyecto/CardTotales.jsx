import React from 'react'
import { Link } from 'react-router-dom'

export const CardTotales = ({ pokemones }) => {

    return (
        <>
            <div className="row">


                {pokemones &&
                    pokemones.map((elementos, indx) => (

                        <div className="card p-2 m-1 shrink" key={indx} style={{
                            width: 180, height: 300
                        }} >
                            <img style={{ width: 160, height: 150, backgroundColor: 'powderblue', }}
                                src={elementos.avatar} className="card-img-top " />
                            <div className="card-body">
                                <h5 className="card-title">{elementos.name}</h5>
                                <p className="card-text">{elementos.tipo[0].type.name} {elementos.tipo[1]?.type.name}</p>
                                <Link className="btn btn-primary" to={`/pokeProyect/${elementos.id}`}>ver..</Link>
                            </div>
                        </div>))

                }


            </div>


        </>
    )
}
