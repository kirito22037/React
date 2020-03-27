import React from 'react';
import './App.css';

//import AddNew from './components/add_new';
import Home from './components/home';
//import Card from './components/card';
import Create from './components/input';

import {BrowserRouter , Route} from 'react-router-dom';

class App extends React.Component {

  constructor(props)
  {
    super(props);
   
  };

   
  render()
  {
    return (
      <BrowserRouter>
      <div className="App">
      
      <Route exact path="/" render={(props) => <Home {...props} /> } />
      <Route path="/create" render={(props) => <Create {...props}  /> } />
  
  </div>
      </BrowserRouter>
    );
  }
};

export default App;
