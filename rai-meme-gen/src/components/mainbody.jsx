import React from 'react';

class MainBody extends React.Component{
    
    constructor()
    {
        super()
        {
            this.state={
                uppertext : "",
                lowertext : "",
                randomimage : "http://i.imgflip.com/1bij.jpg",
                dataset : [],
                fl : true
            };
        }
        this.handlesubmit=this.handlesubmit.bind(this);
    }
    
    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then( response => response.json() )     // convert the file into json 
            .then( response => {
                let alldata = response.data.memes;   // a list containing all the memes 
                console.log("dataset",alldata);
                this.setState({
                    dataset : alldata
                });
            })
            .catch( err =>{
                console.log("cant load from api ",err.message);
                this.setState(prevState =>{ 
                    return({
                        fl : !prevState.fl
                    })
                })
            })
    }

    handlechange = (event) =>{
        console.log("change");
        let value = event.target.value;
        let {name} = event.target;
    
        this.setState(
            {
                [name] : value
            }
        )
    }

    handlesubmit(event)
    {
        //event.preventDefault()
        console.log("submit clicked");
        console.log("flag : ",this.state.fl);
        if(this.state.fl === true)
        {
            const randNum = Math.floor(Math.random() * this.state.dataset.length)
            const randMemeImg = this.state.dataset[randNum].url
            this.setState({ randomimage: randMemeImg })
        }
        else
        {
            console.log("the dataset of meme is empty !!");
        }
        
    }

    
    // onSubmit not working of form element
    render()
    {
        return(
            <React.Fragment>
                    <form onSubmit={ ()=>{console.log("subitted form")} }>  
                        <input 
                        name="uppertext" 
                        className="form-control" 
                        type="text" 
                        placeholder="upper text"
                        onChange={ this.handlechange }>
                        </input>
                        <input 
                        name="lowertext" 
                        className="form-control" 
                        type="text" 
                        placeholder="upper text"
                        onChange={ this.handlechange }>
                        </input>

                        <button 
                        type="button" 
                        className="btn btn-primary btn-block"
                        onClick={ this.handlesubmit }>
                        Create
                        </button>
                    </form>
                        

                    <div className = "memesection">
                        <h2>{ this.state.uppertext }</h2>
                        <h2>{ this.state.lowertext }</h2>
                        {this.state.fl ? <img src={this.state.randomimage} alt="can't load try using vpn"/> : <h1>can,t fetch data!!</h1>}
                        
                    </div>
                    
            </React.Fragment>
            
        )
    }
};

export default MainBody;