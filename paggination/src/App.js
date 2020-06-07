import React , { useState , useEffect } from 'react';
import axios from 'axios';
import Posts from './components/posts';
import Page from './components/paggination';

function App() {

  const [posts , setPosts] = useState([]);
  const [loading , setLoading ] = useState(true);
  const [currentPage , setCurrent] = useState(1);
  const [postsPerPage , setPostsPer] = useState(10);

  const changeCurrentPage = (page)=>{
    setCurrent(page);
  };

  const fetchData = ()=>{
    console.log("fetch data called");
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res=>{
        //console.log(res.data);
        setPosts(res.data);
        setLoading(false);
    })
    .catch(err=>{
        console.log(err.message);
    });
};

useEffect(()=>{
    fetchData();
},[]);

//calculation
const indexOfLastPost = currentPage * postsPerPage ;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = posts.slice(indexOfFirstPost , indexOfLastPost );     //limited data is shown perpage

  return (
    <div className="container">
      <h1 className="">Paggination</h1>
      
      <Posts posts={ currentPosts } />
      
      <Page 
        currentPage={ currentPage } 
        postsPerPage={ postsPerPage } 
        totalPosts={ posts.length }
        changeCurrentPage={ changeCurrentPage } />
    </div>
  );
}

export default App;
