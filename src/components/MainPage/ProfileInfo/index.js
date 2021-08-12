import React from 'react';

import user_icon from '../../../img/man.svg'

import './ProfileInfo.scss'

const ProfileInfo = ({profile}) => {
  if(!profile) {
    return <div>Loading...</div>
  }
  return (
    <div className={'profile-info'}>
      <img src={profile.photos.small ? profile.photos.small : user_icon} alt="user photo" className={'profile-photo'}/>
      <div className={'profile-description'}>
        <div className={'info-block'}>
          <div className={'block-title'}>About me:</div>
          <div>{profile.aboutMe ? profile.aboutMe : 'Missing'}</div>
        </div>
        <div className={'info-block'}>
          <div className={'block-title'}>Looking for a job:</div>
          <div>{profile.lookingForAJob ? 'Yes': 'No'}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;