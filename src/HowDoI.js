import React, {Component} from 'react';
import {BrowserRouter as Router,Route, Link} from 'react-router-dom';
import ReciveDelivery from './components/ReciveDelivery';
import OfficeAfter from './components/OfficeAfter';
import PrintSomething from './components/hide_components/PrintSomething';
import RegisterGuest from './components/RegisterGuest';
import ReserveCar from './components/ReserveCar';
import OpenBCGAdmin from './components/hide_components/OpenBCGAdmin';

import filter from './img/filter_icon.png';
import flag from './img/flag.png';
import box_icon from './img/box_icon.png';
import wifi from './img/wifi.png';
import office from './img/office.png';
import printer from './img/printer.png';
import order from './img/food_icon.png';
import register from './img/register.png';
import alert_icon from './img/alert.png';
import car from './img/car_icon.png';
import qrCode from './img/QR_code.png';
import arrow from './img/arrow_menu.png';
import arrowBack from './img/arrow_back.png'

class HowDoI extends Component{
    constructor(props){
        super(props);
        this.state = {
            hideBlock:'',
            testName: ""
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
        document.getElementById('right_block').className += "hideClass"; 
        
        setTimeout(() => {
            this.setState({ testName: "close_block_up" })
            // document.getElementById('close_block').className = "close_block_up"; 
            document.getElementById(id).className += "showClassMain"; 
            document.getElementById('back_button').className += "showButton"; 
        }, 1000);
    };

    render(){
        return(
            <div id="now_do_i">
                <div id="receve_delivery_hide">
                    <ReciveDelivery/>
                </div>
                <div id="office_after_hide">
                    <OfficeAfter/>
                </div>
                <div id="print_something_hide">
                    <PrintSomething/>
                </div>
                <div id="register_a_guest">
                    <RegisterGuest/>
                </div>
                <div id="Reserve_a_Car">
                    <ReserveCar/>
                </div>
                <div id="Open_BCG_admin">
                    <OpenBCGAdmin/>
                </div>
                <div id="left_block">
                    <div className="how_do_email">
                        <strong>bcg</strong>
                        <p className="email_icon">@</p>
                        <strong>NY</strong>
                    </div>
                    <div className="title">How Do I?</div>
                    <div className="title_border"></div>
                    <div className="left_block_links">
                        <Link to="/whereis">Where Is? <span><img src={arrow}/></span></Link>
                        <Link to="/search">Search<span><img src={arrow}/></span></Link>
                        <Link to="/emergency">Emergency info<span><img src={arrow}/></span></Link>
                        <Link to="/whoweare">Who we are<span><img src={arrow}/></span></Link>
                    </div>
                </div>
                <div id="right_block">
                    {/* <div id="find_workspace_hide">
                        <img src={flag}/>
                        <p>Find a Workspace</p>
                        <div>Sign-in</div>
                        <div onClick={this.hideShowMainLinks.bind(this,'Open_BCG_admin','find_workspace_hide')}>Sign-in</div>

                    </div> */}
                    <div id="connect_to_wifi_hide">
                        <img src={wifi}/>
                        <p>Connect to Wifi</p>
                        <div>Network: Publicwork;</div>
                        <span>Password: Publicnet63!</span>
                    </div>
                    <div id="order_catering_hide">
                        <img src={order}/>
                        <p>Order Catering</p>
                        <div>Learn More</div>
                    </div>
                    <div id="report_issue_hide">
                        <img src={alert_icon}/>
                        <p>Report a maintenance request</p>
                        <div>To report an issue or something you’ve noticed around the office or you just have a question and don’t know who to ask; point your iPhone in camera mode at the QR code below: </div>
                        <div className="qr_code_img"><img src={qrCode}/></div>
                    </div>
                    {/* <div id="filtr_block" >
                        <div className="sort_by"><img src={filter}/> Sort by</div>
                        <div className="alphabit">Alphabetically</div>
                        <div className="popular">Popular</div>
                    </div> */}
                    <div id="right_block_menu">
                        <div className="right_block_menu_block">
                            <div className="right_block_menu_item" onClick={this.hideShowMainBlocks.bind(this,'Open_BCG_admin')}>
                                <div className="right_block_img" >
                                    <img className="" src={flag} width="35%"/>
                                </div>
                                <p>Find a Workspace</p>
                            </div>
                    
                            <div className="right_block_menu_item" onClick={this.hideShowMainBlocks.bind(this,'receve_delivery_hide')}>
                                <div className="right_block_img">
                                    <img className=""  src={box_icon} width="60%"/>
                                </div>
                                <p>Receve a Delivery</p>
                            </div>
                        </div>
                        <div className="right_block_menu_block">
                            <div className="right_block_menu_item" onClick={this.hideShowBlock.bind(this,'connect_to_wifi_hide')}>
                                <div className="right_block_img">
                                    <img className="" src={wifi} width="50%" />
                                </div>
                                <p>Connect to Wifi</p>
                            </div>
                            <div className="right_block_menu_item" onClick={this.hideShowMainBlocks.bind(this,'office_after_hide')}>
                                <div className="right_block_img">
                                    <img  className=""  src={office} width="45%" />
                                </div>
                                <p>Office After Hours</p>
                            </div>
                        </div>
                        <div className="right_block_menu_block">
                            <div className="right_block_menu_item" onClick={this.hideShowMainBlocks.bind(this,'print_something_hide')}>
                                <div className="right_block_img">
                                    <img  className="" src={printer} width="50%"/>
                                </div>
                                <p>Print Something</p>
                            </div>
                            <div className="right_block_menu_item" onClick={this.hideShowMainBlocks.bind(this,'Open_BCG_admin')}>
                                <div className="right_block_img">
                                    <img  className="" src={order} width="50%"/>
                                </div>
                                <p>Order Catering</p>
                            </div>
                        </div>
                        <div className="right_block_menu_block">
                            <div className="right_block_menu_item" onClick={this.hideShowMainBlocks.bind(this,'register_a_guest')}>
                                <div className="right_block_img">
                                    <img src={register} width="50%"/>
                                </div>
                                <p>Register a Guest</p>
                            </div>
                            <div className="right_block_menu_item" onClick={this.hideShowBlock.bind(this,'report_issue_hide')}>
                                <div className="right_block_img">
                                    <img className="" src={alert_icon} width="50%"/>
                                </div>
                                <p>Report an Issue</p>
                            </div>
                        </div>
                        <div className="right_block_menu_block">
                            <div className="right_block_menu_item" onClick={this.hideShowMainBlocks.bind(this,'Reserve_a_Car')}>
                                <div className="right_block_img">
                                    <img className="" src={car} width="50%"/>
                                </div>
                                <p>Reserve a car</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="close_block" className={this.state.testName}>
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