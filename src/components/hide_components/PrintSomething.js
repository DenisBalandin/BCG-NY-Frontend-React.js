import React, {Component} from 'react';
import printer from '../../img/printer.png';
import printerIcon from '../../img/printer_icon.png';
import keyCard from '../../img/key_card.png';
import floor42 from '../../img/floor_42.png';
import floor43 from '../../img/floor_43.png';
import floor44 from '../../img/floor_44.png';
import floor45 from '../../img/floor_45.png';
import floor46 from '../../img/floor_46.png';
import floor47 from '../../img/floor_47.png';

class OfficeAfter extends Component{
    constructor(props){
        super(props);
        this.state={
            floor42: false,
            floor43: false,
            floor44: false,
            floor45: false,
            floor46: false,
            floor47: false
        }
    }
    handleClick = (id) => {
        // this.setState({floor42: !this.state.floor42});
        this.setState({floor42: false,floor43: false,floor44: false,floor45: false,floor46: false,floor47: false})
        if(id == 42){ this.setState({floor42: !this.state.floor42});}
        if(id == 43){ this.setState({floor43: !this.state.floor43});}
        if(id == 44){ this.setState({floor44: !this.state.floor44});}
        if(id == 45){ this.setState({floor45: !this.state.floor45});}
        if(id == 46){ this.setState({floor46: !this.state.floor46});}
        if(id == 47){ this.setState({floor47: !this.state.floor47});}
    }
    render(){
        return(
            <div><div id="blurbg"></div>
                <img src={printer}/>
                <h1>Print Something</h1>
                <h2>1. Printing instructions and location of printers (Self Service)</h2>
                <h3>HOW TO PRINT</h3>
                {/* <h3>Instructions for BCG Employees only. Guest, please see Concierge for assistance.</h3> */}
                <div className="printInsrtuction">
                    <div className="instruction1">
                        <div className="number">1.</div>
                        <div className='text'>Make sure you’re on our wireless network <br/>(WLANWork)</div>
                    </div>
                <div className="instruction2">
                        <div className="number">2.</div>
                        <div className='text'>
                            <h3>Add the printers to your computer if you haven’t done so</h3>
                            <p>To add printers, go to your Windows Start button, “run” or “search”<br/> and type \\nycprt03v "hit enter"</p>
                        </div>
                    </div>
                    <div className="instruction3">
                        <div className="number">3.</div>
                        <div className='text'>
                            <h3>Locate the appropriate printers:</h3>
                            <h3><img src={printerIcon}/>Follow You-HP B&W</h3>
                            <h3><img src={printerIcon}/>Follow You-HP Color</h3>
                            <p>These two print questions will allow your to print to all printers in<br/> the NYC office. One is for B&W and the other is for Color.</p>
                        </div>
                    </div>
                    <div className="instruction4">
                        <div className="number">4.</div>
                        <div className='text'>
                            These two print questions will allow your to print to all printers in the NYC office. One is for B&W and the other is for Color.
                        </div>
                        <div className="card_key">
                            <img src={keyCard}/>
                        </div>
                    </div>
                </div>

                <p>*If you do NOT have a physical badge, you may enter BCG Window username (Last space First name) and password on the touch screen. 
                (All of the abouve steps apply to individuals with ought badges)</p>

                <p>Location</p>
                <div id="spoiler_block">
                    <div id="floor_button_42"   onClick={ this.handleClick.bind(this,'42') } >
                        <p id="spoiler_arrow" className= { this.state.floor42 ? "show_arrow" : "hide_arrow" }>&#8249;</p><p className="floor_number_text">NYC-42nd Floor</p>
                    </div>
                    <div id="floor_42" className= { this.state.floor42 ? "show_floor" : "hide_floor" }>
                        <div className="spoiler_img">
                            <img src={floor42}/>
                        </div>
                        <div className="spolier_text">
                            <p>42.26.N
                            NYC - 42nd Floor
                            New York City</p>
                            <div className="floor_border"></div>
                            <p>42.01.S
                            NYC - 42nd Floor
                            New York City</p>
                        </div>
                    </div>
                    <div id="floor_button_42"   onClick={ this.handleClick.bind(this,'43') } >
                        <p id="spoiler_arrow" className= { this.state.floor43 ? "show_arrow" : "hide_arrow" }>&#8249;</p><p className="floor_number_text">NYC-43nd Floor</p>
                    </div>
                    <div id="floor_42" className= { this.state.floor43 ? "show_floor" : "hide_floor" }>
                        <div className="spoiler_img">
                            <img src={floor43}/>
                        </div>
                        <div className="spolier_text">
                            <p>43.24.N
                                NYC - 43rd Floor
                                New York City</p>
                            <div className="floor_border"></div>
                            <p>43.01.S
                                NYC - 43rd Floor
                                New York City</p>
                        </div>
                    </div>
                    <div id="floor_button_42"   onClick={ this.handleClick.bind(this,'44') } >
                        <p id="spoiler_arrow" className= { this.state.floor44 ? "show_arrow" : "hide_arrow" }>&#8249;</p><p className="floor_number_text">NYC-44nd Floor</p>
                    </div>
                    <div id="floor_42" className= { this.state.floor44 ? "show_floor" : "hide_floor" }>
                        <div className="spoiler_img">
                            <img src={floor44}/>
                        </div>
                        <div className="spolier_text">
                            <p>44.25.N
                                NYC - 44th Floor
                                New York City</p>
                            <div className="floor_border"></div>
                        </div>
                    </div>
                    <div id="floor_button_42"   onClick={ this.handleClick.bind(this,'45') } >
                        <p id="spoiler_arrow" className= { this.state.floor45 ? "show_arrow" : "hide_arrow" }>&#8249;</p><p className="floor_number_text">NYC-45nd Floor</p>
                    </div>
                    <div id="floor_42" className= { this.state.floor45 ? "show_floor" : "hide_floor" }>
                        <div className="spoiler_img">
                            <img src={floor45}/>
                        </div>
                        <div className="spolier_text">
                            <p>45.19.N
                                NYC - 45th Floor
                                New York City</p>
                            <div className="floor_border"></div>
                            <p>45.09.W
                                NYC - 45th Floor
                                New York City
                            </p>
                        </div>
                    </div>
                    <div id="floor_button_42"   onClick={ this.handleClick.bind(this,'46') } >
                        <p id="spoiler_arrow" className= { this.state.floor46 ? "show_arrow" : "hide_arrow" }>&#8249;</p><p className="floor_number_text">NYC-46nd Floor</p>
                    </div>
                    <div id="floor_42" className= { this.state.floor46 ? "show_floor" : "hide_floor" }>
                        <div className="spoiler_img">
                            <img src={floor46}/>
                        </div>
                        <div className="spolier_text">
                            <p>46.01.S
                                NYC - 46th Floor
                                New York City</p>
                            <div className="floor_border"></div>
                        </div>
                    </div>
                    <div id="floor_button_42"   onClick={ this.handleClick.bind(this,'47') } >
                        <p id="spoiler_arrow" className= { this.state.floor47 ? "show_arrow" : "hide_arrow" }>&#8249;</p><p className="floor_number_text">NYC-47nd Floor</p>
                    </div>
                    <div id="floor_42" className= { this.state.floor47 ? "show_floor" : "hide_floor" }>
                        <div className="spoiler_img">
                            <img src={floor47}/>
                        </div>
                        <div className="spolier_text">
                            <p>47.20.N
                                NYC - 47th Floor
                                New York City</p>
                            <div className="floor_border"></div>
                            <p>47.01.S
                            NYC - 47th Floor
                            New York City</p>
                        </div>
                    </div>
                </div>
                {/* Spoiler end */}
                <h2>2. Office Services Printing</h2>
                <p>Office Services is able to assist with large or complex print jobs during regular weekday business hours (7AM-6PM). For particularly large jobs or jobs requiring a quick turnaround you may be directed to print your documents with FedEx Office.</p>
                <p>To request that a file be printed please visit the NYC Services Portal at nycrms.bcg.com and click the “Request Printing for Pickup” button.</p>
                <h3>Request Printing for Pickup</h3>
                <h2>3. FedEx Printing information</h2>
                <p>Our closest 24 Hour FedEx Office location is: 500 7th Avenue, New York, NY 10018 (0.41 miles away from BCG NY)</p>
                <p>Phone: (646) 366-9166</p>
                <p>Email: usa0961@fedex.com</p>
                <p>Hours: 24 hours, 7 days a week</p>
                <p>You can process your order electronically or in person:</p>
                <h3>EMAIL</h3>
                <p>Email your order details to any FedEx Office print center and include your BCG discount number (0470053569), print instructions, contact info, project due date/time and request a proof (if needed)</p>
                <h3>IN PERSON</h3>
                <p>Visit a FedEx Office print center location in person</p>
                <p>• Bring your document files and/or hard-copy examples</p>
                <p>• Present the BCG <span className="discnumber">discount number: 0470053569</span> at checkout to ensure BCG discounts are applied.</p>
                <p>Always make sure to call the print center to confirm the order, special instructions and turnaround time. If you have questions about quoted turnaround times or would like service beyond what is being offered from the print center you can email our account representative at : shawn.muskie@fedex.com</p>
            </div>
        )
    }
}
export default OfficeAfter;