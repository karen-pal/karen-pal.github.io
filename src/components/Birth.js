import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from '../sketches/circles.js';
import {withRouter} from 'react-router';
import {Link} from "react-router-dom";
import unificacion from '../sketches/assets/fondos/unificacion.png';
import CircleGradient from './CircleGradient.js';
function Birth() {
    return(
        <div>
            <CircleGradient/>
            <div className='go-root'>
                <Link to="/birth"> <button>⇜</button></Link>
            </div>
            <img className='unificacion' src={unificacion} alt="diagram showcasing unification process"/>
        </div>
    )
}
export default withRouter(Birth);
