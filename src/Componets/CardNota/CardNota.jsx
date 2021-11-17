import React from "react";
import "./estilo.css";
import { ReactComponent as DeleteSVG } from "../assets/img/delete.svg";

const CardNota = ({ titulo, texto, apagarNota, indice , categoria }) => {

  return (
    <section className="card-nota">
      <header className="card-nota_cabecalho">
        <h3 className="card-nota_categoria">Categoria: {categoria}</h3>
        <h3 className="card-nota_titulo">Titulo: {titulo}</h3>
        <DeleteSVG onClick={()=>apagarNota(indice)} className="card-nota_svg" />
      </header>
      <p className="card-nota_texto">Texto: {texto}</p>
    </section>
  );
};

export default CardNota;
