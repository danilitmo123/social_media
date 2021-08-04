import React from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import MainPage from './components/MainPage'
import DialogsPageContainer from "./components/DialogsPage/DialogsPageContainer";

import './App.scss';

function App({store}) {
  return (
    <Router>
      <div className="App">
        <Header />
        <SideMenu />
        <div>
          <Switch>
            <Route path={'/profile'} exact={true}>
              <MainPage store={store}/>
            </Route>
            <Route path={'/dialogs'}>
              <DialogsPageContainer store={store} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
