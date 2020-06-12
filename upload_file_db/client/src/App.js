import React from 'react';
import UploadForm from './components/uploadForm';
import Display from './components/display';

function App() {
  return (
    <div className="container">
      
      <h1 className="mt-5">
        Upload To MongoDB
      </h1>
      <UploadForm/>
      <Display/>
    </div>
  );
}

export default App;
