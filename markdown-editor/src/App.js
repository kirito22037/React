import React from 'react';
import Editor from './components/editor';
import Preview from './components/preview';
import SyntaxProvider from './context/dataContext';
import WinProvider from './context/winContext';

function App() {
  return (
    <SyntaxProvider>
      <WinProvider>
      <div className="container">
          <div className="d-flex flex-column pt-4" style={{height:"100%"}}>
          
              <Editor/>
              <Preview />
          
          </div>
      </div>
      </WinProvider>
      </SyntaxProvider>
  );
}

export default App;
