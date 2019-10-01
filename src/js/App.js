import React, { Component } from 'react';
import AboutTab from './AboutTab';
import BlogTab from './BlogTab';
import ReleasesTab from './ReleasesTab';
import Tabs from './Tabs'
import '../css/App.css';
import '../fontawesome/css/all.min.css';
import yippyIcon from '../images/yippyIcon.svg';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import NotFoundComponent from './NotFoundComponent';

class App extends Component {
  
  render() {
    return (
      <Router>
      <div className="App" ref="app">
        <div className="App-content">
          <div className="App-header" ref="header">
            <img src={yippyIcon} className="App-logo" alt="logo" />
            <h1 className="App-header-title">Yippy</h1>
            <Tabs/>
          </div>
          <Switch>
              <Route exact path='/' component={AboutTab}></Route>
              <Route exact path='/blog' component={BlogTab}></Route>
              <Route exact path='/releases' component={ReleasesTab}></Route>
              <Route component={NotFoundComponent}></Route>
          </Switch>
        </div>
        <div className="App-footer">
          <span>Site made with <a href="https://reactjs.org/" target="_blank">ReactJS</a> by <a href="https://mattdavo.com" target="_blank">Matt Davidson.</a></span>
        </div>
      </div>
      </Router>
    );
  }
}



export default App;
