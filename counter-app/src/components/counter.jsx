import React, { Component } from 'react';

class Counter extends Component   
{
    
    getBadgeClassess()
    {
        let classess = "badge m-2 badge-"; 
        if(this.props.counter.value === 0)
        {
            classess+="warning";
        }
        else
        {
            classess+="primary";
        }
        return classess;
    };


    formatCount()
    {
        //this is destructuring
        const { value } = this.props.counter;          //destructuring short hand    count=this.state.count
        console.log(this.props.counter.value);
        return value === 0 ? "Zero" : value ;
    }

    render()
    {
        return (
            <div> 
                <span className={ this.getBadgeClassess() }> { this.formatCount() } </span>                  
                <button 
                    onClick={ ()=> this.props.onIncrement(this.props.counter) }
                    className="btn btn-secondary btn-sm">
                    Increment
                </button>
                <button 
                    onClick={ () => this.props.onDelete(this.props.counter.id) }
                    className="btn btn-danger btn-sm m-2">
                    Delete
                </button>
            </div>
        );
    }
    //{ this.renderTags() }
    
}

export default Counter;   //exporting the class as a module 

