import {combineReducers, createStore} from 'redux'

import {profileReducer} from "./reducer/profile-reducer";
import {dialogReducer} from "./reducer/dialog-reducer";
import {userReducer} from "./reducer/user-reducer";

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogReducer,
  userPage: userReducer
})

export const store = createStore(reducers)