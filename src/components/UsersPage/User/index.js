import React from 'react';

import {NavLink} from "react-router-dom";
import {userAPI} from "../../../api/api";

import user_icon from '../../../img/man.svg'

import './User.scss'

const User = ({id, isSubscribe, name, photos, status, onSubscribe, onUnsubscribe, onToggleSubProgress, subscribeProgress}) => {

  const subscribeHandler = () => {
    onToggleSubProgress(true, id)
    userAPI.onSubscribe(id).then(data => {
      if(data.resultCode === 0) {
        onSubscribe(id)
      }
      onToggleSubProgress(false, id)
    })
  }

  const unsubscribeHandler = () => {
    onToggleSubProgress(true, id)
    userAPI.onUnsubscribe(id).then(data => {
      if(data.resultCode === 0) {
        onUnsubscribe(id)
      }
      onToggleSubProgress(false, id)
    })
  }


  return (
    <div className={'user'}>
      <div className={'subscribe-wrapper'}>
        <NavLink to={`/profile/${id}`}>
          <img src={photos !== undefined || null ? photos.small : user_icon} alt="" className={'user-photo'}/>
        </NavLink>
        {
          !isSubscribe ?
            <button className={'subscribe-button'}
                    disabled={subscribeProgress.some(userId => userId === id)}
                    onClick={subscribeHandler}>Subscribe</button>
            :
            <button className={'subscribe-button'}
                    disabled={subscribeProgress.some(userId => userId === id)}
                    onClick={unsubscribeHandler}>Unsubscribe</button>
        }
      </div>
      <div className={'info-wrapper'}>
        <div>
          <div>{name}</div>
          <div className={'status'}>{status ? status : 'Статуса нет'}</div>
        </div>
      </div>
    </div>
  );
};

export default User;