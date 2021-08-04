import {profileReducer} from "./reducer/profile-reducer";
import {dialogReducer} from "./reducer/dialog-reducer";

export const store = {
  _state: {
    profilePage: {
      posts: [{id: 1, message: 'Some message', likeCount: 12}]
    },
    dialogPage: {
      messages: [{id: 1, messageText: 'Some message'}],
      dialogs: [{id: 1, dialogUser: 'Danil'}]
    }
  },
  _callSubscriber () {},

  getState () {
    return this._state
  },
  subscriber (observer) {
    this._callSubscriber = observer
  },

  dispatch (action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogPage = dialogReducer(this._state.dialogPage, action)

    this._callSubscriber(this._state)
  }
}




