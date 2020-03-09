import React from 'react'
import './input.css';

class Input extends React.Component{
    constructor(props)
    {
        super(props);
    };

    render()
    {
        return(
            <React.Fragment>
                <input className="inp col" 
                value={ this.props.equ}
                placeholder="0">
                </input>
            </React.Fragment>
        )
    }
};

export default Input;