import React, {useEffect, useState} from 'react';
import axios from 'axios';

function Frase({frase}) {
  return (
    <div className="frase">
      <h1>{frase.quote}</h1>
      <p>-{frase.author} </p>
    </div>
  )
}


function App(){

  const [frase, obtenerFrase] = useState({});

  const consultarAPI = async () => {
    const resultado = await axios('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    obtenerFrase(resultado.data[0]);
  }

  //siempre que se consulte una api se lo debe hacer en un useeffect
  useEffect(
    () => {
      consultarAPI()
    }, []
  )

  return (
    <div className="contenedor"> 
        <Frase
          frase = {frase}
        />
        <button onClick={consultarAPI}>Generar una Nueva</button>
    </div>
  )
  
}

export default App;
