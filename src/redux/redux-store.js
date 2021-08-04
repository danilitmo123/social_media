import {combineReducers, createStore} from 'redux'

import {profileReducer} from "./reducer/profile-reducer";
import {dialogReducer} from "./reducer/dialog-reducer";

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogReducer
})

export const store = createStore(reducers)