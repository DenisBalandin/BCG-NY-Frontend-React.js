import React, {Component} from 'react';
import {BrowserRouter as Router,Route, Link} from 'react-router-dom';
import Transportation from './hide_components/Transportation';
import Restaurant from './hide_components/Restaurant';
import OfficeAmenities from './hide_components/OfficeAmenities';
import BuildingAmenities from './hide_components/BuildingAmenities';

import '../css/whereIs.scss';
import people from '../img/people.png'
import transport from '../img/transport.png'
import office from '../img/office2.png';
import food from '../img/food.png';
import building from '../img/building.png'
import arrow from '../img/arrow_menu.png';
import arrowBack from '../img/arrow_back.png'

class HowDoI extends Component{
    constructor(props){
        super(props);
        this.state = {
            hideBlock:''
        }
    }
    hideShowBlock = (id) =>{
        document.getElementById('right_block_menu').className += "hideClass"; 
        setTimeout(function(){
            document.getElementById(id).className += "showClass"; 
            document.getElementById('back_button').className += "showButton"; 
        }, 1000);
    };
    hideShowMainBlocks = (id) =>{
        document.getElementById('left_block').className += "hideClass"; 
        document.getElementById('right_block_where_is').className += "hideClass"; 
        setTimeout(function(){
            document.getElementById('close_block_where_is').className += "close_block_up"; 
            document.getElementById(id).className += "showClassMain"; 
            document.getElementById('back_button').className += "showButton"; 
        }, 1000);
    };
    hideShowMainBlocksRest = (id) =>{
        document.getElementById('left_block').className += "hideClass"; 
        document.getElementById('right_block_where_is').className += "hideClass"; 
        setTimeout(function(){
            document.getElementById('close_block_where_is').className += "close_block_up"; 
            document.getElementById(id).className += "showClassMain"; 
            
        }, 1000);
    };
    render(){
        return(
            <div id="now_do_i">
                <div id="transportation_hide">
                    <Transportation/>
                </div>
                <div id="restaurant_hide">
                    <Restaurant/>
                </div>
                <div id="office_amenities">
                    <OfficeAmenities/>
                </div>
                <div id="building_amenities">
                    <BuildingAmenities/>
                </div>
                <div id="left_block">
                    <div className="how_do_email">
                        <strong>bcg</strong>
                        <p className="email_icon">@</p>
                        <strong>NY</strong>
                    </div>
                    <div className="title">Where Is?</div>
                    <div className="title_border"></div>
                    <div className="left_block_links">
                        <Link to="/howdoi">How Do I?<span><img src={arrow}/></span></Link>
                        <Link to="/search">Search<span><img src={arrow}/></span></Link>
                        <Link to="/emergency">Emergency info<span><img src={arrow}/></span></Link>
                        <Link to="/whoweare">Who we are<span><img src={arrow}/></span></Link>
                    </div>
                </div>
                <div id="right_block_where_is">
                    <div id="people_hide">
                        <img src={people}/>
                        <p>People</p>
                        <div>Sign-in</div>
                    </div>
                    <div id="right_block_menu" >
                        <div className="right_block_menu_block">
                            <div className="right_block_menu_item" onClick={this.hideShowBlock.bind(this,'people_hide')}>
                                <div className="right_block_img" >
                                    <img  src={people} width="35%"/>
                                </div>
                                <p>People</p>
                            </div>
                            <div className="right_block_menu_item" onClick={this.hideShowMainBlocks.bind(this,'transportation_hide')}>
                                <div className="right_block_img">
                                    <img  src={transport} width="60%"/>
                                </div>
                                <p>Transportation</p>
                            </div>
                        </div>
                        <div className="right_block_menu_block">
                            <div className="right_block_menu_item" onClick={this.hideShowMainBlocks.bind(this,'office_amenities')}>
                                <div className="right_block_img" >
                                    <img src={office} width="35%"/>
                                </div>
                                <p>Office Amenities</p>
                            </div>
                            <div className="right_block_menu_item" onClick={this.hideShowMainBlocksRest.bind(this,'restaurant_hide')}>
                                <div className="right_block_img">
                                    <img  src={food} width="60%"/>
                                </div>
                                <p>Food and Beverage</p>
                            </div>
                        </div>
                        <div className="right_block_menu_block">
                            <div className="right_block_menu_item" onClick={this.hideShowMainBlocks.bind(this,'building_amenities')}>
                                <div className="right_block_img" >
                                    <img  src={building} width="35%"/>
                                </div>
                                <p>Building Amenities</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="close_block_where_is">
                    <Link to="/homepage">
                        <div className="menu_link">&#10005;</div>
                    </Link>
                    <Link to="/whereis">
                        <div id="back_button"><span><img src={arrowBack}/></span></div>
                    </Link>
                </div>
            </div>
        );
    }
}
export default HowDoI;