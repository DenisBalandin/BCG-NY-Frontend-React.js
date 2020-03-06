import React from 'react';
import box_icon from '../../img/bcg_icon.png';
import experience from '../../img/experience.png'
import engagement from '../../img/engagement.png'
import i_matter from '../../img/i_matter.png'
import conected from '../../img/conected.png'
import smart from '../../img/smart.png'


function Transportation(){
    return(
        <div>
            <img src={box_icon}/>
            <h1>BCG NY Purpose</h1>
            <div id="purpose_text">
                <span>An environment that </span>fosters brilliant, diverse and passionate people to connect and cultivate ideas that shape the future.
            </div>
            <div id="purpose_img_block">
                <div>
                    <img src={experience}/>
                    <p>COMPELLING EXPERIENCE</p>
                </div>
                <div>
                    <img src={engagement}/>
                    <p>FULL ENGAGEMENT</p>
                </div>
                <div>
                    <img src={i_matter}/>
                    <p>“I MATTER”</p>
                </div>
                <div>
                    <img src={conected}/>
                    <p>CONNECTED</p>
                </div>
                <div>
                    <img src={smart}/>
                    <p>SMART,<br/> EASY & SIMPLE</p>
                </div>
            </div>
        </div>
    )
}
export default Transportation;