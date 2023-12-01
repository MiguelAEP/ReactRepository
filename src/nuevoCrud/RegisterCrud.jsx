import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export const RegisterCrud = ({ mensaje, pintarMensaje, addUsers, editing, setEditing, actualizar, usuarioSeleccionado, users }) => {

    const [usuarioObj, setusuarioObj] = useState({ id: null, nombre: '', nickName: '' })

    const onInputChange = ({ target }) => {
        const { name, value } = target
        setusuarioObj({
            ...usuarioObj,
            [name]: value
        })
    }

    const sendRegisterUpdate = (e) => {
        e.preventDefault()
        if (usuarioObj.nombre === '' || usuarioObj.nickName === '' || usuarioObj.id === '') {
            return
        }
        else {
            if (editing === false) {
                usuarioObj.id = uuidv4()
                addUsers(usuarioObj)
                pintarMensaje('Usuario Agregado Con Exito')
                setEditing(false)
                e.target.reset()
            }

            else {
                actualizar(usuarioSeleccionado.id, usuarioObj)
                pintarMensaje('Usuario Actualizado Con Exito')
                e.target.reset()
                setEditing(false)
                usuarioSeleccionado.id = null
                usuarioSeleccionado.nombre = ''
                usuarioSeleccionado.nickName = ''
            }
            console.log(mensaje);
            setusuarioObj({ id: null, nombre: '', nickName: '' })
        }
    }

    return (
        <>
            {editing ? <h1>Editar</h1> : <h1>Registro</h1>}
            <form onSubmit={sendRegisterUpdate} >
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input type="text" className="form-control"
                        name='nombre' defaultValue={usuarioSeleccionado.nombre} onChange={onInputChange} />
                </div>

                <div className="mb-3">
                    <label className="form-label">NickName</label>
                    <input type="text"
                        className="form-control" name='nickName' defaultValue={usuarioSeleccionado.nickName}
                        onChange={onInputChange} />
                </div>

                {editing ? <button type="submit" className="btn btn-primary">Editar</button>
                    : <button type="submit" className="btn btn-primary">Agregar</button>
                }

                {mensaje.estado && <h4 className='text-danger mt-3'> {mensaje.mensaje} </h4>}


            </form>
        </>
    )
}
