import React from 'react';

class ListDis extends React.Component
{
    constructor(props)
    {
        super(props);

    };


    render()
    {
        console.log("element re-render")
            
        return(<ul style={{listStyle : "none" , padding : '0' }}>
            {
            this.props.stateobj.map(lis =>{
                return(<li className="alert alert-secondary">{lis}</li>)
            })
            }
        </ul>)
                 
            
    }
};

export default ListDis;