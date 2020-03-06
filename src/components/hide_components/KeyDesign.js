import React from 'react';
import box_icon from '../../img/key.png';
import contentimage1 from '../../img/content_design_1.png';
import contentimage2 from '../../img/content_design_2.png';



function Transportation(){
    return(
        <div className="content_design">
            <div className="content_design_jeft_block">
                <div className="top_image"><img src={box_icon}/></div> 
                <h1>Key Design Considerations</h1>
                <strong>Creating affiliation through “collisions” in the cafe, staircases, and neighborhoods</strong>
                <p>• The cafe serves as a hub for the office, a central place for employees to connect, supported by the food programs<br/>
                   • Each floor has a public space that acts as its own town square; open staircases allow for visibility and further connection<br/>
                   • Neighborhoods organize employees by practice area for knowledge transfer, and balance seniority level to encourage mentorship; each floor has a unique theme to create “destinations” for staff members<br/>
                </p>
                <strong>Concierge replaces the traditional reception desk</strong>
                <p>
                • Concierge provides a much more intimate and interactive experience and removes the physical barrier of the reception desk, allowing guests to feel welcomed from the moment they arrive
                </p>
                <strong>Flexibility in space design – six major room “types,” each with its own use to optimize for productivity</strong>
                <p>• Rooms themselves are flexible (e.g., can be sub-divided); convertibles flex from an office to a small meeting room<br/>
                   • Majority of desks are not assigned, so employees can collocate with others based on project
                </p>
                <strong>Health and wellness top of mind</strong>
                <p>• Furniture is not only appealing but also ergonomic; 75% of the desks are sit-stand<br/>
                   • Treadmill and elliptical desks allow employees to stay active, and are complemented by full showers and healthy snacks<br/>
                   • Wellness rooms support private moments for relaxation, nursing mothers and more
                </p>
                <strong>Employee voice incorporated in every step of the design: from ideation to piloting the space</strong>
                <p>• Variety of pre and post-move research conducted to understand how individuals move through space and what employees are looking for in their “dream” office<br/>
                   • Created a true pilot space with new dimensions and furniture before moving to “test run” the design
                </p>
            </div>
            <div className="content_design_right_block">
                <img src={contentimage1}/>
                <img src={contentimage2}/>
            </div>
          
        </div>
    )
}
export default Transportation;