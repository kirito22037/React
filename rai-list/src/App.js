import React from 'react';
import InputEle from './components/input_ele';
import ListDis from './components/list_dis';

class App extends React.Component
{
  
  render()
  {
    //updatetodo={ this.handleEnter }
    /*
    todolist={ this.state.todolist } 
               handleclick={ this.handleclick } 
               handlecross={ this.handlecross }
    */
    return (
      <div >
               <InputEle />
               <ListDis />           
      </div>
    )
  };
    
}

export default App;
