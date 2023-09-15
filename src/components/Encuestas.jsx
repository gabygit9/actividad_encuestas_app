import React from "react";
function Encuestas({ encuestas }) {
  return (
    <div>
      <h2>Encuestas Disponibles</h2>
      {encuestas.map((encuesta) => (
        <div key={encuesta.id}>
          <h3>{encuesta.pregunta}</h3>
          <ul>
            {encuesta.opciones.map((opcion, index) => (
              <li key={index}>{opcion}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
export default Encuestas;

