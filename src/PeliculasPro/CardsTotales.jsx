import React from 'react'
import '../PeliculasPro/CardTota.css'
export const CardsTotales = ({ getAllPeliculas, getToHeader, ToCardSelect }) => {

    return (
        <>
            <div className="row">
                {
                    getAllPeliculas.map((elementos, index) => (
                        <div className="container" key={index}>
                            <figure onClick={() => ToCardSelect(elementos.id)}
                                onPointerEnter={() => getToHeader(elementos)}>
                                <img className="card-img-top " src={`https://image.tmdb.org/t/p/w300${elementos.avatar}`} />
                                <div className=" capa">
                                    <h5 className="card-title">{elementos.titulo}</h5>
                                    <p className="card-text">{elementos.resumen}</p>
                                </div>
                            </figure>
                        </div>
                    ))
                }
            </div>


        </>
    )
}
