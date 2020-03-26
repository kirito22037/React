let initState={
    todolist : [ 
      { id:0 ,
        data:"nothing" ,
        status : false }
     ]
  };

  //when 
const rootReducer = (state=initState , action) =>{
    console.log("rootreducer is called");

    if(action.type==='ADD_TODO')
    {
        console.log("to add a todo");
        let length = state.todolist.length;
        return {
            todolist : [...state.todolist , 
            {
                id : state.todolist[length-1].id + 1,
                data : action.todo,
                status : false
            }]
        }
    }

    else if(action.type==='DONE_TODO')
    {
        console.log("to mark done a todo");
        console.log("changing the status");
        let updatedList = state.todolist.map(lis =>{
            if(lis.id === action.id)
            {
                //change the status
                lis.status= !lis.status;
                return lis;
            }
            else
            {
                return lis;
            }
        });
        console.log("the updated store : ",updatedList);
        return {
                    todolist : updatedList
                };
    }

    else if(action.type==='DELETE_TODO')
    {
        const ele=action.lis;
        console.log("to delete element");
        let oldlist=[...state.todolist];
        console.log("old list",oldlist);
        let index = oldlist.indexOf(ele);
        console.log("index",index);

        let dummylist=[...oldlist];
        let deletedelement=dummylist.splice(index,1);
        console.log("updatedlist : ",dummylist);
        
        return {
        todolist : dummylist
        }
    }

    return state;
};

export default rootReducer;