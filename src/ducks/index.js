import { combineReducers } from "redux";
import auth from './auth-reducer'
import login  from './user-reducers'

export default combineReducers({auth, login})
