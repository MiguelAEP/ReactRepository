

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { CrudMain } from '../nuevoCrud/CrudMain'
import { NavBar } from './NavBar'
import { PokeMain } from '../PokeProyecto/PokeMain'
import { PokeId } from '../PokeProyecto/PokeId'
import { PeliculaMain } from '../PeliculasPro/PeliculaMain'
import { PeliculaSeleccion } from '../PeliculasPro/PeliculaSeleccion'
import { Actores } from '../PeliculasPro/Actores'
import { SelectActor } from '../PeliculasPro/SelectActor'


export const Final = () => {

    return (
        <>

            <div className="row">

                <div className="col ">
                    <NavBar  ></NavBar>
                </div>

                <div className='col-10'>
                    <Routes>
                        <Route path='/crudSinLibreria' element={<CrudMain></CrudMain>}></Route>

                        <Route path='/pokeProyect' element={<PokeMain></PokeMain>}></Route>
                        <Route path='/pokeProyect/:id' element={<PokeId></PokeId>}></Route>
                        <Route path='/PeliMovie' element={<PeliculaMain></PeliculaMain>}></Route>
                        <Route path='/PeliMovie/:id' element={<PeliculaSeleccion></PeliculaSeleccion>}></Route>
                        <Route path='/PeliMovie/Actores' element={<Actores></Actores>}></Route>
                        <Route path='/PeliMovie/Actores/:actor' element={<SelectActor></SelectActor>}></Route>
                    </Routes>

                </div>
            </div>


        </>
    )
}


