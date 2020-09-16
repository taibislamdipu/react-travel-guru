import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import TestContainer from './components/TestContainer/TestContainer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">

      <Header></Header>
      <Home></Home>


    </div>
  );
}

export default App;
