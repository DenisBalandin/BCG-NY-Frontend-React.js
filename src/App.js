import React,{Component} from 'react';
import logo from './logo.svg';
import MessageList from './MessageList';
import MessageBox from './MessageBox';
import Header from './Header';
import Routes from './Routes'

import {BrowserRouter as Router,Route, Link} from 'react-router-dom';
import './style.scss';

import './App.css';
class App extends Component {
  
  render(){
    return (
      <div id="main">
          {/* <Header title="Simple Firebase App" /> */}
            <Router>
              {/* <Header/> */}
              <Routes/>
            </Router>
              {/* <MessageBox/> */}
              {/* <MessageList/> */}
        
      </div>
    );
  }

}

export default App;
