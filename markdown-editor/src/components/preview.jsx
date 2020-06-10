import React , { useContext , useState } from 'react';
import marked from 'marked';

import { SyntaxContext } from '../context/dataContext';
import { WinContext } from '../context/winContext';

const Preview = ()=>{

    const { syntax } = useContext(SyntaxContext);
    const { pwmax , setPwmax } = useContext(WinContext);
    console.log("pwmax : " ,pwmax);
    return(
        <div id="preview" className="card my-3 flex-grow-1" id="preview-win">
        <div className="card-header preview-header">
            Rai Preview Window
            { pwmax ? <i class="fas fa-compress float-right"
                        onClick={ ()=>{ setPwmax(false) } } ></i> :
                     <i class="fas fa-expand float-right"
                        onClick={ ()=>{ setPwmax(true) } }></i>
            }
        </div>
        <div 
        className="card-body  preview-body"
        dangerouslySetInnerHTML={{ __html: marked(syntax) }}>
            
        </div>
        </div>
    );
};


export default Preview;