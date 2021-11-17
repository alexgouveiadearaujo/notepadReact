import React from "react";
import ListaDeNotas from "./Componets/ListaDeNotas/";
import FormularioCadastro from "./Componets/FormularioCadastro";
import "./Componets/assets/App.css";
import "./Componets/assets/index.css";
import ListaDeCategorias from "./Componets/ListaDeCategorias";

function App() {
  const [notas, setNotas] = React.useState([]);

  function criarNota(titulo, texto, categoria) {
    let novaNota = { titulo, texto, categoria };
    setNotas([...notas, novaNota]);
  }

  function deletarNota(i) {
    notas.splice(i, 1);
    setNotas([...notas]);
  }

  const [categorias, setCategorias] = React.useState([]);

  function adicionarCategoria(nomeCategoria){
    setCategorias([...categorias , nomeCategoria])
  }

  return (
    <section className="conteudo">
      <FormularioCadastro criarNota={criarNota} categorias={categorias}/>
      <main className="conteudo-principal">
        <ListaDeCategorias
          categorias={categorias}
          adicionarCategoria={adicionarCategoria}
        />
        <ListaDeNotas notas={notas} apagarNota={deletarNota} />
      </main>
    </section>
  );
}

export default App;

/*  function criarNota(titulo, texto){
    let novaNota = [{titulo , texto}]

    setNotas( novaNota)
    console.log(`${titulo} | ${texto}`)
  }


*/

/*
só cria quadrados
  let novaNota = [{titulo , texto}]
    notas.push(novaNota)
    setNotas(
      [...notas , novaNota]
*/
