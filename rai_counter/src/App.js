import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/header';
import Card from './components/card';

function App() {
  return (
    <React.Fragment>
    <Header/>
    <div className="App" className="card-deck">
            <Card status="card text-white bg-primary mb-3 w-50 p-3 " heading="Challenger"/>
            <Card status="card text-white bg-danger mb-3 w-50 p-3 " heading="Champion"/>
    </div>
    </React.Fragment>
  );
}

export default App;
