import React, {Component} from 'react';
import {BrowserRouter as Router,Route, Link} from 'react-router-dom';
import flag from './img/flag.png';
import arrow from './img/arrow_menu.png';


class HowDoI extends Component{
    constructor(props){
        super(props);
        this.state = {
            hideBlock:''
        }
    }
    hideShowBlock = (id) =>{
        document.getElementById('filtr_block').className += "hideClass"; 
        document.getElementById('right_block_menu').className += "hideClass"; 
        setTimeout(function(){
            document.getElementById(id).className += "showClass"; 
            document.getElementById('back_button').className += "showButton"; 
        }, 1000);
    };
    render(){
        return(
            <div id="now_do_i">
                <div id="left_block">
                    <div className="how_do_email">bcg@NY</div>
                    <div className="title">Emergency</div>
                    <div className="title_border"></div>
                    <div className="left_block_links">
                    <Link to="/whereis">Where Is? <span><img src={arrow}/></span></Link>
                        <Link to="/search">Search<span><img src={arrow}/></span></Link>
                        <Link to="/emergency">Emergency info<span><img src={arrow}/></span></Link>
                        <Link to="/howdoi">How Do I?<span><img src={arrow}/></span></Link>
                    </div>
                </div>
                <div id="right_block">
                    <div id="find_workspace_hide">
                        <img src={flag}/>
                        <p>Find a Workspace</p>
                        <div>Sign-in</div>
                    </div>
                    <div id="right_block_menu">
                    
                    </div>
                </div>
                <div className="close_block">
                    {/* <Link to="/homepage">
                        <div className="menu_link">&#10005;</div>
                    </Link>
                    <Link to="/howdoi">
                        <div id="back_button"><span>&#10552;</span></div>
                    </Link> */}
                </div>
            </div>
        );
    }
}
export default HowDoI;