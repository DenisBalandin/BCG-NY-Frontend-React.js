import React, {Component} from 'react';
import {BrowserRouter as Router,Route, Link} from 'react-router-dom';
import BCGNYPurpose from './components/hide_components/BCGNYPurpose';
import KeyDesign from './components/hide_components/KeyDesign';
import Collision from './components/hide_components/Collision';
import EffectiveDesign from './components/hide_components/EffectiveDesign';
import {Animated} from "react-animated-css";
import 'animate.css/animate.css' 
import './css/whoWeAre.scss';

import history from './img/history.png';
import design from './img/design.png';
import bcg_icon from './img/bcg_icon.png';
import arrow from './img/arrow_menu.png';
import arrowBack from './img/arrow_back.png';
import key from './img/key.png';
import colission from './img/colission.png';
import effective from './img/effective.png';

class HowDoI extends Component{
    constructor(props){
        super(props);
        this.state = {
            openDesign:false,
            openDesign_button:false

        }
    }
    hideShowBlock = (id) =>{
        document.getElementById('right_block_menu').className += "hideClass"; 
        setTimeout(function(){
            document.getElementById('close_block_who_we_are').className = "close_button_move_small_block"; 
            document.getElementById(id).className += "showClassMain"; 
            document.getElementById('back_button').className += "showButton"; 
        }, 1000);
    };
    hideShowMainBlocks = (id) =>{
        document.getElementById('left_block').className += "hideClass"; 
        document.getElementById('right_block_who_we_are').className += "hideClass"; 
        this.setState({
            openDesign_button:false
        });
        setTimeout(function(){
            document.getElementById('close_block_who_we_are').className = "close_button_move"; 
            document.getElementById(id).className += "showClassMain"; 
            document.getElementById('back_button').className += "showButton"; 
        }, 1000);
    };
    openBlockDesign = () =>{
        this.setState({
            openDesign:true,
            openDesign_button:true,
        });
    }
    render(){
        return(
            <div id="now_do_i">
                <div id="bcg_ny_purpose">
                    <BCGNYPurpose/>
                </div>
                <div id="key_design">
                    <KeyDesign/>
                </div>
                <div id="collision">
                    <Collision/>
                </div>
                <div id="effective_design">
                    <EffectiveDesign/>
                </div>
                 <div id="left_block">
                    <div className="how_do_email">
                        <strong>bcg</strong>
                        <p className="email_icon">@</p>
                        <strong>NY</strong>
                    </div>
                    <div className="title">Who We Are</div>
                    <div className="title_border"></div>
                    <div className="left_block_links">
                        <Link to="/whereis">Where Is? <span><img src={arrow}/></span></Link>
                        <Link to="/search">Search<span><img src={arrow}/></span></Link>
                        <Link to="/emergency">Emergency info<span><img src={arrow}/></span></Link>
                        <Link to="/howdoi">How Do I?<span><img src={arrow}/></span></Link>
                    </div>
                </div>
                <div id="right_block_who_we_are">
                    <div id="history">
                        <img src={history}/>
                        <p>People</p>
                        <div>Sign-in</div>
                    </div>
                    <div id="right_block_menu">

                        <Animated animationOut="fadeOut" isVisible={this.state.openDesign ? false: true }>
                            <div className= { this.state.openDesign ? "hide_main_part":"show_main_part"  }>
                                <div className="right_block_menu_block">
                                    <div className="right_block_menu_item" onClick={this.hideShowMainBlocks.bind(this,'bcg_ny_purpose')}>
                                        <div className="right_block_img" >
                                            <img  src={bcg_icon} width="35%"/>
                                        </div>
                                        <p>BCG NY Purpose</p>
                                    </div>
                                </div>
                                <div className="right_block_menu_block" onClick={this.openBlockDesign}>
                                    <div className="right_block_menu_item" >
                                        <div className="right_block_img">
                                            <img   src={design} width="60%"/>
                                        </div>
                                        <p>Design</p>
                                    </div>
                                </div>
                                <div className="right_block_menu_block">
                                    <div className="right_block_menu_item" onClick={this.hideShowBlock.bind(this,'history')}>
                                        <div className="right_block_img" >
                                            <img src={history} width="35%"/>
                                        </div>
                                        <p>BCG History</p>
                                    </div>
                                </div>
                            </div>
                        </Animated>

                        <Animated animationOut="slideOutDown" isVisible={this.state.openDesign ? true : false}>
                            <div className= { this.state.openDesign ? "show_design_part" : "hide_design_part" }>
                                <div className="image_design"><img src={design} /></div>    
                                <h1>Design</h1>
                                <div className="right_block_menu_block">
                                    <div className="right_block_menu_item" onClick={this.hideShowMainBlocks.bind(this,'key_design')}>
                                        <div className="right_block_img" >
                                            <img  src={key} width="35%"/>
                                        </div>
                                        <p>Key Design Considerations</p>
                                    </div>
                                </div>
                                <div className="right_block_menu_block">
                                    <div className="right_block_menu_item" onClick={this.hideShowMainBlocks.bind(this,'collision')}>
                                        <div className="right_block_img">
                                            <img src={colission} width="60%"/>
                                        </div>
                                        <p>Collision Coefficient</p>
                                    </div>
                                </div>
                                <div className="right_block_menu_block">
                                    <div className="right_block_menu_item" onClick={this.hideShowMainBlocks.bind(this,'effective_design')}>
                                        <div className="right_block_img" >
                                            <img src={effective} width="35%"/>
                                        </div>
                                        <p>Effective Design</p>
                                    </div>
                                </div>
                            </div>
                        </Animated>
                    </div>
                </div>
                <div id="close_block_who_we_are" className= { this.state.openDesign ?  "hide_close_button":"show_close_button" }>
                    <Link to="/homepage">
                        <div className="menu_link">&#10005;</div>
                    </Link>
                    <Link to="/whoweare">
                        <div id="back_button"><span><img src={arrowBack}/></span></div>
                    </Link>
                </div>
                <div id="close_block_who_we_are_design" className= { this.state.openDesign_button ?  "show_close_button":"hide_close_button" }>
                    <Link to="/homepage">
                        <div className="menu_link">&#10005;</div>
                    </Link>
                    <Link to="/whoweare">
                        <div id="back_button"><span><img src={arrowBack}/></span></div>
                    </Link>
                </div>
            </div>
        );
    }
}
export default HowDoI;