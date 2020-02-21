import React from 'react'

class Post extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            post : null
        };
    };

    componentDidMount()
    {
        let id=this.props.match.params.post_id;
        fetch('https://jsonplaceholder.typicode.com/posts/'+id)
        .then(res=>res.json())
        .then(json=>{
            this.setState(
                {
                    post : json
                }                
            )
            console.log('data type',typeof json)
            console.log('fetched data',json)
            console.log('specific content',json.body);
        })
    };

    render()
    {
        let post = this.state.post ? (<div><h1>{this.state.post.title}</h1>
            <p>{this.state.post.body}</p></div>)  :
        ( <div>its null for now </div>) ;
        

        return(
            <div className='container'>
                
            {post}
                
            </div>
        );
    }
};

export default Post;