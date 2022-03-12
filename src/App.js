import React from 'react';
// import logo from './logo.svg';
import Main from './Components/Main';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
