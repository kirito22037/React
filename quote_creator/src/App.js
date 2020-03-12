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
    this.state={
      quotes : [{quote : "111 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
                  author: "unknown"},
                  {quote : "222 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
                  author: "unknown"},
                  {quote : "333 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
                  author: "unknown"}
                ]
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSubmit(quote , author)
    {
      if(quote.length > 0 && author.length > 0)
      {
      this.setState(
        {
          quotes : [...this.state.quotes , {quote : quote , author : author}]
        }
      )
    };
  };

  render()
  {
    return (
      <BrowserRouter>
      <div className="App">
      
      <Route exact path="/" render={(props) => <Home {...props} quotes={this.state.quotes}  /> } />
      <Route path="/create" render={(props) => <Create {...props} handleSubmit={this.handleSubmit} /> } />
  
  </div>
      </BrowserRouter>
    );
  }
};

export default App;
