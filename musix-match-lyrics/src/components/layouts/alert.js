import React from 'react';

const Alert = ({ message })=>{

    return(
        <div class="alert alert-warning alert-dismissible fade show mt-4" role="alert">
            { message }
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
    );
};

export default Alert;