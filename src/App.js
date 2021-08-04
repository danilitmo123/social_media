import React from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import MainPage from './components/MainPage'
import DialogsPage from "./components/DialogsPage";

import './App.scss';

function App({state, dispatch}) {
  return (
    <Router>
      <div className="App">
        <Header />
        <SideMenu />
        <div>
          <Switch>
            <Route path={'/profile'} exact={true}>
              <MainPage state={state.profilePage} dispatch={dispatch}/>
            </Route>
            <Route path={'/dialogs'}>
              <DialogsPage state={state.dialogPage} dispatch={dispatch} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
