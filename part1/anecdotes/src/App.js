import "./App.css";
import React, { useState } from "react";
import ButtonRandomNumber from './ButtonRandomNumber';
import ButtonVote from './ButtonVote';

function App() {
  const anecdotes = [
    'Se fazer algo dói, faça isso com mais frequência.',
    'Contratar mão de obra para um projeto de software que já está atrasado, faz com que se atrase mais ainda!',
    'Os primeiros 90% do código correspondem aos primeiros 10% do tempo de desenvolvimento... Os outros 10% do código correspondem aos outros 90% do tempo de desenvolvimento.',
    'Qualquer tolo escreve código que um computador consegue entender. Bons programadores escrevem código que humanos conseguem entender.',
    'Otimização prematura é a raiz de todo o mal.',
    'Antes de mais nada, depurar é duas vezes mais difícil do que escrever o código. Portanto, se você escrever o código da forma mais inteligente possível, você, por definição, não é inteligente o suficiente para depurá-lo.',
    'Programar sem o uso extremamente intenso do console.log é o mesmo que um médico se recusar a usar raio-x ou testes sanguíneos ao diagnosticar pacientes.',
    'A única maneira de ir rápido é ir bem.'
  ];

  const pontos = [0, 0, 0, 0, 0, 0, 0, 0];
  const [copia, setCopia] = useState({...pontos});
  const [selected, setSelected] = useState(0);
  const [most, setMost] = useState(0);


  const handlePost = () => {
    const mostPoints = Math.max([...copia]);
    const mostIndex = copia.indexOf(mostPoints);
    setMost(mostIndex);
  }
  

  return (
    <div className="App">
      <div>
        {anecdotes[selected]}  
      </div>
      <div >
      O número de votos desta anedota é de:{copia[selected]}
      </div>
      <span>
        <ButtonVote selected={selected} setCopia={setCopia}/>
        <ButtonRandomNumber setSelected={setSelected}/>
      </span> 
      <div >
      {anecdotes[most]}
      <button onClick={handlePost}>Mostrar anedota com mais votos</button>

      </div>
    </div>
  );
}

export default App;

