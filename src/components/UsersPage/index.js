import React,{useEffect, useState} from 'react';

import axios from 'axios'
import {userAPI} from "../../api/api";

import User from '../UsersPage/User'

import './UserPage.scss'

const UsersPage = ({state, totalPageCount, onSubscribe, onUnsubscribe, onSetUsers, onSetTotalPageCount, subscribeProgress, onToggleSubProgress}) => {

  const [pageNumber, setPageNumber] = useState(1)
  const [disablePrevious, setDisablePrevious] = useState(true)
  const [disableNext, setDisableNext] = useState(false)

  const getUsers = () => {
    userAPI.getUsers(pageNumber).then(data => {
      onSetUsers(data)
      onSetTotalPageCount(data.totalCount)
    })
  }

  const plusPageNumber = () => {
    if (pageNumber === totalPageCount) {
      setDisableNext(true)
    } else {
      setDisablePrevious(false)
      setPageNumber(pageNumber + 1)
    }
  }

  const minusPageNumber = () => {
    if (pageNumber === 1) {
      setDisablePrevious(true)
    } else {
      setPageNumber(pageNumber - 1)
    }
  }

  const allUsers = state.map(user => <div key={user.id}>
    <User
      id={user.id}
      name={user.name}
      status={user.status}
      photo={user.photos}
      isSubscribe={user.followed}
      onSubscribe={onSubscribe}
      onUnsubscribe={onUnsubscribe}
      subscribeProgress={subscribeProgress}
      onToggleSubProgress={onToggleSubProgress}
    />
  </div>)

  useEffect(() => {
    getUsers()
  }, [pageNumber])

  return (
    <div className={'users'}>
      <div className={'users-title'}>Users Page</div>
      <div className={'users-wrapper'}>
        {allUsers}
      </div>
      <div>
        <button onClick={minusPageNumber} disabled={disablePrevious}>Show previous</button>
        <button onClick={plusPageNumber} disabled={disableNext}>Show next</button>
      </div>
    </div>
  );
};

export default UsersPage;