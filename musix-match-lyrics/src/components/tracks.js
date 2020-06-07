import React , { useContext } from 'react';
import { Context } from '../Context';
import Spinner from './layouts/Spinner';
import Track from './track';
import Alert from './layouts/alert';

const Tracks =()=>{

        const { trackList , heading , message } = useContext(Context);
        

        return(
        <div>

            {message === undefined || message.length === 0 ? null : <Alert message={message} /> }

            { trackList === undefined || trackList.length === 0 ? <Spinner/> : 
            <React.Fragment>
                <h3 className="text-center mt-5">{ heading }</h3>
                <div className="row mt-4">
                    { trackList.map(item=>{
                        return <Track key={item.track.track_id} track={ item.track } />
                    })
                    }
                </div>
            </React.Fragment> }

        </div>
        );    
};

export default Tracks;