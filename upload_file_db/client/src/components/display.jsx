import React , { useState , useEffect } from 'react';
import axios from 'axios';

const Display = ()=>{

    const [files , setFiles] = useState([]);
    const [alert , setAlert ] = useState('');

    useEffect(()=>{
        console.log("req send");
        axios.get('http://localhost:5000/all')
        .then(res=>{
            console.log("result : " , res.data);
            setFiles(res.data);
            if(res.data.length === 0)
            {
                setAlert("The Db is empty");
            }
        })
        .catch(err=>{
            setAlert(err);
        });
    },[]);

    return(
        <div className="container">
            { alert ? <div className=" my-3 alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>{ alert }</strong> 
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    </button>
                    </div> : null }
            {
                files.map(file=>(
                    <div className="card my-3" key={ file._id }>
                        { file.isImage ? <img src={ `http://localhost:5000/picture/${file.filename}` } className="card-img-top" alt="..."/> : null }
                        <div className="card-body">
                            <h5 className="card-title">{ file.filename }</h5>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Display; 