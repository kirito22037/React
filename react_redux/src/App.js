import React from 'react';
import NavBar from './components/NavBar';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/Post';

import {BrowserRouter , Route} from 'react-router-dom';

class App extends React.Component {
  //console.log('app_props  : ',this.props);

  render()
  {
    console.log('app_props  : ',this.props);
    return (  
      <BrowserRouter>
            <div>
              <NavBar/>

              <div className='container'>
              <Route exact path="/" component={Home} />
              </div>
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/:post_id" component={Post} />

            </div>
      </BrowserRouter>
      );
  };
 
}

export default App;
