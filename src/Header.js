import React, {Component} from 'react';
import {BrowserRouter as Router,Route, Link} from 'react-router-dom';

class Header extends Component {

  render(){
    return (
      <nav className="navbar">
        <div className="navbar-brand">
        <Link to="/">
            <div>Главное</div>
        </Link>
        <Link to="/messagelist">
            <div>messagelist</div>
        </Link>
        <Link to="/messagebox">
            <div>messagebox</div>
        </Link>
        </div>
      </nav>
    )
  }
}
export default Header