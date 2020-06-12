import React , { useState } from 'react';
import axios from 'axios';

const UploadForm = ()=>{

    const [file , setFile] = useState('');
    const [fileName , setFilename] = useState('');

    const handleChange=(e)=>{
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
    };

    const handleSubmit=(e)=>{
        e.preventDefault();

        const formData = new FormData();
        formData.append('file' , file );
        formData.append('fileName' , fileName);

        axios.post('http://localhost:5000/upload', formData ,{
            headers : {
                'Content-Type' : 'multipart/form-data'
              }
        })
        .then(res=>{
            console.log(res.data);
        })
        .catch(err=>{
            console.log("err : " , err);
        });
    };

    return(
        <form onSubmit={ handleSubmit }>
            <div className="custom-file mt-4">
                <input 
                type="file" 
                className="custom-file-input" 
                id="imgfile" 
                onChange={ handleChange } 
                required />
                <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="inputGroupFileAddon02">{ fileName }</label>
            </div>

            <button type="submit" className="btn btn-primary mt-3 btn-block">Upload</button>
        </form>
    );
};

export default UploadForm;