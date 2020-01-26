import React from 'react';
import InputEle from './components/input_ele';
//import ListDis from './components/list_dis';

class App extends React.Component
{
  constructor()
  {
      super()
      {
          this.state={
              todolist : []
          }
      }
  };

  render()
  {
    return (
      <div >
        
        <InputEle xtodolist={this.state.todolist}/>
      </div>
    )
  };
    
}

export default App;
