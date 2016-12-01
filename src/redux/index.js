import { combineReducers, createStore } from 'redux'
import initState from './initState'
import { logout } from './actions'

// ======================================================
// 实例化 Store
// ======================================================
function theReducer(state, action) {
  switch(action.type) {
    case 'LOGOUT':
      console.log('LOGOUT')
      return state
    case 'TOGGLEDRAWER':
      return Object.assign({}, state, {
        showDrawer: !state.showDrawer
      })
    default:
      return state
  }
}

// export store = createStore(theReducer, initState)

const store = createStore(theReducer, initState)

store.subscribe(() =>
  console.log(store.getState())
);

export {store}
