import React from 'react';

import Post from "./Post";

import './AllPosts.scss'

const AllPosts = ({state}) => {

  const postItem = state.posts.map(post => <Post key={post.id} post={post.message} like={post.likeCount} />)

  return (
    <div className={'all-posts'}>
      <div className={'posts-title'}>My posts</div>
      <div className={'add-post'}>
        <textarea />
        <div>Add Post</div>
      </div>
      <div>
        {postItem}
      </div>
    </div>
  );
};

export default AllPosts;
