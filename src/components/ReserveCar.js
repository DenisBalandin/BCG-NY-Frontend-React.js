import React,{Component} from 'react';
import register from '../img/car_icon.png';
import { db } from "../firebase";

import map from '../img/map.png';
import arro from '../img/arro.png';
import curb from '../img/curb.png';
import lift from '../img/lift.png';
import juno from '../img/juno.png';
import uber from '../img/uber.png';

class ReserveCar  extends Component{
    constructor(props){
        super(props);
        this.state = {
            formSend:false
        }
    }
    reserveCar = () => {
        db.collection("ReserveCar").add({
            date_time: document.getElementsByClassName('date_time')[0].value,
            passenger: document.getElementsByClassName('passenger')[0].value,
            destination: document.getElementsByClassName('destination')[0].value,
            phone_number: document.getElementsByClassName('phone_number')[0].value,
            office: document.getElementsByClassName('office')[0].value,
            email: document.getElementsByClassName('email')[0].value,
            pick_up_location: document.getElementsByClassName('pick_up_location')[0].value,
            case_code: document.getElementsByClassName('case_code')[0].value,
            flight: document.getElementsByClassName('flight')[0].value,
            accaunt: document.getElementsByClassName('accaunt')[0].value,
        });
        this.setState({
            formSend:true
        });
    }
    goBack = () =>{
        this.setState({
            formSend:false
        });
    }
    render(){
        return(
            <div>
                <div id="thank_You" onClick={this.goBack} className= { this.state.formSend? "show_form" : "hide_form" }>
                    <div className="thank_You_text" >
                        <h1>Thank You.</h1>
                        <p>Your request has been submited. For any additional questions please go to our concierge desk for help.</p>
                        <h3 >Send another form</h3>
                    </div>
                </div>
                <div className= { this.state.formSend ? "hide_form" : "show_form" }>
                    <img src={register}/>
                    <h1>Reserve a Car</h1>
                    <div className="reserve_car_blocks">
                        <div className="reserve_car_text">
                            <h2>1.) Ride Options</h2>
                            <div><img src={arro}/><img src={curb}/><img src={lift}/><img src={juno}/><img src={uber}/></div>
                            <p>Pick up location: </p>
                            <p>Enter 500 West 30th Street as your pickup address; when you exit the building from the East Lobby, take the escalators to the street level and walk out of the doors facing 30th Street. You’re car will pick you up at the Think Coffee across the street from 10HY.</p>
                        </div>
                        <div className="reserve_car_img">
                            <div className="reserve_car_img_img">
                                <img src={map}/>
                            </div>
                            <div className="reserve_car_img_text">
                                <p>500 West</p> 
                                <p>30th Street</p>
                            </div>
                        </div>
                    </div>
                    <h2>2.) Concierge-booked</h2>
                    <p>Our BCG preferred black car service is Sunny’s; for important meetings or travel where you don’t want to risk Uber availability, please fill out the form below (Booking must be made at least 2 hours prior to pick up):</p>
                    <form>
                    <div className="register_guest_form">
                        <input className="date_time" type="text" placeholder="Date/Time:" />
                        <input className="passenger" type="text" placeholder="Passenger:" />
                        <input className="destination" type="text" placeholder="Destination:" />
                        <input className="phone_number" type="text" placeholder="Passenger Phone Number:" />
                        <input className="office" type="text" placeholder="Office:" />
                        <input className="email" type="text" placeholder="Passenger E-mail:" />
                        <input className="pick_up_location"  type="text" placeholder="Pick Up Location:" />
                        <input className="case_code"  type="text" placeholder="Case Code:" />
                        <input className="flight"  type="text" placeholder="Flight Information (if applicable):" />
                        <input className="accaunt"  type="text" placeholder="BCG Account #: 1962" />

                    </div>
                    
                    <div className="send_form" onClick={this.reserveCar}>Submit</div>
                    </form>
                </div>
            </div>
        )
    }

}
export default ReserveCar;