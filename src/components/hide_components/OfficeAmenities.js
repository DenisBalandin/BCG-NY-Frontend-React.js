import React from 'react';
import box_icon from '../../img/office2.png';

function Transportation(){
    return(
        <div>
            <img src={box_icon}/>
            <h1>Office Amenities</h1>
            <div className="transportation_block">
                <div className="transport_block_left">
                <strong>Shower Rooms</strong>
                <p>Located on 42, towels , body wash, conditioner, L’Occitane, dental and shaving kits available at concierge</p>

                <strong>Mother’s Rooms</strong>
                <p>Breast Pumps, Sink, Refrigerators, Phone</p>

                <strong>Wellness Rooms</strong>
                <p>Lounge Chair, Sink, Phone, Refrigerator</p>

                <strong>Fitness Space</strong>
                <p>Elliptical or Treadmill</p>

                <strong>Copy Rooms</strong>
                <p>Black and White Printer, Color Printer, Office Supplies, Medicine Cabinet</p>
                </div>
                <div className="transport_block_right">
                    <strong>IT</strong>
                    <p>Computer cables, Chargers, HDMI, IT needs, Repairs</p>

                    <strong>HR</strong>
                    <p>Paychecks, OT inquiries, Immigration, USCIS</p>

                    <strong>Finance</strong>
                    <p>Paychecks/Reimbursement Checks, Expenses, Budgets, Accounts Payable</p>

                    <strong>Office Services</strong>
                    <p>Print Jobs, Furniture Set up, Packages and Mailing, Catering</p>

                    <strong>Concierge</strong>
                    <p>Wayfinding, Room Booking, Car booking, Badges (Visitor and Permanent)</p>
                </div>
            </div>
        </div>
    )
}
export default Transportation;