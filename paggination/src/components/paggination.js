import React , { useEffect } from 'react';

const dissableArrow = (arrow)=>{
    document.getElementById(arrow).classList.remove('wave-effect');
    document.getElementById(arrow).classList.add('disabled');
};

const enableArrow = (arrow)=>{
    document.getElementById(arrow).classList.remove('disabled');
    document.getElementById(arrow).classList.add('wave-effect');
};

const handleStyleArrow = (currentPage , totalPosts , postsPerPage )=>{
    if(currentPage === 1)
    {
        //console.log("page 1");
        dissableArrow("arrow-back");
        enableArrow("arrow-front");
    }
    else if(currentPage === Math.ceil(totalPosts/postsPerPage))
    {
        dissableArrow("arrow-front"); 
        enableArrow("arrow-back");  
    }
    else
    {
        enableArrow("arrow-front");
        enableArrow("arrow-back");
    }
};


//----------------functional component----------------------------
const Page = ( { currentPage , postsPerPage , totalPosts , changeCurrentPage })=>{

    const pageNumbers = [];

    for(let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++)
    {
        pageNumbers.push(i);
    }

    const arrowBack = () =>{
        if(currentPage!== 1 )
        {
            changeCurrentPage(currentPage-1);
        }
    };
    
    const arrowForward = () =>{
        if(currentPage !== Math.ceil(totalPosts/postsPerPage))
        {
            changeCurrentPage(currentPage+1);
        }
    };
 
    useEffect(()=>{
        //console.log("current page changed");
        handleStyleArrow(currentPage , totalPosts , postsPerPage);
    },[currentPage]);

    return(
        <ul className="pagination">
            <li 
            id="arrow-back"
            className="disabled" 
            onClick={ arrowBack }>
                <a ><i class="material-icons">chevron_left</i></a>
            </li>
            
            { pageNumbers.map(page=>(
                    <li 
                    key={page} 
                    class="waves-effect"
                    onClick={ ()=>changeCurrentPage(page) }>
                        <a>{ page }</a>
                    </li>)) 
            }

            <li 
            id="arrow-front"
            class="waves-effect"
            onClick={ arrowForward }>
                <a ><i class="material-icons">chevron_right</i></a>
            </li>
        </ul>
    );
};

export default Page;

