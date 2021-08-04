import React from 'react';

import ProfileInfo from "./ProfileInfo";
import AllPostsContainer from "./AllPosts/AllPostsContainer";

import './MainContent.scss'

const MainPage = ({store}) => {
  return (
    <div className={'main-content'}>
      <div className={'content-title'}>Profile Page</div>
      <ProfileInfo />
      <AllPostsContainer store={store}/>
    </div>
  );
};

export default MainPage;