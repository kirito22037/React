import React ,{Component} from 'react';

class Card extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            count : 0,
        };
        this.increment= this.increment.bind(this);    //binding
    }

    /*stat(props){
        if(this.props.stat=='challenger')
        {
            return "card text-white bg-primary mb-3";
        }
        else
        {
            return "card text-white bg-danger mb-3";
        }
    };*/
    increment(){
        //console.log("clicked");
        //this.setState({count : this.state.count+1});
        this.setState(prevState => {
            return(
                {count : prevState.count + 1}
            )
        });
    }

    render()
    {
        //console.log('fun',this.stat);
        //console.log('output',this.props.status);
        return(
            <div className={ this.props.status } style={{maxWidth : '18rem',}}>
            <div className="card-header">{this.props.heading}</div>
            <div className="card-body">
            <div className="card-text">{ this.state.count }</div>
            </div>
            <button type="button" className="btn btn-secondary btn-sm" onClick={this.increment}>Count</button>
          </div>
        );
    };
}

export default Card;