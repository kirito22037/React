import React from 'react';
//import ListDis from './list_dis';

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


    render()
    {
        console.log("list",this.state.todolist)

        return(
        <React.Fragment>
            
            <input className="form-control" type="text" onKeyDown={ this.props.updatetodo } placeholder="next task"/>
            
            
            
        </React.Fragment>)
        
    }
};

export default InputEle;