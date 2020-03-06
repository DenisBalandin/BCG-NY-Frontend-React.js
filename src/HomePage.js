import React, {Component} from 'react';
import {BrowserRouter as Router,Route, Link} from 'react-router-dom';

import howdoit from './img/how_do_it.png';
import whereis from './img/where_is.png';
import search from './img/search.png';
import emergncy from './img/emergency.png';
import whowe from './img/who_we_are.png';
import sun from './img/sun.png';


class HomePage extends Component {
  render() {
    return (
      <div id="home_page">
        <Link to="/weather"> 
          <div className="weather_component_right">
            <div className="wheater_bg"></div>
            <div className="City">New York</div>
            <div className="date">APR 4, TUEASDAY 11:35</div>
            <div className="weather_icon"><img src={sun}/> 27&#176;	</div>
          </div>
        </Link>
        <div className="assist_text">
          <div className="assist_email">
              <strong>bcg</strong><p className="email_icon">@</p><strong>NY</strong>
          </div>  
          <div className="title">        
            <div>How can we assist you?</div> 
          </div>
        </div>
        <div className="assist_blocks">
          <Link to="/howdoi">  
              <div className="assist_img"><img src={howdoit} width="50%"/></div>
              <p className="howdoI_text">How Do I?</p>
              <div className="assist_text">Book a Room - Connect to Wifi...</div>
          </Link>
          <Link to="/whereis">
            <div className="assist_img"><img src={whereis}/></div>
            <p>Where is?</p>
            <div className="assist_text">Find People - Office Amenities...</div>
          </Link>
          <Link to="/search">
          <div className="assist_img"><img src={search}/></div>
            <p>Search</p>
          </Link>
          <Link to="/emergency">
            <div className="assist_img"><img src={emergncy}/></div>
            <p>Emergncy info</p>
          </Link>
          <Link to="/whoweare">
            <div className="assist_img"><img src={whowe}/></div>
            <p>Who We Are</p>
            <div className="assist_text">Office Design - History...</div>
          </Link>
        </div>
      </div>
    )
  }
}

export default HomePage;