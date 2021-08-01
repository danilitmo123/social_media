import React from 'react';

import Post from "./Post";

import './AllPosts.scss'

const AllPosts = () => {
  return (
    <div className={'all-posts'}>
      <div className={'posts-title'}>My posts</div>
      <div className={'add-post'}>
        <textarea />
        <div>Add Post</div>
      </div>
      <div>
        <Post />
      </div>
    </div>
  );
};

export default AllPosts;
