import React , { useState , useEffect } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

import loadingif from './loading_gif3.gif';

const Collage = ()=>{

    const [images , setImages] = useState([]);
    const [loaded , setLoaded] = useState(false);
    const [message , setMessage ] = useState('');

    const fetchImages = ()=>{
        console.log("request fetch");
        const baseUrl = "https://api.unsplash.com";
        const secretKey = process.env.REACT_APP_SECRET_KEY;

        axios.get(`${baseUrl}/photos/random`,{
            params : {
                client_id : secretKey,
                count : 8
            }
        })
        .then(res=>{
            console.log("result recieved");
            setImages([...images , ...res.data]);
            setLoaded(true);
        })
        .catch(err=>{
            console.log("error : " , err.message);
            setMessage(err.message);
        });
    }

    useEffect(()=>{
        console.log("component mounted");
        fetchImages();
    },[]);

    useEffect(()=>{
        console.log("images : ",images);
    },[images]);

    return(
            <React.Fragment>

            { message!==undefined && message.length!==0 ? 
                <div class="alert alert-warning alert-dismissible fade show mt-4 mb-4" role="alert">
                { message }
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div> : null
            }

            <InfiniteScroll 
            dataLength={images.length}
            hasMore={true}
            next={ fetchImages }
            loader={
                <div className="d-flex justify-content-center">
                <img src={ loadingif } alt="loading..."/> 
                </div>}
            >
                <div className="d-flex flex-row flex-wrap justify-content-between mt-4">
                    {
                        loaded ? 
                        images.map((image,index)=>(
                            <div 
                            key={ image.id }
                            className="align-self-start">
                            <img src={image.urls.thumb} />
                            </div>
                        ))
                        : null
                    }
                </div>
            </InfiniteScroll> 
            </React.Fragment>
    );
};

export default Collage;