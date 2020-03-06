import React from 'react';
import box_icon from '../../img/effective.png';
import effectiveDesignContent from '../../img/effective_design_content.png';


function Transportation(){
    return(
        <div className="content_design">
            <div className="top_image"><img src={box_icon}/></div> 
            <h1>Effective Design</h1>
            <h2>Compared to BCG’s previous office, 10HY has increased collaborative space and decreased square feet per person</h2>
            <div className="number_blocks">
                <div>
                    <div className="number">78%</div>
                    <p>more open seating space at 10HY1</p>
                </div>
                <div>
                    <div className="number">179%</div>
                    <p>more collaborative seats at 10HY2</p>
                </div>
                <div>
                    <div className="number">47%</div>
                    <p>fewer square feet per person at 10HY3 </p>
                </div>
            </div>
            <div className="small_text">
                1. Square footage devoted to open seating  2. Collaborative or “we” seats are seats meant for shared use 3. Based on USF/person at 430 Park in 2015 compared to 10HY at capacity
            </div>
            <div className="collision_border"></div>
            <h2>The Leesman survey: Its background and purpose</h2>
            <div className="effective_design_content_up">
                <div className="effective_design_content_text">
                    <strong>
                    The Leesman survey offers a standardized way to assess how well the workplace supports employee and organizational performance by measuring the following:
                    </strong>
                    <p>
                        - Workplace impact (e.g., place that BCGers are proud to bring  clients and visitors to)<br/>
                        - Workplace activities (e.g., informal, unplanned meetings)<br/>
                        - Physical features (e.g., desk, communal space)<br/>
                        - Service features (e.g., restaurant / canteen)<br/>
                    </p>
                    <strong>
                        The survey generates a transferable KPI of workplace effectiveness referred to as the Leesman ‘Lmi’
                    </strong>
                    <p>
                        This index is calculated for hundreds of other workplaces, giving companies the ability to compare results
                        The Lmi score is on a scale from 0 to 100
                    </p>
                </div>
                <div className="effective_design_content_image">
                    <img src={effectiveDesignContent}/>
                </div>
            </div>
            <div className="collision_border"></div>
            <h2>
                BCG NY has seen an improvement in workplace effectiveness / Lmi index since the move to 10HY
            </h2>
            <div className="effective_design_content_down">
                <div className="effective_design_content_left">
                    <div className="bg_block">
                        <p>Lmi before move (survey conducted September 2016)</p>
                    </div>
                    <div className="number_blocks">
                        <div className="number">
                            50.0
                        </div>
                        <p>
                            The pre-move survey results indicated  areas of necessary improvement in employee support for critical work activities & satisfaction with office space
                        </p>
                    </div>
                </div>
                <div className="effective_design_content_right">
                    <div className="bg_block">
                        <p>Lmi after move (survey conducted March 2017)</p>
                    </div>
                    <div className="number_blocks">
                        <div className="number">
                            78.5
                        </div>
                        <p>
                            We designed the 10HY space with these opportunities in mind and saw a 57% improvement in workplace effectiveness index
                        </p>
                    </div>
                </div>
            </div>
            <p>In May 2017, Leesman awarded BCG with the Leesman+ certificate1. Leesman+ represents the top 6% of workplaces</p>
        </div>
    )
}
export default Transportation;