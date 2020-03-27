let initstate={
    quotes : [{quote : "111 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
                author: "unknown"},
                {quote : "222 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
                author: "unknown"},
                {quote : "333 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
                author: "unknown"}
              ]
  };

export const myReducer = (state=initstate , action )=>{
    if(action.type === "NEW_QUOTES")
    {
      console.log("action data : ",action.quote);
      if(action.quote.quote.length > 0 && action.quote.author.length > 0)
      {
        return{
            quotes : [...state.quotes , 
              {quote : action.quote.quote , author : action.quote.author}]
          }
      };
    }
    return state;
}; 