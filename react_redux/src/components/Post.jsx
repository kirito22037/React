import React from 'react'
import { connect } from 'react-redux';
import { dispatch } from 'react-redux';

class Post extends React.Component
{
    constructor(props)
    {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    };

    handleClick()
    {
        console.log('delete button pressed!');
        console.log(this.props);
        //calling the property of mapDispatchToProps from props 
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');  //return the default home page
    };

    render()
    {
        console.log('props of Post : ',this.props);
        let post = this.props.post ? (<div><h1>{this.props.post.title}</h1>
            <p>{this.props.post.body}</p>
            <button 
            type="button" 
            className="btn btn-primary btn-lg"
            onClick={this.handleClick}
            >Delete Post</button>
            </div>)  :
        ( <div>its null for now </div>) ;
        

        return(
            <div className='container'>
                
            {post}
            
         
            </div>
        );
    }
};

//ownProps is the props send by the Route 
//ownProps are the props before props get updated by the state of store
//this function bring the specific post from the store to the props of this component as 'post'
const mapStateToProps = (state , ownProps) => {
    let id = ownProps.match.params.post_id;
    console.log('state from store to Post : ',state);
    console.log('id to search : ',id);
    //console.log('',state.posts[0].id);
    //console.log('compare : ',state.posts[0].id == id);
    //console.log('posts on which find : ',state.posts);
    return {
        post : state.posts.find(post => 
        post.id == id)
    }
};

//send a Dispatch i.e an action to the store
//and make changes to the store state 
const mapDispatchToProps = (dispatch) =>{
return {
    deletePost : (id) => {
        //this will send this action to the store reducer
        console.log('id recieved to delete : ',id);
        dispatch({
            type : 'DELETE_POST',
            id : id
        })
    }
}
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);