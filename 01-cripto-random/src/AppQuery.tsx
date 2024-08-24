import './App.css'
import {useEffect, useState} from "react";
import {useQuery} from "@tanstack/react-query";

const getCryptoNumber = async(): Promise<number> => {
    const response = await fetch('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new');
    const data = await response.json();
    return Number(data);
}

function App() {

    const {
        data: number,
        error,
        isLoading,
        refetch
    } = useQuery({
        queryKey: ['randomNumber'],
        queryFn: getCryptoNumber
    })

  return (<>
      {
            isLoading ? <p>Cargando...</p> : <p>{ number }</p>
      }
      <div>{ JSON.stringify( error ) }</div>
      <button
          disabled={isLoading}
          onClick={ () => refetch()}
      >
          Nuevo número
      </button>
  </>)
}

export default App
