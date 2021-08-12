import React from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Header from "./components/Header";
import SideMenu from "./components/SideMenu";

import DialogsPageContainer from "./components/DialogsPage/DialogsPageContainer";
import UsersPageContainer from "./components/UsersPage/UsersPageContainer";
import MainPage from "./components/MainPage";

import './App.scss';
import HeaderContainer from "./components/Header/HeaderContainer";


function App() {
  return (
    <Router>
      <div className="App">
        <HeaderContainer />
        <SideMenu />
        <div>
          <Switch>
            <Route path={'/profile/:userId'} exact={true}>
              <MainPage />
            </Route>
            <Route path={'/dialogs'}>
              <DialogsPageContainer />
            </Route>
            <Route path={'/users'}>
              <UsersPageContainer />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
