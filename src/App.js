import React, { useState } from 'react';
import './App.css';

function App() {
  const [elemento, setelemento] = useState([]);

  const colorrandom = () => {
    const colors = ['#0000FF', '#FFC0CB']; 
    const randomIndex = Math.floor(Math.random() * colors.length); 
    return colors[randomIndex];
  };

  const Agregarelemento = () => {
    const newElement = {
      id: Date.now(),
      color: colorrandom(),
    };
    setelemento([...elemento, newElement]);
  };

  const eliminarelemento = (id) => {
    setelemento(elemento.filter((element) => element.id !== id));
  };

  const handleClearelemento = () => {
    setelemento([]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>David Franco Juarez</h2>
        <button onClick={Agregarelemento} style={{ marginBottom: '10px' }}>Agregar Elemento</button>

        <button onClick={handleClearelemento}>Vaciar Elementos</button>
        
        <div style={{ marginTop: '20px' }}>
          {elemento.map((element) => (
            <div
              key={element.id}
              style={{
                backgroundColor: element.color,
                padding: '10px',
                margin: '5px',
                borderRadius: '5px',
                display: 'inline-block',
                cursor: 'pointer',
              }}
              onClick={() => eliminarelemento(element.id)}
            >
              <span style={{ color: '#fff' }}>Elemento {element.id}</span>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;