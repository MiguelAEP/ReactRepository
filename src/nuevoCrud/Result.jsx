import React from 'react'

export const Result = ({ users, eliminar, pasarValoresEdit }) => {

    return (
        <>
            <h2 className='mt-5'>Resultados</h2>
            <table className="table mt-2">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">NickName</th>

                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 ?
                        users.map(usr => (
                            <tr key={usr.id} >
                                <td>{usr.nombre}</td>
                                <td>{usr.nickName}</td>
                                <td>
                                    <button onClick={() => pasarValoresEdit(usr)} className='btn btn-outline-primary'>editar</button>
                                    <button onClick={() => eliminar(usr.id)} className='btn btn-outline-danger'>eliminar</button>
                                </td>
                            </tr>))

                        :

                        (<tr>
                            <td colSpan={3}>No user</td>
                        </tr>)

                    }


                </tbody>
            </table>
        </>
    )
}
