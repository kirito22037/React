import React , { useState ,  useEffect } from 'react';
import axios from 'axios';

export const Context = React.createContext();

const Provider =(props)=>{


    const [ trackList , setTrackList ] = useState([
    ]);
    const [ heading ,setHeading ] = useState("top 10 tracks"); 
    const [message , setMessage ] = useState('');


    const changeTrackList = ( trackList ) =>{
        setTrackList( trackList );
        setHeading('Search Result');
    };
    const promptMessage = (message)=>{
        setMessage(message);
    };

    useEffect(() => {
        console.log("key : " , process.env.REACT_APP_MM_KEY);
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&
        country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`)
        .then(res=> {
            //console.log(res.data)
            setTrackList(res.data.message.body.track_list);
        })
        .catch(err=>{
            //console.log("error : " ,err.message);
            setMessage(err.message);
        });

    }, []);

    return(
        <Context.Provider value={ { trackList , heading , message , changeTrackList , promptMessage } }>
            { props.children }
        </Context.Provider>
    );
    
};

export default Provider;