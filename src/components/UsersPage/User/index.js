import React from 'react';

import user_icon from '../../../img/man.svg'

import './User.scss'

const User = ({id, isSubscribe, name, photos, status, onSubscribe, onUnsubscribe}) => {

  const subscribeHandler = () => {
    onSubscribe(id)
  }

  const unsubscribeHandler = () => {
    onUnsubscribe(id)
  }

  return (
    <div className={'user'}>
      <div className={'subscribe-wrapper'}>
        <img src={photos !== undefined || null ? photos.small : user_icon} alt="" className={'user-photo'}/>
        {
          !isSubscribe ?
            <button className={'subscribe-button'} onClick={subscribeHandler}>Subscribe</button>
            :
            <button className={'subscribe-button'} onClick={unsubscribeHandler}>Unsubscribe</button>
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