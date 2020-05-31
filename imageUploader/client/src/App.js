import React , { useState } from 'react';
import axios from 'axios';

function App() {

  const [file , setFile] = useState('');
  const [fileName , setFileName] = useState('');
  const [uploadedFile , setUploadedFile ] = useState({});
  const [message , setMessage] = useState('');
  const [uploadProg , setuploadProg] = useState(0);

  const handleChange = e => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const handleSubmit = async e =>{
    e.preventDefault();
    
    console.log("submited");

    const formData = new FormData();
    formData.append('file' , file);
    formData.append('filename' , fileName);

    try 
    {
      const result = await axios.post('http://localhost:5000/photo/upload', formData , {
        headers : {
          'Content-Type' : 'multipart/form-data'
        },
        onUploadProgress : ProgressEvent=>{
          setuploadProg(parseInt(Math.round((ProgressEvent.loaded * 100) / ProgressEvent.total)));

          setTimeout(()=> setuploadProg(0) , 10000);
        }
      });

      const { fileName , filePath } = result.data;
      setUploadedFile({ fileName , filePath });
    }
    catch(err)
    {
      console.log("error object : " , err);
      if(err.response.status === 500)
      {
        console.log("server side error");
        setMessage("server side error")
      }
      else
      {
        console.log(err.response.data.msg);
        setMessage(err.response.data.msg);
      }
    }

  };

  return(
    <div className="container">
      <h1 className="text-center mt-5">
        React File Uploader
      </h1>

      { message ? <div className="alert alert-primary alert-dismissible fade show mt-3" role="alert">
         { message }
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div> : null }

      <form onSubmit={ handleSubmit }>
        <div className="input-group mb-5 mt-5">
          <div className="input-group-prepend">
            <button type='submit' className="input-group-text bg-success text-white" id="inputGroupFileAddon01">Upload</button>
          </div>
          <div className="custom-file">
            <input type="file" className="custom-file-input " id="inputGroupFile01" aria-describedby="inputGroupFileAddon01"
            onChange={ handleChange }/>
            <label className="custom-file-label" htmlFor="inputGroupFile01">{ fileName }</label>
          </div>
        </div>

        <div class="progress">
  <div class="progress-bar" role="progressbar" style={ {width : `${uploadProg}%`} }> {uploadProg}%</div>
        </div>
      </form>

      {
        uploadedFile ? <div className="row mt-5">
          <div className="col-md-6 m-auto">
              <h3 className='text-center'>{ uploadedFile.fileName }</h3>
              <img className='mt-5' style={ { width : '100%' }} src={ uploadedFile.filePath } alt={uploadedFile.fileName} />
          </div>          
        </div> : null 
      }

    </div>
  )
}

export default App;
