import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers_store/rootReducer';

//rootreducer is called when initalize
const store = createStore(rootReducer);
//call whenever store gets update
store.subscribe(()=>{
    console.log("subscribe the store is updated");
    console.log(store.getState());
});

ReactDOM.render(<Provider store={store}>
    <App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
