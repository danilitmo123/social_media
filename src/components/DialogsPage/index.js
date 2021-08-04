import React, {useState} from 'react';

import {addDialogMessageActionCreator} from "../../redux/reducer/dialog-reducer";

import DialogItem from "./DialogItem";
import MessageItem from "./MessageItem";

import './DialogsPage.scss'

const DialogsPage = ({state, dispatch}) => {

  const [message, setMessage] = useState('')

  const handleMessage = (e) => {
    setMessage(e.target.value)
  }

  const addMessageHandler = () => {
    dispatch(addDialogMessageActionCreator(message))
    setMessage('')
  }

  const dialogItem = state.dialogs.map(dialog => <DialogItem key={dialog.id} id={dialog.id} user={dialog.dialogUser} />)

  const messageItem = state.messages.map(message => <MessageItem key={message.id} message={message.messageText} />)

  return (
    <div className={'dialogs'}>
      <div className={'dialogs-title'}>Dialogs Page</div>
      <div className={'dialogs-wrapper'}>
        <div>
          {dialogItem}
        </div>
       <div>
         <div>{messageItem}</div>
         <div>
           <textarea onChange={handleMessage} value={message} />
           <button onClick={addMessageHandler}>Отправить сообщение</button>
         </div>
       </div>
      </div>
    </div>
  );
};

export default DialogsPage;