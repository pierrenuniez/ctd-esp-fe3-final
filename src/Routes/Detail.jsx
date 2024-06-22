import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [details, setDetails] = useState({});
  const params = useParams();
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`;

  useEffect(() => {
    axios(url).then((res) => setDetails(res.data));
  }, []);
  
  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Website</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{details.name}</td>
      <td>{details.email}</td>
      <td>{details.phone}</td>
      <td>{details.website}</td>
    </tr>
  </tbody>
</table>
    </>
  )
}

export default Detail