import React from 'react';

import DialogItem from "./DialogItem";

import './DialogsPage.scss'
import MessageItem from "./MessageItem";

const DialogsPage = ({state}) => {

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
         {messageItem}
       </div>
      </div>
    </div>
  );
};

export default DialogsPage;