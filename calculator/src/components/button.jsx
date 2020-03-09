import React from 'react'
import './Button.css';

class Button extends React.Component{
    constructor(props)
    {
        super(props);
    };

    render()
    {
        let color = "btn-secondary";
        if(this.props.value === "+" || this.props.value === "-" || this.props.value === "*" ||  this.props.value === "=" || this.props.value === "/" )
        {
            color = "btn-warning";
            console.log("found");
        }
        return(
            <React.Fragment>
                <button type="button" 
                className={"btn "+color+ this.props.width}
                onClick={ this.props.handleChange } 
                value={ this.props.value }>
                { this.props.value }
                </button>
            </React.Fragment>
        )
    }
};

export default Button;