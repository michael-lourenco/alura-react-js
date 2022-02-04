import React from 'react';
import ListaDeNotas from './components/ListaDeNotas';

function App() {
  return (
    <section>
      <form>
        <input type="text" placeholder='Título'/>
        <textarea cols="30" rows="10" placeholder='Escreva sua nota...'></textarea>
        <button>Criar Nota</button>
      </form>
      <ListaDeNotas />
    </section>
  );
}

export default App;
