import React from 'react'

const Categorias = () => {
    const [categorias, setCategorias] = React.useState([]);

  function adicionarCategoria(nomeCategoria){
    setCategorias([...categorias , nomeCategoria])
  }

}

export default Categorias
