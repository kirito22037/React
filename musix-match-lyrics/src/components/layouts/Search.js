import React , { useState , useContext } from 'react';
import axios from 'axios';
import { Context } from '../../Context';

const Search = () =>{

    const [trackTitle , setTrackTitle ] = useState('');
    const { changeTrackList , promptMessage } = useContext(Context);
    
    const handleChange = (e)=>{
        //console.log(e.target.value);
        setTrackTitle(e.target.value);
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`)
        .then(res=>{
            //console.log("search result : " , res.data);
            changeTrackList(res.data.message.body.track_list);
            setTrackTitle('');
        })
        .catch(err=>{
            //console.log(err.message);
            promptMessage(err.message);
        });
    }

    return(
        <div className="card mt-4">
            <div className="card-body text-center">
                <h1 className="text-center">
                    <i className="fa fa-music"/>
                    Search For A Song
                </h1>
                <span>Get the lyrics for anysong</span>
                <form onSubmit = {handleSubmit}>
                    <div className="form-group mt-4">
                        <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Song title..."
                        name="trackTitle"
                        value={ trackTitle }
                        onChange={ handleChange }
                        />
                    </div>
                    <button 
                    type="submit"
                    className="btn btn-primary btn-lg btn-block mt-3">
                        Get Track Lyrics
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Search;