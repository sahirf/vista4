import React from 'react';
import Background1 from './componentes/background1';
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import "./App.css"

const App = () => {
  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <div style={{ position: 'relative', zIndex: 0 }}>
        <Background1 />
      </div>
      <div style={{ position: 'absolute', top: 50, left: 0, width: '100%', zIndex: 2 }}>
        <Header />
      </div>
      <div style={{ position: 'absolute', top: 200, left: 0, width: '100%' }}>
        <Footer />
      </div>
      <div className="findbutton" style={{position: 'absolute', top: 240, left: 1150 }}>
        <button id="custom-button" className="button1" type="button">
          Find
        </button>
      </div>
    </div>
  );
};

export default App;