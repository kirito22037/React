import React , { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Moment from 'react-moment';

import Spinner from './Spinner';
import Alert from './alert';


const Lyrics = (props)=>{

    const [lyrics , setLyrics ] = useState({});
    const [track , setTrack ] = useState({});
    const [message , setMessage ] = useState('');

    useEffect(() => {
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`)
        .then(res=>{
            //console.log("lyrics : ",res.data);
            setLyrics(res.data.message.body.lyrics);

            return axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`)
        })
        .then(ress=>{
            //console.log("tracks : ",ress.data);
            setTrack(ress.data.message.body.track);
        })
        .catch(err=>{
            //console.log("error : ",err.message);
            setMessage(err.message);
        });

    }, []);

    return(
        <React.Fragment>
            
            {message ? <Alert message={message} /> : null }

            <Link to='/' className='btn btn-dark bg-dark mt-4'>Go Back</Link>
            {
                lyrics === undefined || track === undefined || Object.keys(lyrics).length === 0 || Object.keys(track).length === 0 ? 
                <Spinner/> : 
                <div className='card mt-4'>
                    <h5 className="card-header">
                        { track.track_name} by{' '}
                        <span className="text-secondary">{ track.artist_name }</span>
                    </h5>
                    <div className="card-body">
                        <p className="card-text">{ lyrics.lyrics_body }</p>
                    </div>

                    <ul className="list-group">
                        <li className="list-group-item">
                            <strong>ALBUM ID</strong>: { track.album_id }
                        </li>
                        <li className="list-group-item">
                            <strong>SONG GENRE</strong>: { track.primary_genres.music_genre_list.length === 0 ? "unknown" : track.primary_genres.music_genre_list[0]
                            .music_genre.music_genre_name }
                        </li>
                        <li className='list-group-item'>
                            <strong>Explict Words</strong>:
                            {track.explict === 0 ? 'No' : 'Yes'}
                        </li>
                        <li className='list-group-item'>
                            <strong>Release Date</strong>:
                            <Moment format='YYYY/MM/DD' >{track.updated_time}</Moment>
                        </li>
                    </ul>
                </div>
            }
        </React.Fragment>
    )
};

export default Lyrics;