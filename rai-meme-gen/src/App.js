import React from 'react';
import Heading from "./components/header";
import MainBody from "./components/mainbody";

class App extends React.Component{
  constructor()
  {
    super();
  };

  render()
  {
    return(
            <React.Fragment>
                <Heading/>
                <MainBody/>
            </React.Fragment>
            
    )
  };
}

export default App;
