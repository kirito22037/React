import React from 'react';

class Heading extends React.Component
{
    styleFont = {
        fontFamily : "Sans-serif",
        textAlign : "center"
    };

    render()
    {
        return(
            <React.Fragment>
                <h1 style={this.styleFont} className="mt-3 mb-3 d-flex justify-content-center">
                    Keep Calm 
                </h1>
            </React.Fragment>
        );
    }
};

export default Heading;