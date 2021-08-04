const ADD_DIALOG_MESSAGE = 'ADD_DIALOG_MESSAGE'

const initialState ={
  messages: [{id: 1, messageText: 'Some message'}],
  dialogs: [{id: 1, dialogUser: 'Danil'}]
}

export const dialogReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_DIALOG_MESSAGE:
      const newDialogMessage = {
        id: 2,
        messageText: action.messageText
      }
      return {...state, messages: [...state.messages, newDialogMessage]}
    default:
      return state
  }
}


export const addDialogMessageActionCreator = (messageText) => ({type: ADD_DIALOG_MESSAGE, messageText})