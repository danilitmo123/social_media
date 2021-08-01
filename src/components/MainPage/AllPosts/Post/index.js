import React from 'react';

import like_icon from '../../../../img/heart_icon.svg'

import './Post.scss'

const Post = ({post, like}) => {
  return (
    <div className={'post'}>
      <div className={'post-text'}>{post}</div>
      <div className={'like-info'}>
        <div className={'like-count'}>{like}</div>
        <img src={like_icon} alt="like" className={'like-icon'}/>
      </div>
    </div>
  );
};

export default Post;
