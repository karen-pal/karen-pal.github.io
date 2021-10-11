import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from '../sketches/circles.js';
import {withRouter} from 'react-router';
function Birth() {
    return(
        <div>
            <div className='birth'>
                <P5Wrapper sketch={sketch} ></P5Wrapper>
            </div>
        </div>
    )
}
export default withRouter(Birth);
