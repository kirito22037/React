import React from 'react';
import './App.css';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import  Provider  from './Context';

import Navbar from  './components/layouts/Navbar';
import Index from './components/layouts/Index';
import Lyrics from './components/layouts/Lyrics';


function App() {
  return (
    <Provider>
    <Router>
    <React.Fragment>
        <Navbar/>      

        <div className="container">
        <Switch>
          <Route exact path='/' component={ Index }></Route>
          <Route path='/lyrics/track/:id' component={ Lyrics }></Route>
        </Switch>
        </div>

    </React.Fragment>
    </Router>
    </Provider>
  );
}

export default App;
