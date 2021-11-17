import React from "react";
import "./estilo.css";

const ListaDeCategorias = ({ categorias, adicionarCategoria }) => {
  function hadleEventoInput(e) {
    if (e.key === "Enter") {
      adicionarCategoria(e.target.value);
    }
  }
  function hadleEventoButton() {
    const {value} = document.querySelector('.lista-categorias_input')
    adicionarCategoria(value);
  }

  return (
    <section className="lista-categorias">
      <ul className="lista-categorias_lista">
        {categorias.map((categoria, i) => {
          return (
            <li key={i} className="lista-categorias_item">
              {categoria}
            </li>
          );
        })}
      </ul>
      <input
        type="text"
        name=""
        id=""
        className="lista-categorias_input"
        placeholder="adicionar categoria"
        onKeyUp={hadleEventoInput}
      />

      <button onClick={hadleEventoButton}>Enviar</button>
    </section>
  );
};

export default ListaDeCategorias;
