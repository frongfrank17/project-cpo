import { createStore, applyMiddleware , combineReducers} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { LoginReducer } from './user.Reducer'
import { Lists } from './list.Reducer'
import {Map_Report ,Map_User} from './Map.Reducer'
const combine = combineReducers({
        LoginReducer , Lists  ,Map_User , Map_Report
})

 const  Store = createStore( combine , applyMiddleware( thunk ) )
export default Store
