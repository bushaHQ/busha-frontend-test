import { useState } from "react";
import Layout from "./components/Layout";
import Network from "./components/Network"

function App() {
  const [error, setError] = useState('')

  const handleError = () => setError('Network Error')
  const clearError = () => setError('')
  
  return (
    <Network handleOffline={handleError} handleOnline={clearError}>
      <Layout catchError={error} />
    </Network>
  );
}

export default App;
