import React from 'react';
import ListDis from './list_dis';

class InputEle extends React.Component
{
    constructor(props)
    {
        super(props)
        {
            this.state={
                todolist : []
            }
        }
    };

    handleEnter = (event) => {
        if(event.key === 'Enter')
        {
            console.log("enter pressed");
            
            let task=event.target.value;                  //if taken inside the function throws error
            this.setState((prevState,eventx) => {
                //let task = eventx.target.value;   
                console.log("value : ",task)
                let listobj=prevState.todolist;
                listobj.push(task);
                return({todolist : listobj})
            })
        }
    };



    render()
    {
        console.log("list",this.state.todolist)

        return(
        <React.Fragment>
            
            <input className="form-control" type="text" onKeyDown={this.handleEnter} placeholder="next task"/>
            
            <ListDis stateobj={this.state.todolist}/>
            
        </React.Fragment>)
        
    }
};

export default InputEle;