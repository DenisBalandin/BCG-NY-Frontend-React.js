import React, {Component} from 'react';
import {BrowserRouter as Router,Route, Link} from 'react-router-dom';
import assistImg from './img/Vector_Tapscreen.png';
import sun from './img/sun.png';
import weather_image from './img/wheater_image.png';

class ScreenSaver extends Component {
  render() {
    return (
      <div id="weather_widget">

        <div id="wheater_block">
            <div className="city">New York</div>
            <div className="date">APR 4, TUESDAY 11:35</div>
        </div>
        <div className="weather_block">
          <div className="weather_block_image">
            <img src={weather_image}/>
          </div>
          <div className="weather_block_back">
              <Link to="/homepage">
                  <div className="menu_link">&#10005;</div>
              </Link>
          </div>
        </div>
       

        <div id="assist_link">
          <div className="assist_email">
              <strong>bcg</strong><p className="email_icon">@</p><strong>NY</strong>
          </div>
        </div>


      </div>
    )
  }
}

export default ScreenSaver;