import React from 'react';
import './input.css';
//import { Link , Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Create extends React.Component
{
    constructor(props)
    {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e)
    {
        e.preventDefault();
        console.log("form is submitted");
        //update the state 
        let x = document.getElementById("quote_cont").value;
        let y = document.getElementById("auth_cont").value;
        console.log("text : ",x);
        console.log("auth : ",y);
        //this.props.handleSubmit(x,y);
        this.props.newQuote({quote: x, author: y});
        //<Redirect exact to="/" />
        console.log("redirecting to the home page");
        this.props.history.push('/');
    }

    render()
    {
        console.log("input form called");
        return(
            <React.Fragment>
                <div className="card pl-3 pr-3">
                    
                    <h4 className="card-title text-center mt-3 mb-3">write whats in your mind</h4>

                    <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                    <label >Quote here :</label>
                    <textarea 
                    className="form-control" 
                    id="quote_cont"
                    name = "quote" 
                    rows="3"
                    placeholder="write your beautiful quote"
                    required/>

                    <label >Author :</label>
                    <textarea 
                    className="form-control" 
                    id="auth_cont"
                    name= "auth" 
                    rows="3"
                    placeholder="author's name"
                    required/>
                    </div>
                    
                    <button type="submit" 
                    className="btn btn-primary btn-sm btn-block"
                    >Create Quote</button>
        </form>
                  
                </div>
            </React.Fragment>
        )
    }    
};

const mapDispatchToProps = (dispatch)=>{
    return{
        newQuote : (quote)=>{
            dispatch({type : "NEW_QUOTES" , quote:quote});
        }    
}};

export default connect(null , mapDispatchToProps)(Create);