import React,{useEffect} from 'react';

import AllPostsContainer from "./AllPosts/AllPostsContainer";
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";

import './MainContent.scss'

const MainPage = () => {

  return (
    <div className={'main-content'}>
      <div className={'content-title'}>Profile Page</div>
      <ProfileInfoContainer />
      <AllPostsContainer />
    </div>
  );
};

export default MainPage;