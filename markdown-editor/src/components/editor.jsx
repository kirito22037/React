import React , { useContext , useState , useEffect } from 'react';
import { SyntaxContext } from '../context/dataContext';
import { WinContext } from '../context/winContext';

const Editor = ()=>{

    const { syntax , setSyntax } = useContext(SyntaxContext);
    const { ewmax , pwmax , setEwmax , setPwmax } = useContext(WinContext);

    return(
        <div className="card mb-3 " id="editor-win">
        <div className="card-header editor-header">
            Rai Text Editor
            { ewmax ? <i class="fas fa-compress float-right"
                        onClick={ ()=>{ setEwmax(false) } } ></i> :
                     <i class="fas fa-expand float-right"
                        onClick={ ()=>{ setEwmax(true) } }></i>
            }
            
        </div>
        <div className="card-body editor-body">
            <textarea 
            className=""
            id="editor" 
            value={ syntax }
            onChange={ (e)=>setSyntax(e.target.value) } />
        </div>
        </div>
    );
};

export default Editor;