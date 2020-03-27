import React from 'react';
import Card from './card';
import { connect } from 'react-redux';

class Carousel extends React.Component{
    constructor(props)
    {
        super(props);
    };

    render()
    {
        console.log("props of carosole : ",this.props);
        
        function generateColor()
        {
            var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
            document.getElementById("home-card").style.backgroundColor = hue;
            console.log("color generate : ",hue);
        }

        return(
                <React.Fragment>
                    <div id="carouselExampleControls" 
                    className="carousel slide" 
                    style={{height : "100%" }}
                    data-ride="carousel">
                            
                            <div className="carousel-inner"
                            style={{height : "100%" }} >
                            
                                {
                                    this.props.quotes.map( (i,index) =>{
                                            if(index === 0)
                                            {
                                                return(
                                                    <div 
                                                    className="carousel-item active"
                                                    key={index+1}>
                                                    <Card quote={i} />
                                                    </div>
                                                )
                                            }
                                            else
                                            {
                                                return(
                                                    <div 
                                                    className="carousel-item"
                                                    key={index+1}>
                                                    <Card quote={i}/>
                                                    </div>
                                                );
                                        
                                            }
                                    })
                                        
                        
                                }
                            
                            </div>

                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>

                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>

                    </div>
                </React.Fragment>
            )
    }
};

const mapStateToProps=(state)=>{
    return{
        quotes : state.quotes
    }
};


export default connect(mapStateToProps)(Carousel);