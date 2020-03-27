import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import {myReducer} from './reducers/rootReducer';



const store = createStore(myReducer);
store.subscribe(()=>{
    console.log("subscribe the store is updated");
    console.log("the value of state : ",store.getState());
});


ReactDOM.render(<Provider store={store}><App /></Provider> , document.getElementById('root'));

serviceWorker.unregister();
