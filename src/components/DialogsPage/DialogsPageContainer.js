import React from 'react';

import {addDialogMessageActionCreator} from "../../redux/reducer/dialog-reducer";

import DialogsPage from "./index";

const DialogsPageContainer = ({store}) => {

  const addMessageHandler = (message) => {
    store.dispatch(addDialogMessageActionCreator(message))
  }

  return <DialogsPage addMessage={addMessageHandler} state={store.getState().dialogPage}/>
};

export default DialogsPageContainer;