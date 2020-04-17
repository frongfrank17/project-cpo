import { createStore, applyMiddleware , combineReducers} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { LoginReducer } from './user.Reducer'
import { Lists } from './list.Reducer'
const combine = combineReducers({
        LoginReducer , Lists
})

 const  Store = createStore( combine , applyMiddleware( thunk , logger ) )
export default Store
