import React from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';

class Card extends React.Component{
    constructor(props)
    {
        super(props);
    };

    componentDidMount()
    {
        console.log("--------------called once-----------------");
        console.log("check the props : ",this.props);
        fetch("https://type.fit/api/quotes")
            .then(res => res.json())
            .then(data => {
                console.log("the new data fetched  : ",data)
                console.log("the data size : ",data.length)

                //fetching data to redux store
                this.props.fetchData(data);
            
            })
            .catch(error => {
                console.log("error occured : ",error);
            })
    }

    handleClick = () =>{
        //call an action and dispatch it
        this.props.getQuote();
        //to change background color
        //document.getElementById("body").classList.add("back_color");

        //------------------------change the background color--------------------------
        //ids body , tweet_quote , fb-quote , new-quotes
        const colors= ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
        let activeColor = colors[Math.floor(Math.random() * colors.length)];
        $("#heading").css("color", "white");
        $("#body").css("backgroundColor" , activeColor);
        $("#tweet-quote").css("backgroundColor" , activeColor);
        $("#tweet-quote").css("border" , "none");
        $("#fb-quote").css("backgroundColor" , activeColor);
        $("#fb-quote").css("border" , "none");
        $("#fb-quote").css("color" , "white");
        $("#new-quotes").removeClass("btn-primary");
        $("#new-quotes").css("backgroundColor" , activeColor);
        $("#new-quotes").css("color" , "white");
    }

    handleTweet = (textV , authV) =>{
        console.log("-------------------tweet--------------------------");
        $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + textV + '" ' + authV));
    }

    render()
    {
        let textV = "Loading...";
        let authV = "Loading...";
        console.log("---------------------re render-------------------");
        console.log(this.props);
        console.log("in render ",this.props.quote);

        if(this.props.quote)
        {
            textV = this.props.quote.text;
            authV = this.props.quote.author;
        }
        
        return(
            <div className="d-flex justify-content-center" style={{}}>
            <div className="card" id="quote-box" style={{margin : "auto"}}>
            
            <div className="card-body ">
                <blockquote className="blockquote mb-3" >
                <p id="text">
                    <span className="fas fa-quote-left"></span>
                    { textV }
                    <span className="fas fa-quote-right"></span>
                </p>
                <footer className="blockquote-footer" id="author">
                    By :- <cite title="Source Title">
                        { authV }</cite>
                    </footer>
                </blockquote>
                

                    <a className="btn btn-secondary btn-lg float-left mr-2" 
                    id="tweet-quote"
                    onclick={ this.handleTweet(textV , authV) }><span className="fab fa-twitter"></span></a>
                    <a className="btn btn-secondary btn-lg" id="fb-quote"><span className="fab fa-facebook-f"></span></a>
                    <a className="btn btn-primary btn-lg float-right" 
                    id="new-quotes"
                    onClick={this.handleClick}>New quote</a>
            </div>

            </div>
            </div>
        );
    }
};

const mapStateToProps = (state) =>{
    return {
        quotes : state.quotes,
        quote : state.quote
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        fetchData : (quotes) => { 
            dispatch({type : "FETCH_DATA" , quotes : quotes})
        },
        getQuote : () => {
            dispatch({type : "GET_QUOTE" })
        } 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);