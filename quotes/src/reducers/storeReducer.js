const initState = {
    quotes : [],
    quote : {
        text : "storeloading...",
        author : "storeloading..."
    }
};

function rootReducer(state = initState , action)
{
    console.log("-------------------redux reducer called----------------");
    if(action.type === 'FETCH_DATA')
    {
        console.log("---------------update data-----------------");
        console.log("redux store data updated : ",action.quotes);
        return {
            quotes : action.quotes,
            quote : action.quotes[0]
        }        
    }
    else if(action.type === 'GET_QUOTE')
    {
        console.log("-------------------choosing data-----------------");
        console.log("choosing a random quote from dataset ");
        console.log("redux store data size : ",state.quotes.length);
        const index = Math.floor(Math.random() * state.quotes.length);
        console.log("selected index : ",index);
        console.log("selected data from redux store : ",state.quotes[index]);

        return {
            ...state,
            quote : state.quotes[index]
        }
    }
    else
    {
        return state;
    }
   
}

export default rootReducer;

