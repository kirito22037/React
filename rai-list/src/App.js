import React from 'react';
import InputEle from './components/input_ele';
import ListDis from './components/list_dis';

class App extends React.Component
{
  state={
          todolist : [ 
            { id:0 , data:"nothing" , status : false }
           ]
        };
      
  

  handleEnter = (event) => {
    if(event.key === 'Enter')
    {
        console.log("enter pressed");
        
        let task=event.target.value;                  //if taken inside the function throws error
        this.setState((prevState,eventx) => {
            //let task = eventx.target.value;   
            console.log("value : ",task)
            
            let listobj=prevState.todolist;
            let length=listobj.length;
            console.log("length",length);

            let lastelement=listobj[length-1];
            console.log("last element",lastelement);

            let newelement = {...lastelement};     //to make copy of last element of the list
            let newid=lastelement.id+1;
            console.log("newid",newid);

            //updating the data
            newelement.id=newid;
            newelement.data=task;
 
            console.log("newelement",newelement);
            
            listobj.push(newelement);
            return({todolist : listobj})
        });
        event.target.value = " ";
    }
  };

  handleclick = (id) => {
    console.log("list content is clicked");
      console.log("id of clicked element",id);
      this.setState(prevState => {
        let updatedlist = prevState.todolist.map(element =>{
          if(element.id == id)
          {
            element.status = !element.status;
          }
          return element;
        });
        return(
          {
            todolist : updatedlist
          });
      }
      )
  };

  handlecross = (ele) => {
    console.log("cross is clicked");
    console.log("id to be deleted",ele.id);
    console.log("element",ele);
    let oldlist=[...this.state.todolist];
    console.log("old list",oldlist);
    let index = oldlist.indexOf(ele);
    console.log("index",index);

    let dummylist=[...oldlist];
    let deletedelement=dummylist.splice(index,1);
    console.log("updatedlist : ",dummylist);
    
    this.setState({
      todolist : dummylist
    })
  };

  render()
  {
    
    return (
      <div >
               <InputEle updatetodo={ this.handleEnter }/>
               <ListDis 
               todolist={ this.state.todolist } 
               handleclick={ this.handleclick } 
               handlecross={ this.handlecross }/>           
      </div>
    )
  };
    
}

export default App;
