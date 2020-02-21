//this is the initial state of our STORE
const initState = {
    posts : [
        {id : 1 ,title : 'roshan' , body : 'this is just a shit that i am writing to fill the space '},
        {id : 2 ,title : 'rohan' , body : 'this is just a shit that i am writing to fill the space '},
        {id : 3 ,title : 'unish' , body : 'this is just a shit that i am writing to fill the space '}
    ] 
}

//invokes when a dispatch with action as argument is recieved
function rootReducer(state=initState , action ) 
{
    if(action.type === 'DELETE_POST')
    {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        });
    
    return {
        ...state,
        posts : newPosts
            };
    }
    else
    return state;
}

export default rootReducer;