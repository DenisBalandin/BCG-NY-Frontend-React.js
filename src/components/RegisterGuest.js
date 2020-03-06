import React,{Component} from 'react';
import register from '../img/register.png';
import { db } from "../firebase";


class RegisterGuest  extends Component{
    constructor(props){
        super(props);
        this.state = {
            formSend:false
        }
    }
    sumbitGuest = () => {
        let goodForm = true;
        let text = 'Required text: ';
        let name = document.getElementsByClassName('full_name')[0].value;
        let company_name = document.getElementsByClassName('company_name')[0].value;
        let visitor = document.getElementsByClassName('visitor')[0].value;
        let dateSrrival = document.getElementsByClassName('date_arrival')[0].value;
        let timeTravel = document.getElementsByClassName('time_travel')[0].value;
        let nameContract = document.getElementsByClassName('name_of_contract')[0].value;
        let details = document.getElementsByClassName('details')[0].value;  
        if(name == ''){
            document.getElementById("requareText").innerHTML = text+"Full Name"; 
            goodForm = false;
        }else if(company_name == ''){
            document.getElementById("requareText").innerHTML = text+"Organization/Company"; 
            goodForm = false;
        }else if(visitor == ''){
            document.getElementById("requareText").innerHTML = text+"Visitor or Employee"; 
            goodForm = false;
        }else if(dateSrrival == ''){
            document.getElementById("requareText").innerHTML = text+"Date of arrival"; 
            goodForm = false;
        }else if(timeTravel == ''){
            document.getElementById("requareText").innerHTML = text+"Time of arrival";
            goodForm = false; 
        }else if(nameContract == ''){
            document.getElementById("requareText").innerHTML = text+"Name of contact on arrival"; 
            goodForm = false;
        }
        if(goodForm == true){
            db.collection("Guest").add({
                name: name,
                company_name: company_name,
                visitor:visitor,
                dateSrrival:dateSrrival,
                timeTravel:timeTravel,
                nameContract:nameContract,
                details:details
            });
            this.setState({
                formSend:true
            });
        }

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
                    <h1>Register a Guest </h1>
                    <h2>1.) Request Management System</h2>
                    <p>
                    To register a guest visit nycrms.bcg.com from a BCG laptop: http://nycrms.bcg.com  or go to the front desk for concierge or fill out all the information below so that we can properly add your guest(s):
                    </p>
                    <p id="requareText">Visitor Request Form (Required*)</p>
                    <form>
                    <div className="register_guest_form">
                        <input className="full_name" type="text" placeholder="Full Name:*" required/>
                        <input className="company_name" type="text" placeholder="Organization/Company:*" required/>
                        <input className="visitor" type="text" placeholder="Visitor or Employee:*" required/>
                        <input className="date_arrival" type="text" placeholder="Date of arrival:*" required/>
                        <input className="time_travel" type="text" placeholder="Time of arrival:*" required/>
                        <input className="name_of_contract" type="text" placeholder="Name of contact on arrival?:*" required/>
                        <input className="details"  type="text" placeholder="Additional details?" required/>
                    </div>
                    
                    <div className="send_form" onClick={this.sumbitGuest}>Submit</div>
                    </form>
                </div>
            </div>
        )
    }

}
export default RegisterGuest;