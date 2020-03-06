import React from 'react';
import box_icon from '../../img/transport.png';


function Transportation(){
    return(
        <div>
            <img src={box_icon}/>
            <h1>Transportation</h1>
            <div className="transportation_block">
                <div className="transport_block_left">
                    <strong>Car</strong>
                    <p>Sunnys as well as taxi services. Where the cars will pick up: The front of the building near 10th avenue and 30th street.</p>
                    <strong>Train</strong>
                    <p>- NJ Transit<br/>
                        - LIRRt<br/>
                        - Metro Northt<br/>
                        - Amtrakt<br/>
                        </p>
                        <strong>Subway</strong>
                        <p>
                            - MTA<br/>      
                            - PATH
                        </p>
                        <strong>Helicopter</strong>
                        <p>
                            Special deal with Blade and location on the Westside
                        </p>
                </div>
                <div className="transport_block_right">
                    <strong>Airport</strong>
                    <p> - JFK<br/>
                        - Newark<br/>
                        - La Guardia<br/>
                        - Whiteplains<br/>
                        - Teterboro<br/>
                    </p>
                    <strong>Bike</strong>
                    <p>- Bike Room at 10HY<br/>
                        - CityBike
                        </p>
                    <strong>Bus </strong>
                    <p>
                        - NYC Bus<br/>
                        - Port Authority<br/>
                        - NJ Transit<br/>
                        - Regional Carriers<br/>
                    </p>
                    <strong>Boat</strong>
                    <p>- NY Waterway<br/>
                        - NYC Ferry</p>
                </div>
            </div>
            {/* <h2>1.) Standard Courier</h2>
            <p>
                When you receive a package you may receive notification from the carrier that your package has arrived at the building, it still has to be delivered to our space which can sometimes take a few hours. Once we receive it, we’ll send an email from the NYC Office Services email notifying that your package is now in our care on the 47th floor. Packages can be picked up on 47  in the Office Services center.   Please ask the team to find the location of your package.
            </p>
            <h2>2.) Freight/Scheduled Delivery</h2>
            <p>
                Scheduling a delivery using the buildings freight elevators will require a certificate of insurance from the vendor/courier delivering. Please work with the Office Services team to obtain an example of the insurance requirements and to schedule your vendor for delivery.
            </p> */}
        </div>
    )
}
export default Transportation;