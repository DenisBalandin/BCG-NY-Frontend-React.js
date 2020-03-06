import React from 'react';
import office from '../img/office.png';


function OfficeAfter(){
    return(
        <div>
            <img src={office}/>
            <h1>Office After Hours</h1>
            <h2>1.) Standard Courier</h2>
            <h3>Food Delivery</h3>
            <p>
            - All food deliveries need to be picked up street level in the East lobby of 10 Hudson Yards. Please make sure to have a Visitor Badge or Building Badge to be able to re-enter the BCG space.
            </p>
            <h3>2.) HVAC</h3>
            <p>
            - Building supplied comfort heating and cooling is provided M-F 7AM - 6PM.
            </p>
            <h3>3.) Technology (Link to IT Video)</h3>
            <p>
                - How to use Devio
                - How to use iPad
                - How to use telephone/spider phone
                - How to use Hudson/Metropolis/Café
                - Reach out to IT prior to use
            </p>
            <h3>4.) Emergencies</h3>
            <p>- Point to the Emergency information page</p>
        </div>
    )
}
export default OfficeAfter;