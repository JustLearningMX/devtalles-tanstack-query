import './App.css'
import {useRandom} from "./hooks/UseRandom.tsx";

function App() {

    const { randomQuery } = useRandom();

  return (<>
      {
          randomQuery.isLoading ? <p>Cargando...</p> : <p>{ randomQuery.data }</p>
      }
      <div>{ JSON.stringify( randomQuery.error ) }</div>
      <button
          disabled={randomQuery.isLoading}
          onClick={ () => randomQuery.refetch()}
      >
          Nuevo número
      </button>
  </>)
}

export default App
