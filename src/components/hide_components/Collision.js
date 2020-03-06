import React from 'react';
import box_icon from '../../img/colission.png';
import collisionImage1 from '../../img/collision_image_1.png';
import collisionImage2 from '../../img/collision_image_2.png';
import collisionimage3 from '../../img/collision_image_3.png';


function Transportation(){
    return(
        <div className="content_design">
            <div className="top_image"><img src={box_icon}/></div> 
            <h1>Collision Coefficient</h1>
            <div className="collision_image_block">
                <div>
                    <p>Collisions are serendipitous encounters among individuals, which drive the exchange of information, foster community, and ultimately increase innovation and productivity </p>
                </div>
                <img src={collisionImage1}/>
            </div>
            <div className="collision_image_block">
                <img src={collisionImage2}/>
                <div>
                    <p>Collisions are serendipitous encounters among individuals, which drive the exchange of information, foster community, and ultimately increase innovation and productivity </p>
                </div>
            </div>
            <div className="collision_border"></div>
            <h2>BCG NY leveraged cutting-edge technology to measure theability of workspace to drive “collisions” and productivity</h2>
            <div className="down_collision_block">
                <div className="text_block_collision">
                    <strong>
                        Pilot program launched in old office and continued in new office
                    </strong>
                    <p>
                        - Phase 1 piloted in old office: Aug - Oct 2016 <br/>- Phase 2 in new office: Feb - Apr 2017
                    </p>
                    <strong>
                        Pilot program informed efficacy of new office space in achieving increased “collisions1” or “quick interactions1” and a tighter office network
                    </strong>
                    <p>
                        - Data collected to assess these goals include individuals’ location, speech, and interaction data as well as digital communication.
                    </p>
                    <strong>
                    Pilot program informed efficacy of new office space in achieving increased “collisions1” or “quick interactions1” and a tighter office network
                    </strong>
                    <p>
                        - Employees are 30% more active in new office<br/>
                        - Employees experience 10% more “collisions” or “quick interactions” overall per day2 and 56% more in open areas<br/>
                        - Degrees of separation among employees reduced by 18%<br/>
                        - Long term goal is to solidify the relationship between interactions and productivity
                    </p>
                </div>
                <div className="image_block_collision">
                    <img src={collisionimage3}/>
                </div>
            </div>
        </div>
    )
}
export default Transportation;