import React, { Component } from 'react';
import TabOption from './TabOption';
import AboutTab from './AboutTab';
import BlogTab from './BlogTab';
import ReleasesTab from './ReleasesTab';
import '../css/App.css';
import '../fontawesome/css/all.min.css';
import yippyIcon from '../images/yippyIcon.svg';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      tabSelected: 'about'
    };
    
    this.handleTabClicked = this.handleTabClicked.bind(this)
  }
  
  handleTabClicked(tab) {
    this.setState({ ...this.state, tabSelected: tab });
  }
  
  render() {
    return (
      <div className="App" ref="app">
        <div className="App-content">
          <div className="App-header" ref="header">
            <img src={yippyIcon} className="App-logo" alt="logo" />
            <h1 className="App-header-title">Yippy</h1>
            <div ref="tabBar">
              <TabOption
                tab="about"
                isSelected={this.state.tabSelected === "about"}
                handleTabClicked={this.handleTabClicked}
                title="About"
              />
              |
            <TabOption
                tab="blog"
                isSelected={this.state.tabSelected === "blog"}
                handleTabClicked={this.handleTabClicked}
                title="Blog"
              />
              |
            <TabOption
                tab="releases"
                isSelected={this.state.tabSelected === "releases"}
                handleTabClicked={this.handleTabClicked}
                title="Releases"
              />
            </div>
          </div>
          <div ref="tabs">
            <AboutTab isEnabled={this.state.tabSelected === "about"}></AboutTab>
            <BlogTab isEnabled={this.state.tabSelected === "blog"}></BlogTab>
            <ReleasesTab isEnabled={this.state.tabSelected === "releases"}></ReleasesTab>
          </div>
        </div>
        <div className="App-footer">
          <span>Site made with <a href="https://reactjs.org/" target="_blank">ReactJS</a> by <a href="https://mattdavo.com" target="_blank">Matt Davidson.</a></span>
        </div>
      </div>
    );
  }
}

export default App;
