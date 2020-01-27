import React from 'react';

class ListDis extends React.Component
{
    constructor(props)
    {
        super(props);

    };

    
    hoverEffect1(e) {
        e.target.style.background = 'black';
        e.target.style.color = 'white'
      }
    hoverEffect2(e) {
        e.target.style.background = '';
        e.target.style.color = ''
      }

    completedstyle={
        fontStyle : "italic",
        color : "grey",
        textDecoration : "line-through"
    };

    render()
    {
        console.log("element re-render")
        console.log("the list is : ",this.props.todolist)
            
        return(<ul style={{listStyle : "none" , padding : '0' }}>
                {
                    this.props.todolist.map(lis => {
                                                     if(lis.id!== 0)
                                                     {
                                                        return(<React.Fragment>
                                                                    <li key={lis.id}> 
                                                                            <div
                                                                            key={lis.id+'a'} 
                                                                            onMouseEnter={ this.hoverEffect1 } 
                                                                            onMouseLeave={ this.hoverEffect2 } 
                                                                            onClick={ () => this.props.handleclick(lis.id) } 
                                                                            style={ lis.status === true ? this.completedstyle : null }
                                                                            className="alert alert-secondary">
                                                                                {lis.data}  
                                                                            </div>

                                                                            <button 
                                                                            className="btn btn-secondary"
                                                                            key={lis.id+'b'}
                                                                            onClick={ () => this.props.handlecross(lis) }>
                                                                            {"\u00D7"}
                                                                            </button>                          
                                                                    
                                                                    </li>
                                                                
                                                                </React.Fragment>)
                                                     }
                                                    }
                                            )
                }
        </ul>)
                 
            
    }
};

export default ListDis;