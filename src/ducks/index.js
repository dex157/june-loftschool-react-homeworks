import { combineReducers } from "redux";
import auth from './auth-reducer'
import users from './users'

export default combineReducers({auth, users})
