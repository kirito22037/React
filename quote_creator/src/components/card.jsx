import React from 'react';
import './card.css';
import 'font-awesome/css/font-awesome.min.css';

class Card extends React.Component{
constructor(props)
{
    super(props);
};

render()
{
    
    return(
        
            <div className="card text-white bg-success " id="home-card">
            <div className="card-header">
            Quote
            </div>
            <div className="card-body">

            <blockquote className="blockquote">
                    <p>
                    <span className="fas fa-quote-left mr-2"></span>
                    {this.props.quote.quote}
                    <span className="fas fa-quote-right ml-2"></span>
                    </p>
                    
                    <footer 
                    className="blockquote-footer">
                        Someone famous in 
                        <cite title="Source Title">
                        {this.props.quote.author}
                        </cite>
                    </footer>
            </blockquote>

            </div>
            </div>
        
    )
}
};

export default Card;