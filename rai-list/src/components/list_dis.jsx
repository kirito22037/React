import React from 'react';
import './list_css.css';
import { connect } from 'react-redux';

class ListDis extends React.Component
{
    constructor(props)
    {
        super(props);

    };

    
    hoverEffect1(e) {
        e.target.style.background = "rgba(0,0,0,0.4)";
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
        console.log("element list_display re-render");
        console.log("the props is : ",this.props);
            
        return(<ul style={{listStyle : "none" , padding : '0' }}>
                {
                    this.props.todolist.map(lis => {
                                                     if(lis.id!== 0)
                                                     {
                                                        return(<React.Fragment key={lis.id+'kk'}>
                                                                    <li className="lisDiv" key={lis.id}> 
                                                                            <div
                                                                            key={lis.id+'a'} 
                                                                            onMouseEnter={ this.hoverEffect1 } 
                                                                            onMouseLeave={ this.hoverEffect2 } 
                                                                            onClick={ () => this.props.handleclick(lis.id) } 
                                                                            style={ lis.status === true ? this.completedstyle : null }
                                                                            className="alert alert-secondary lisCss">
                                                                                <p>{lis.data}</p>  
                                                                            </div>

                                                                            <button 
                                                                            key={lis.id+'b'}
                                                                            className="btn btn-secondary btnCss"
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

const mapStateToProps = (state ,ownProp)=>{
    return{
        todolist : state.todolist
}};

const mapDispatchToProps = (dispatch)=>{
    return{
        handleclick : (id)=>{
            dispatch({type:"DONE_TODO" , id : id})
        },
        handlecross : (lis)=>{
            dispatch({type:"DELETE_TODO" , lis : lis})
        }
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(ListDis);