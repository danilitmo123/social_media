import React from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import MainPage from './components/MainPage'
import DialogsPage from "./components/DialogsPage";

import './App.scss';

function App({state, addPost}) {
  return (
    <Router>
      <div className="App">
        <Header />
        <SideMenu />
        <div>
          <Switch>
            <Route path={'/profile'} exact={true}>
              <MainPage state={state.profilePage} addPost={addPost}/>
            </Route>
            <Route path={'/dialogs'}>
              <DialogsPage state={state.dialogPage} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
