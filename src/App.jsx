import React from "react";
import { useState } from 'react';
import Formulario from "./form";


function App() {
  const [respuestas, setRespuestas] =useState([]);

  const agregarRespuestas = (presupuesto, ventaiva, cumplimiento, lfl, liquidacion, ajustes, totalquiebra, bazar, fruver) => {
    setRespuestas([...respuestas, {presupuesto, ventaiva, cumplimiento, lfl, liquidacion, ajustes, totalquiebra, bazar, fruver}]);
  };

  return (
    <div>
      <h1>Formulario de registro</h1>
      <Formulario onEnviar={agregarRespuestas} />
      <h2>Respuestas:</h2>
      <ul>
        {respuestas.map((respuesta, index) => (
          <li key={index}>
            Presupuesto: {respuesta.presupuesto}, Ventaiva: {respuesta.ventaiva}, Cumplimiento: {respuesta.cumplimiento}, Lfl: {respuesta.lfl}, Liquidacion: {respuesta.liquidacion}, Ajustes: {respuesta.ajustes}, Total Quiebra: {respuesta.totalquiebra}, Bazar: {respuesta.bazar}, Fruver: {respuesta.fruver}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
