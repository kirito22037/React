import React  from 'react';

const Posts = ({ posts }) =>{

    return(
        <ul className="collection">
            {
                posts.map(post => (
                    <li key={post.id} className="collection-item">{ post.title }</li>
                ))
            }
        </ul>
    );
};

export default Posts;