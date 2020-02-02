import React from 'react';

class Heading extends React.Component{
    render()
    {
        const iconsize={
            width : "50px",            
            display : "inline-block",
            float : "left",
            marginRight : "5%"
        }
        return(
            <div className="alert alert-secondary" role="alert">
                <img
                style={ iconsize }
                src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" 
                alt="Problem?"
                />
                <h1>Meme Generator</h1>
          </div>
        )
    };
};

export default Heading;