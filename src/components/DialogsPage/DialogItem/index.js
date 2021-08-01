import React from 'react';

import {NavLink} from "react-router-dom";

import './DialogItem.scss'

const DialogItem = ({user, id}) => {

  const path = '/dialogs/' + id

  return (
    <div className={'dialog-item'}>
      <NavLink to={path}>{user}</NavLink>
    </div>
  );
};

export default DialogItem;