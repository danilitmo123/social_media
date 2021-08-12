import React from 'react';

import {NavLink} from "react-router-dom";

import './Header.scss'

const Header = ({userData}) => {
  return (
    <header className={'header'}>
      <div>Social Media</div>
      {
        userData.id ?
          <div>
            <div className={'login'}>{userData.login}</div>
          </div>
          :
          <NavLink to={'/login'}>
            Login
          </NavLink>
      }
    </header>
  );
};

export default Header;