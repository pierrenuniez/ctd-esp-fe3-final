import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";

const Card = ({ name, username, id }) => {

  const {dispatch} = useContextGlobal()
  const newFav = { name, username, id };

  // const addFav = ()=>{
  //   // Aqui iria la logica para agregar la Card en el localStorage

  //   const existingFavs = JSON.parse(localStorage.getItem("favs")) || [];
  //   const newFavs = [...existingFavs, {name, username, id}];
  //   localStorage.setItem("favs", JSON.stringify(newFavs));
  // };

  // const addFav = () => {
  //   const newFav = { name, username, id };
  //   if (!fav.some(favItem => favItem.id === id)) {
  //     setFav(prevFavs => [...prevFavs, newFav]);
  //   } else {
  //     console.log('El ítem ya está en favoritos');
  //   }
  // };

  return (
    <div className="card">
      <img src="/images/doctor.jpg" alt="doctor"/>
      <Link to={"/dentist/" + id} className="link">
        {/* En cada card deberan mostrar en name - username y el id */}
        <h4>{name}</h4>
        </Link>
        <p>{username}</p>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={() => dispatch({type: 'ADD_FAV', payload: newFav})} className="favButton"><i class="fas fa-star"></i></button>
    </div>
  );
};

export default Card;
