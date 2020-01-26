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
        console.log("the list is : ",this.props.todolist)
            
        return(<ul style={{listStyle : "none" , padding : '0' }}>
            {
            this.props.todolist.map(lis =>{
                if(lis.id!= 0)
                return(<li key={lis.id} className="alert alert-secondary">{lis.data}</li>)
            })
            }
        </ul>)
                 
            
    }
};

export default ListDis;