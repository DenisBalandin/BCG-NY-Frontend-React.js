import React,{Component} from 'react';
import {Animated} from "react-animated-css";
import {BrowserRouter as Router,Route, Link} from 'react-router-dom';
import 'animate.css/animate.css' 
import RestaurantPart3 from './RestaurantPart3';
import Catering from '../hide_components/Catering';
import arrowBack from '../../img/arrow_back.png'
import Suggestions from '../hide_components/Suggestions';
import order_icon from '../../img/order_icon.png';
import hudson from '../../img/restoran/hudson.png';
import restaurant_icon from '../../img/restoran/restaurant.png';
import hudson_icon from '../../img/restoran/hudson_icon.png';
import dining from '../../img/restoran/dining.png';
import catering from '../../img/restoran/catering.png';
import { waitForDomChange } from '@testing-library/react';


class Restaurant extends Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         open_block: 1,
    //         part_1:true,
    //         part_2:false,
    //         part_3:false,
    //     }
    // }
    state = {
        open_block: 1,
        part_1:true,
        part_2:false,
        part_3:false,
    }
    hideBackButton = () =>{
        // document.getElementById('back_button').className = "hideBackButton"; 
    }
    moveToNextPart = (id) =>{
        if(id != 1){
            document.getElementById('back_button').className = "hideBackButton"; 
        }
        if(id == 5){
            document.getElementById('close_block_where_is').className = "hide_button"; 
        }
        this.setState({
            open_block: id,
        });
    }
    moveBack = (id) =>{
        if(id == 1){
            document.getElementById('back_button').className = "showBackButton"; 
        }
        if(id == 6){
            document.getElementById('close_block_where_is').className = "show_button_new"; 

            this.setState({
                open_block: 1,
            });
        }else{
            this.setState({
                open_block: id,
            });
        }
    }
    sdfsd = (id) =>{
        return waitForDomChange;
    }
    render(){
        return(
            <div>
                <Animated  animationOut="fadeOut"  isVisible={this.state.open_block == 1 ? true : false}>
                    <div className= { this.state.open_block == 1 ? "show_rest_part" : "hide_rest_part" }>
                    <div id="back_button_steps_2" ><Link to="/whereis"><span><img src={arrowBack}/></span></Link></div>
                        <div className="part_1_icon"><img src={order_icon}/></div>
                        <h1>Food and Beverage</h1>
                        <div className="part_img">
                            <div>
                                <img src={hudson} onClick={this.moveToNextPart.bind(this, 2)}/>
                            </div>
                            <div>
                                <img src={restaurant_icon} onClick={this.moveToNextPart.bind(this, 5)}/>
                            </div>
                        </div>
                    </div>
                </Animated>
                
                <Animated animationOut="fadeOut" isVisible={this.state.open_block == 2 ? true : false}>             
                    <div className= { this.state.open_block == 2 ? "show_rest_part" : "hide_rest_part" }>
                    <div id="back_button_steps_2" onClick={this.moveBack.bind(this,1)}><span><img src={arrowBack}/></span></div>

                        <div className="part_logo"><img src={hudson_icon}/></div>
                        <div className="part_img">
                            <div>
                                <img src={dining}  onClick={this.moveToNextPart.bind(this, 3)}/>
                            </div>
                            <div>
                                <img src={catering} onClick={this.moveToNextPart.bind(this, 4)}/>
                            </div>
                        </div>
                    </div>
                </Animated>
                       
                <Animated animationOut="fadeOut" isVisible={this.state.open_block == 3 ? true : false}>
                    <div id="restaurant_part_3" className= { this.state.open_block == 3 ? "show_rest_part" : "hide_rest_part" }>
                        <div id="back_button_steps_3" onClick={this.moveBack.bind(this,2)}  >
                            <span>
                                <img src={arrowBack}/>
                            </span>
                        </div>  
                        <RestaurantPart3 nextPart={this.state.open_block}/>
                    </div>
                </Animated>
                <Animated animationOut="fadeOut" isVisible={this.state.open_block == 4 ? true : false}>
                    <div id="restaurant_part_3" className= { this.state.open_block == 4 ? "show_rest_part" : "hide_rest_part" }>
                        <div id="back_button_steps_3_catring" onClick={this.moveBack.bind(this,2)}  >
                            <span>
                                <img src={arrowBack}/>
                            </span>
                        </div>  
                        <Catering nextPart={this.state.open_block}/>
                    </div>
                </Animated>
                <Animated animationOut="fadeOut" isVisible={this.state.open_block == 5 ? true : false}>
                    <div id="restaurant_part_3" className= { this.state.open_block == 5 ? "show_rest_part" : "hide_rest_part" }>
                        <div id="close_button_menu">
                            <Link to="/homepage">
                                <div className="menu_link">&#10005;</div>
                            </Link>
                        </div>  
                        <div id="back_button_steps_3_catring_new" onClick={this.moveBack.bind(this,6)}  >
                            <span>
                                <img src={arrowBack}/>
                            </span>
                        </div>  
                        <Suggestions nextPart={this.state.open_block}/>
                    </div>
                </Animated>
            </div>
        )
    }
}
//
export default Restaurant;