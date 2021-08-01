import React from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import MainPage from './components/MainPage'

import './App.scss';
import DialogsPage from "./components/DialogsPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <SideMenu />
        <div>
          <Switch>
            <Route path={'/profile'} exact={true}>
              <MainPage />
            </Route>
            <Route path={'/dialogs'}>
              <DialogsPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
