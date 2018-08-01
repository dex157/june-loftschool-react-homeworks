import { combineReducers } from "redux";
import auth from "./auth/reducer";
import login from "./user/reducer";
import followers from "./followers/reducer";
import network from './network'

export default combineReducers({ auth, login, followers, network });
