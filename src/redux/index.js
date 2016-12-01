import { combineReducers, applyMiddleware, compose, createStore } from 'redux'
import { initState } from './initState'
import { logout } from './actions'

// ======================================================
// 实例化 Store
// ======================================================
function theReducer(state=initState, action) {
  switch(action.type) {
    case 'LOGOUT':
      console.log('logout')
      return state
    default:
    return state
  }
}

export const store = createStore(theReducer)
