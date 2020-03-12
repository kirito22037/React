import React from 'react'
import './add_new.css';
import {Link} from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

class AddNew extends React.Component{
    render()
    {
        return(
             <Link to="/create">
            <div className="addbtn mb-5 mr-5">
                <span className="fas fa-plus"></span>
            </div>
            </Link>
        )
    }
};

export default AddNew;