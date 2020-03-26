import React from 'react';
import './input_css.css';
import { connect } from 'react-redux';  //contains method like dispatch

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

    handleEnter=(e)=>{

        if(e.key === 'Enter')
        {
            const todo = e.target.value;
            console.log("the todo recieved : ",todo);
            this.props.insertTodo(todo);
            e.target.value = '';
        }
    }

    render()
    {
        console.log("list",this.state.todolist)
        console.log("find the store : ",this.props);

        return(
        <React.Fragment>
            
            
            <input className="form-control cssInp" 
            type="text" 
            onKeyDown={this.handleEnter}
            placeholder="next task"/>
            

        </React.Fragment>)
        
    }
};

const mapDispatchToProps = (dispatch)=>{
    return{
        insertTodo : (todo)=>{
            dispatch({type:'ADD_TODO', todo : todo});
        }
    }
}
export default connect(null , mapDispatchToProps)(InputEle);