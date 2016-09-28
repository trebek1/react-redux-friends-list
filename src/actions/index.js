import * as types from 'ActionTypes';


let nextTodoId = 0;
/*
 * action creators
 */

export function addTodo(text) {
  return { 
  	type: types.ADD_TODO, 
    id: nextTodoId++,
  	text 
  }
}

export function toggleTodo(index) {

  return { 
  	type: types.TOGGLE_TODO, 
  	id: index
  }
}

export function setVisibilityFilter(filter) {

  return { 
  	type: types.SET_VISIBILITY_FILTER, 
  	filter 
  }
}
// async actions would go here