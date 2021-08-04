import React, {useState} from 'react';

import {addPostActionCreator} from "../../../redux/reducer/profile-reducer";

import Post from "./Post";

import './AllPosts.scss'

const AllPosts = ({state, dispatch}) => {

  const [message, setMessage] = useState('')

  const handleMessage = (e) => {
    setMessage(e.target.value)
  }

  const addPostHandler = () => {
    dispatch(addPostActionCreator(message))
    setMessage('')
  }

  const postItem = state.posts.map(post => <Post key={post.id} post={post.message} like={post.likeCount} />)

  return (
    <div className={'all-posts'}>
      <div className={'posts-title'}>My posts</div>
      <div className={'add-post'}>
        <textarea onChange={handleMessage} value={message}/>
        <button onClick={addPostHandler}>Add Post</button>
      </div>
      <div>
        {postItem}
      </div>
    </div>
  );
};

export default AllPosts;
