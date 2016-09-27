import React, { Component } from 'react';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { createStore, renderDevTools } from 'DevTools';
import FriendsListApp from 'FriendsListApp'; 
import * as reducers from 'Reducers';

const reducer = combineReducers(reducers); 
const store = createStore(reducer); 



export default class App extends Component {
  render() {
    return (
    	<div>
	    	<Provider store = {store}>
	    		{ () => <FriendsListApp/> }
	    	</Provider>

	    	{renderDevTools(store)}
	      
	      <h1>Hello, Doge.</h1>
	    </div>
    );
  }
}
