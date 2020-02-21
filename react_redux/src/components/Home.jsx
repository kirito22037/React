import React from 'react'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';    //connect this component to the store


class Home extends React.Component
{
    constructor(props)
    {
        super(props);
    };
    
    render()
    {
        console.log('props of home : ',this.props);
        //console.log('length : ',this.state.list)
        const lis_ui_data=this.props.posts.length ? (this.props.posts.map(post => {
            return(
            <div key={post.id} className="card mt-3 mb-3">
            <Link to={'/'+post.id}>
            <div className="card-header">
              {post.title}
            </div>
            </Link>
            
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <p>{post.body}</p>
                <footer className="blockquote-footer">By:- <cite title="Source Title">{post.userId}</cite></footer>
              </blockquote>
            </div>
          </div>
            );
                                                                        }
                                                            )
                                                ) 
        :
        (<div>No POst To Load</div>);

        return(
                <div>
                    <div className="alert alert-success" role="alert">
                     Home
                     </div>
                     { lis_ui_data }
                     
                </div>
        );
    }
  };
  
  //this bring the posts from state of store to props of this component
  //only specific properties from the state of the store 
  const mapStateToProps = (state) => {
    return {
      posts : state.posts
    }
  };



export default connect(mapStateToProps)(Home);