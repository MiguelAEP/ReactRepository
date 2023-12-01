import React from 'react'

export const PeliculaHeader = ({ selectToHeader }) => {
    const { avatar, id, resumen, titulo } = selectToHeader

    return (
        <>
            <div className="container2" >
                <figure>
                    <img className="card-img-top " src={`https://image.tmdb.org/t/p/w300${avatar}`} />
                    <div className="capaHeader">
                        <h5 className="card-title">{titulo}</h5>
                        <p className="card-text">{resumen}</p>
                    </div>
                </figure>
            </div>
        </>
    )
}
