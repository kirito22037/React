import React from 'react';
import Button from './components/button';
import Input from './components/Input'
import './App.css';

class App extends React.Component {
  
  constructor(props)
  {
    super(props);
    this.state={
        equation : ""
    };
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(e)
  {
    //change to be made
    console.log(e.target.value);
    console.log("handle change");
    const val=e.target.value;
    if(val==='=')
    {
      this.setState({
        equation : eval(this.state.equation)
      })
    }
    else if(val==='C')
    {
      this.setState({
        equation : ""
      })
    }
    else if(val==="<=")
    {
      const length=this.state.equation.length;
      console.log("length",length);
      this.setState({
        equation : this.state.equation.substr(0,length-1)
      })
    }
    else{
      this.setState({
        equation : this.state.equation + e.target.value
      })
    }
    
    
  };

  render()
  {
    return (
      <div className="App">
  
        <div className="calc-cont">
  
        <div className="row">
        <Input equ = { this.state.equation }/>
        </div>
  
        <div className="row">
        <Button handleChange={ this.handleChange } width=" col" value="7" />
        <Button handleChange={ this.handleChange } width=" col" value="8"/>
        <Button handleChange={ this.handleChange } width=" col" value="9"/>
        <Button handleChange={ this.handleChange } width=" col" value="*"/>
        </div>
        
        <div className="row">
        <Button handleChange={ this.handleChange } width=" col" value="4"/>
        <Button handleChange={ this.handleChange } width=" col" value="5"/>
        <Button handleChange={ this.handleChange } width=" col" value="6"/>
        <Button handleChange={ this.handleChange } width=" col" value="/"/>
        </div>
        
        <div className="row">
        <Button handleChange={ this.handleChange } width=" col" value="1"/>
        <Button handleChange={ this.handleChange } width=" col" value="2"/>
        <Button handleChange={ this.handleChange } width=" col" value="3"/>
        <Button handleChange={ this.handleChange } width=" col" value="+"/>
        </div>
        
        <div className="row">
        <Button handleChange={ this.handleChange } width=" col" value="%"/>
        <Button handleChange={ this.handleChange } width=" col" value="0"/>
        <Button handleChange={ this.handleChange } width=" col" value="."/>
        <Button handleChange={ this.handleChange } width=" col" value="-"/>
        </div>
  
        <div className="row">
        <Button handleChange={ this.handleChange } width=" col-6" value="="/>
        <Button handleChange={ this.handleChange } width=" col-3" value="C"/>
        <Button handleChange={ this.handleChange } width=" col-3" value="<="/>
        
        </div>
        </div>
        </div>
            
    );
  }
  
};

export default App;
