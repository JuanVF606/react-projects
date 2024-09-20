import React, { useState } from 'react';
import './App.css';

function App() {
  // Definir el estado inicial del contador
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>React Counter</h1>
      
      {/* Mostrar el valor actual del contador */}
      <h2>{count}</h2>

      {/* Botones para incrementar, decrementar y resetear el contador */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default App;
