import React, {Component} from 'react';
import {BrowserRouter as Router,Route, Link} from 'react-router-dom';
import assistImg from './img/Vector_Tapscreen.png';
import sun from './img/sun.png';

class ScreenSaver extends Component {
  render() {
    return (
      <div id="screensaver_bg">
        <Link to="/weather"> 
          <div id="wheater_block">
              <div className="city">New York</div>
              <div className="date">APR 4, TUESDAY 11:35</div>
              <div className="weather_icon"><img src={sun}/> 27&#176;	</div>
          </div>
        </Link>

        <div id="assist_link">
          <div className="assist_text">How can we assist you?</div>
          <Link to="/homepage">        
            <div className="assist_icon">
              <img src={assistImg}/>
              <p>Touch to start</p>
            </div>
          </Link>
          <div className="assist_email">
              <strong>bcg</strong><p className="email_icon">@</p><strong>NY</strong>
          </div>
        </div>


      </div>
    )
  }
}

export default ScreenSaver;