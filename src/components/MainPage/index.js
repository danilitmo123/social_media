import React from 'react';

import AllPosts from "./AllPosts";

import './MainContent.scss'
import ProfileInfo from "./ProfileInfo";

const MainPage = () => {
  return (
    <div className={'main-content'}>
      <div className={'content-title'}>Profile Page</div>
      <ProfileInfo />
      <AllPosts />
    </div>
  );
};

export default MainPage;