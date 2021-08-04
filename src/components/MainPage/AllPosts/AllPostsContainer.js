import React from 'react';

import {addPostActionCreator} from "../../../redux/reducer/profile-reducer";

import AllPosts from "./index";

const AllPostsContainer = ({store}) => {

  const addPostHandler = (message) => {
    store.dispatch(addPostActionCreator(message))
  }

  return <AllPosts addPost={addPostHandler} state={store.getState().profilePage} />
};

export default AllPostsContainer;