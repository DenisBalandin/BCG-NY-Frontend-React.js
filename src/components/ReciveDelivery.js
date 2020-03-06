import React from 'react';
import box_icon from '../img/box_icon.png';


function ReciveDelivery(){
    return(
        <div>
            <img src={box_icon}/>
            <h1>Receive a Delivery</h1>
            <h2>1.) Standard Courier</h2>
            <p>
                When you receive a package you may receive notification from the carrier that your package has arrived at the building, it still has to be delivered to our space which can sometimes take a few hours. Once we receive it, we’ll send an email from the NYC Office Services email notifying that your package is now in our care on the 47th floor. Packages can be picked up on 47  in the Office Services center.   Please ask the team to find the location of your package.
            </p>
            <h2>2.) Freight/Scheduled Delivery</h2>
            <p>
                Scheduling a delivery using the buildings freight elevators will require a certificate of insurance from the vendor/courier delivering. Please work with the Office Services team to obtain an example of the insurance requirements and to schedule your vendor for delivery.
            </p>
        </div>
    )
}
export default ReciveDelivery;