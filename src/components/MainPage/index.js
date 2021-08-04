import React from 'react';

import ProfileInfo from "./ProfileInfo";
import AllPostsContainer from "./AllPosts/AllPostsContainer";

import './MainContent.scss'

const MainPage = () => {
  return (
    <div className={'main-content'}>
      <div className={'content-title'}>Profile Page</div>
      <ProfileInfo />
      <AllPostsContainer />
    </div>
  );
};

export default MainPage;