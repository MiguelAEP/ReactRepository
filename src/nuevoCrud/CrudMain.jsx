import { useState } from 'react'
import { RegisterCrud } from './RegisterCrud'
import { Result } from './Result'
import { v4 as uuidv4 } from 'uuid'



export const CrudMain = () => {

    const [users, setUsers] = useState([])
    const [usuarioSeleccionado, setUsuarioSeleccionado] = useState({})
    const [editing, setEditing] = useState(false)
    const [existeUser, setExisteUser] = useState(false)
    const [mensaje, setMensaje] = useState({ estado: false, mensaje: '' })

    const addUsers = (data) => {
        setEditing(false)
        const index = users.findIndex(ele => ele.id === data.id)
        if (index === -1) {
            data.id = uuidv4(),
                setUsers([...users, data])
            return
        }
        setExisteUser(true)

    }

    const eliminar = (id) => {
        const nuevoArr = users.filter(ele => ele.id !== id)
        setUsers(nuevoArr)
        usuarioSeleccionado.id = null
        usuarioSeleccionado.nombre = ''
        usuarioSeleccionado.nickName = ''
        pintarMensaje('Usuario Eliminado con Exito')
        setEditing(false)
    }

    const pasarValoresEdit = (data) => {
        setEditing(true)
        setUsuarioSeleccionado({ id: data.id, nombre: data.nombre, nickName: data.nickName })
    }

    const actualizar = (id, data) => {
        data.id = uuidv4()
        const arrActualizado = users.map(usr => usr.id === id ? data : usr)
        setUsers(arrActualizado)
    }

    const pintarMensaje = (msg) => {
        setMensaje({ estado: true, mensaje: msg })
        setTimeout(() => {
            setMensaje({ estado: false, mensaje: '' })
        }, 1000);

    }

    return (
        <>

            <div className="row container">

                <RegisterCrud mensaje={mensaje} pintarMensaje={pintarMensaje} users={users} addUsers={addUsers} setEditing={setEditing} editing={editing} actualizar={actualizar} usuarioSeleccionado={usuarioSeleccionado}></RegisterCrud>
                {existeUser ? <p className='text-danger'>El usuario ya existe</p>
                    : <p ></p>
                }


                <Result users={users} eliminar={eliminar} pasarValoresEdit={pasarValoresEdit}></Result>


            </div>

        </>
    )
}

