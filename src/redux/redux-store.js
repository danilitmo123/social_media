import {combineReducers, createStore, applyMiddleware} from 'redux'
import thunk from "redux-thunk";
import {profileReducer} from "./reducer/profile-reducer";
import {dialogReducer} from "./reducer/dialog-reducer";
import {userReducer} from "./reducer/user-reducer";
import {authReducer} from './reducer/auth-reducer'

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogReducer,
  userPage: userReducer,
  auth: authReducer
})

export const store = createStore(reducers, applyMiddleware(thunk))

window.store = store