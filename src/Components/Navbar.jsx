import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from "../Routes/routes";
import { useContextGlobal } from './utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {state, dispatch} = useContextGlobal();

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <nav className={`navbar`}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <div>
        <Link to={routes.home}><h4>Home</h4></Link>
        <Link to={routes.contact}><h4>Contact</h4></Link>
        <Link to={routes.favs}><h4>Favs</h4></Link>
        </div>
        <button onClick={toggleTheme} className='themeButton'><i class="fas fa-moon"></i></button>
    </nav>
  )
}

export default Navbar