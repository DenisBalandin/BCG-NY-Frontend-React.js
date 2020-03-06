import React from 'react';
import box_icon from '../../img/building.png';

function Transportation(){
    return(
        <div>
            <img src={box_icon}/>
            <h1>Building Amenities</h1>
            <div className="transportation_block">
                <div className="transport_block_left">
                <strong>Bike room</strong>
                    <p>A bike storage place located on the -1 floor in 10 Hudson Yards. Elevator located near side entrance to 20 Hudson Yards. Has lockers, a bike station, and places to keep your bike</p>

                    <strong>Parking Garage</strong>
                    <p>Car garage located below building on the -1 floor. Rates are based on time of day. [INCLUDE RATES]</p>

                    <strong>ATM</strong>
                    <p>Wells Fargo ATM’s located on the first floor of the mall along with a Wells Fargo located on the SE side of the building on the corner of 10th Avenue and 30th street.</p>

                    <strong>Highline</strong>
                    <p>Description</p>

                    <strong>Mall Entrance</strong>
                    <p>From 10HY to the Mall</p>
                </div>
            </div>
        </div>
    )
}
export default Transportation;