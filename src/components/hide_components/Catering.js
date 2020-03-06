import React,{Component} from 'react';
import {Animated} from "react-animated-css";
import { db } from "../../firebase";
import 'animate.css/animate.css' 
import arrowBack from '../../img/arrow_back.png'

import bg_image from '../../img/restoran/bg_image.png';

import belcamp from '../../img/restoran/belcampo.png';
import belcamp_logo from '../../img/restoran/belcamo_logo.png';
import okawi from '../../img/restoran/okawi.png';
import okawi_logo from '../../img/restoran/okawi_logo.png';
import lena from '../../img/restoran/lena.png';
import lena_logo from '../../img/restoran/lena_logo.png';


import blueston from '../../img/restoran/blueston.jpg';
import blueston_logo from '../../img/restoran/blueston_logo.png';
import milos from '../../img/restoran/milos.png';
import milos_logo from '../../img/restoran/milos_logo.png';



class Restaurant extends Component{
    constructor(props){
        super(props);
        this.state = {
            part_3:false,
            part_rest:null,
            part_rest_item:true,
            restaurants:[]
        }
    }
    componentWillMount(){
        this.getAllRstaurants();
    }
    moveBackPart = (id) =>{
        document.getElementById('back_button_steps_3_catring').className = "show_button"; 
        this.setState({
            part_rest:null,
            part_rest_item:true,
        });
    }
    openRestaurant = (key) =>{
         document.getElementById('back_button_steps_3_catring').className = "hide_button"; 
        this.setState({
            part_rest:key,
            part_rest_item:false
        });
    }
    getAllRstaurants = () =>{
        db.collection("catering")
        .get()
        .then(querySnapshot => {
            let fullArray = [];
            const data = querySnapshot.docs.map(doc => doc.data());
            for(var int = 0; int < data.length; int++){
                fullArray[int] = {
                    count:int,
                    name: data[int].name,
                    menu:data[int].menu,
                    mainImage:data[int].mainImage,
                    logo:data[int].logo,
                    level:data[int].level,
                    firstImage:data[int].firstImage,
                    details:data[int].details,
                    description:data[int].description,
                    created:data[int].created,
                    contactName:data[int].contactName,
                    phone:data[int].phone,
                    email:data[int].email,
                }
            }
            this.setState({ restaurants: fullArray });
            // console.log(this.state.users);
        });
    }
    render(){
        return(
            <div>
                <h2 className= { this.state.part_rest_item ? "item_block_show" : "item_block_hide" }>Catering</h2>
                <div id="back_button_steps_4" onClick={this.moveBackPart.bind(this,2)} className= { this.state.part_rest_item ?  "hide_button":"show_button"  } >
                            <span>
                                <img src={arrowBack}/>
                            </span>
                        </div>  
                <Animated animationOut="fadeOut" isVisible={this.props.nextPart == 4 ? true : false}>
                    <div className= { this.state.part_rest_item ? "item_block_show" : "item_block_hide" }>
                        {this.state.restaurants.map((item,key)=>(
                            <div className="item_product_img" onClick={this.openRestaurant.bind(this,item.count)}>
                                <div className="item_product_image">
                                    <img src={item.firstImage} />
                                </div>
                            </div>
                        ))}  
                    </div>
                </Animated>
                       
                {this.state.restaurants.map((item,key)=>(
                    <Animated animationOut="fadeOut" isVisible={this.state.part_rest == item.count ? true : false}>
                        <div className= { this.state.part_rest == item.count ? "item_product_main_block_show" : "item_product_main_block_hide"  }>
                        {/* <div id="back_button_steps_4" onClick={this.moveBack.bind(this,3)}  >
                            <span>
                                <img src={arrowBack}/>
                            </span>
                        </div> */}
                            <div className="item_product_content">
                                <div className="cont_block_logo"><img src={item.logo} /></div>
                                <h4>{item.level}</h4>
                                <p>{item.description}</p>
                                <h4>{item.menu}</h4>
                                <div className="cont_block_border"></div>
                                <p>Contact: {item.contact}</p>
                                <p>{item.contact}</p>
                                <p>• Email: {item.email}</p>
                                <p>• Phone: {item.phone}</p>
                                <p>Details:</p>
                                <p>{item.details}</p>
                            </div>
                            <div className="item_product_image_content">
                                <img src={item.mainImage}/>
                            </div>
                        </div>
                    </Animated>
                ))}  
            </div>
        )
    }
}
export default Restaurant;