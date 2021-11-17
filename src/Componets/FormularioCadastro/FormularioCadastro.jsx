import React from "react";
import "./estilo.css";

const FormularioCadastro = ({ criarNota, categorias }) => {
  let titulo = "";
  let texto = "";
  let categoria = "Sem categoria"

  function handleMudancaTitulo(e) {
    e.stopPropagation();
    titulo = e.target.value;
  }

  function handleMudancaTexto(e) {
    e.stopPropagation();
    texto = e.target.value;
  }

  function submeterNota(e) {
    e.preventDefault();
    e.stopPropagation();
    criarNota(titulo, texto, categoria);
  }

  function handleMudancaCategoria(e){
    e.stopPropagation();
    categoria = e.target.value

  }

  return (
    <form className="form-cadastro " onSubmit={submeterNota}>
      <select className="form-cadastro_input" onChange={handleMudancaCategoria}>
        <option >Sem categoria</option>
        {categorias.map((categoria, i) => (
          <option key={i}>
            {categoria}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Título"
        className="form-cadastro_input"
        onChange={handleMudancaTitulo}
      />
      <textarea
        rows={15}
        placeholder="Escreva sua nota..."
        className="form-cadastro_input"
        onChange={handleMudancaTexto}
      />
      <button className="form-cadastro_input form-cadastro_submit">
        Criar Nota
      </button>
    </form>
  );
};

export default FormularioCadastro;
