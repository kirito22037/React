import React , { useState } from 'react';
import data from '../data';

export const SyntaxContext = React.createContext();

const SyntaxProvider = (props)=>{
    const [syntax , setSyntax] = useState(data);

    return(
      <SyntaxContext.Provider value={ {syntax , setSyntax} }>
          { props.children }
      </SyntaxContext.Provider>  
    );
};

export default SyntaxProvider;