import React from 'react';

import DialogItem from "./DialogItem";

import './DialogsPage.scss'
import MessageItem from "./MessageItem";

const DialogsPage = () => {
  return (
    <div className={'dialogs'}>
      <div className={'dialogs-title'}>Dialogs Page</div>
      <div className={'dialogs-wrapper'}>
        <div>
          <DialogItem name={'Danil'} id={'1'} />
        </div>
       <div>
         <MessageItem message={'Hello'} />
       </div>
      </div>
    </div>
  );
};

export default DialogsPage;