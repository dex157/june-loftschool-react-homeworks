import { combineReducers } from "redux";
import auth from "./auth-reducer";
import login from "./user-reducers";
import followers from "./follower-reducers";

export default combineReducers({ auth, login, followers });
