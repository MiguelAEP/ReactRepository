import { Link, NavLink } from 'react-router-dom'
import style from '../styles/navBar.module.css'

export const NavBar = () => {

    const { navb } = style
    console.log(navb);
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">

                <div >
                    <Link to='/' className="navbar-brand " href='/'>Proyectos:</Link>

                    <div >
                        <ul className={navb}>

                            <li className="nav-item">
                                <NavLink to='/crudSinLibreria' className="nav-link active">crudSinLibreria</NavLink>
                            </li>


                            <li className="nav-item">
                                <NavLink to='/pokeProyect' className="nav-link">PokeProyect</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to='/PeliMovie' className="nav-link">PeliMovie</NavLink>
                            </li>



                        </ul>
                    </div>
                </div>


            </nav>
        </>
    )
}
