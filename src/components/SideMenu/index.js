import React from 'react';

import './SideMenu.scss'

import {NavLink} from 'react-router-dom'

const SideMenu = () => {
  return (
    <div className={'side-menu'}>
      <ul>
        <NavLink to={'/profile'} activeClassName={'active'}>
          <li>
            Profile
          </li>
        </NavLink>
       <NavLink to={'/dialogs'}>
         <li>
           Messages
         </li>
       </NavLink>
       <NavLink to={'/users'}>
         <li>
           Users
         </li>
       </NavLink>
      </ul>
    </div>
  );
};

export default SideMenu;