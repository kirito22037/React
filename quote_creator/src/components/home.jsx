import React from 'react';
import Carousel from './carasole';
import AddNew from './add_new';
import './home.css';
//import {Link} from 'react-router-dom';

class Home extends React.Component{
    render()
    {
        return(
            <div className='home p-3'>
            <Carousel />
            <AddNew/>
        </div>
        )
        
    }
};

export default Home;