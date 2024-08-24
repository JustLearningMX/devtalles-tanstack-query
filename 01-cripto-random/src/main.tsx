import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import TanstackQueryClientProvider from "./context/TanstackQueryContext.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
      <TanstackQueryClientProvider>
        <App />
      </TanstackQueryClientProvider>
  // </React.StrictMode>,
)
