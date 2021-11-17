import React from "react";
import CardNota from "../CardNota";
import "./estilo.css";

const ListaDeNotas = ({ notas, apagarNota }) => {
  return (
    <ul className="lista-notas">
      {notas.map((nota, i) => {
        return (
          <li className="lista-notas_item" key={i}>
            <CardNota
              titulo={nota.titulo}
              texto={nota.texto}
              apagarNota={apagarNota}
              indice={i}
              categoria={nota.categoria}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ListaDeNotas;

/*
import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";

class ListaDeNotas extends Component {
  render() {
    return (
      <ul>
        {Array.of("Trabalho", "Trabalho", "Estudos").map((categoria) => {
          return (
            <li>
              <div>{categoria}</div>
              <CardNota />
            </li>
          );
        })}
      </ul>
    );
  }
}

*/
