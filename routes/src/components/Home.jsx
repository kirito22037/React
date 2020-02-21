import React from 'react'
import {Link} from 'react-router-dom';
class Home extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            list : []
        };
    };
    
    componentDidMount()
    {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(jsonlist => {
                console.log("list we got",jsonlist)
                this.setState({
                    list : jsonlist
                })}
            )
    };
                
    

    render()
    {
        //console.log('length : ',this.state.list)
        const lis_ui_data=this.state.list.length ? (this.state.list.map(post => {
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

export default Home;