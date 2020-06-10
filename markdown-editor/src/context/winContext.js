import React , { useState , useEffect , createContext } from 'react';

export const WinContext = createContext();

const WinProvider = (props)=>{

    const [ewmax , setEwmax] = useState(false);
    const [pwmax , setPwmax] = useState(false);


    useEffect(()=>{
        if(ewmax)
        {
            document.getElementById('editor-win').classList.add('max-win');
            document.getElementById('editor').classList.add('max-textarea');
            document.getElementById('preview-win').classList.add('hide-win');
        }
        else if(ewmax===false)
        {
            document.getElementById('editor-win').classList.remove('max-win');
            document.getElementById('editor').classList.remove('max-textarea');
            document.getElementById('preview-win').classList.remove('hide-win');
        }

        if(pwmax)
        {
            console.log("preview win max");
            document.getElementById('preview-win').classList.add('max-win');
            document.getElementById('editor-win').classList.add('hide-win');
        }
        else if(pwmax===false)
        {
            document.getElementById('preview-win').classList.remove('max-win');
            document.getElementById('editor-win').classList.remove('hide-win');
        }
    },[ewmax,pwmax]);

    return(
        <WinContext.Provider value={ {ewmax , pwmax , setEwmax , setPwmax} }>
            { props.children }
        </WinContext.Provider>
    );
};

export default WinProvider; 