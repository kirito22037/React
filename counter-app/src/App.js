import React ,{Component} from 'react';
import NavBar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.css';
import Counters from './components/Counters';
import './App.css';

class App extends Component
{
  state={
    counters : [
        { id:1 , value : 4},
        { id:2 , value : 0},
        { id:3 , value : 0},
        { id:4 , value : 0}
    ]
};

//--------------------not understood--------------------------------

handleIncrement = counter =>{
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    console.log(index);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
};

handleReset = () => {
    const counters = this.state.counters.map( c => {
                                                    c.value= 0;
                                                    console.log(c.id,c.value);
                                                    return c;
                                                });
    this.setState({ counters : counters })
};

handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters : counters});
    //console.log("delete event handler",counterId);
};

  
  render()
  {
    return (
      <React.Fragment>
      <NavBar totalCounters = {this.state.counters.filter(c => c.value >0).length } />
      <main className="container">
        <Counters 
        counters = { this.state.counters }
        onReset = { this.handleReset }
        onIncrement = {this.handleIncrement}
        onDelete = {this.handleDelete}
         />
      </main>
      </React.Fragment>
    );
  }
}


export default App;
