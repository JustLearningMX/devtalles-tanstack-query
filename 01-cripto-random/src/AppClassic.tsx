import './App.css'
import {useEffect, useState} from "react";

function App() {

    const [number, setNumber] = useState(0);
    const [loading, setLoading] = useState(true);
    const [refreshToken, setRefreshToken] = useState(0);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new')
            .then(res => res.text())
            .then(data => setNumber(data) )
            .catch(err => setError(err))
            .finally(() => setLoading(false));

    }, [refreshToken]);

  return (<>
      {
            loading ? <p>Cargando...</p> : <p>{number}</p>
      }
      <div>{ error }</div>
      <button
          disabled={loading}
          onClick={ () => setRefreshToken(refreshToken + 1)}
      >
          Nuevo número
      </button>
  </>)
}

export default App
