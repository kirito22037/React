import React from 'react';
import LazyLoad from 'react-lazyload';
import data from './data.js';
import demo from './img_demo.png';

const Loading = ()=>{

  return(<div className="card ">
    <h5 className="card-body mx-auto my-2">Loading...</h5>
  </div>)
}

const Post = ( props ) =>{

  const {id , title , body } = props;

  return(
    <div className="card mb-3" >
      <div className="row">
          <div className="col-md-4"> 
            <img className="card-img" src={`https://picsum.photos/id/${id}/200/150`} />
          </div>
          <div class="card-body col-md-8">
            <h5 class="card-title">{ title }</h5>
            <p class="card-text">{ body }</p>
          </div>
    </div>
  </div>
  )
};

function App() {
  return (
    <div className="container">
     
     <h1 className="mt-4 text-light"> Lazy Loading </h1>

     <div className="mt-4 posts-cont">
      {
        data.map(post=>(
          <LazyLoad 
          key={ post.id } 
          placeholder={ <Loading/> }
          >
          <Post key={ post.id } id={ post.id } title={ post.title } body={ post.body } />
          </LazyLoad>
        ))
      }
     </div>

    </div>
  );
};

export default App;
