import React, {Component} from 'react';
import {BrowserRouter as Router,Route, Link} from 'react-router-dom';
import './css/search.scss';
import search from './img/search_icon.png';
import arrow from './img/arrow_menu.png';
import arrowBack from './img/arrow_back.png'

class HowDoI extends Component{
    constructor(props){
        super(props);
        this.state = {
            hideBlock:''
        }
    }
    render(){
        return(
            <div id="now_do_i">
                 <div id="left_block">
                    <div className="how_do_email">
                        <strong>bcg</strong>
                        <p className="email_icon">@</p>
                        <strong>NY</strong>
                    </div>
                    <div className="title">Search</div>
                    <div className="title_border"></div>
                    <div className="left_block_links">
                        <Link to="/whereis">Where Is? <span><img src={arrow}/></span></Link>
                        <Link to="/howdoi">How Do I?<span><img src={arrow}/></span></Link>
                        <Link to="/emergency">Emergency info<span><img src={arrow}/></span></Link>
                        <Link to="/whoweare">Who we are<span><img src={arrow}/></span></Link>
                    </div>
                </div>
                <div id="right_block" className="search_right_block">
                    <div className="search_block">
                        <div className="search_input">
                            <img src={search}/>
                            <input type="text" placeholder="Search" />
                        </div>
                        <div className="search_result">
                            <p>Lorem ipsum dolor sit amet,</p>
                            <p> consectetur adipiscing elit,</p>
                            <p> sed do eiusmod tempor incididunt </p>
                            <p> ut labore et dolore magna aliqua.</p>
                            <p> Quis ipsum suspendisse ultrices gravida.</p>
                            <p> Risus commodo viverra maecenas accumsan </p>
                            <p>lacus vel facilisis. </p>

                        </div>
                    </div>
                </div>
                <div className="close_block search_close_block">
                    <Link to="/homepage">
                        <div className="menu_link">&#10005;</div>
                    </Link>
                    <Link to="/howdoi">
                        <div id="back_button"><span><img src={arrowBack}/></span></div>
                    </Link>
                </div>
            </div>
        );
    }
}
export default HowDoI;