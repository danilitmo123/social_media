import React from 'react';

import AllPosts from "./AllPosts";

import './MainContent.scss'
import ProfileInfo from "./ProfileInfo";

const MainPage = ({state}) => {
  return (
    <div className={'main-content'}>
      <div className={'content-title'}>Profile Page</div>
      <ProfileInfo />
      <AllPosts state={state}/>
    </div>
  );
};

export default MainPage;