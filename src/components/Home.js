
import React, {  Suspense } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from '../sketches/helix_line.js';
import foreImg from '../sketches/assets/fondos/foreground-min.png';
import backImg from '../sketches/assets/fondos/background-min.png';
import '../App.css';
import TextWithScroll from './TextWithScroll.js';

import {withRouter} from 'react-router';
function Home() {
    return(<div>
                <div className='helix-line'>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <P5Wrapper sketch={sketch} ></P5Wrapper>
                </Suspense>
                </div>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <img className='dibujo' src={foreImg} alt="handdrawn flower"/>
                </Suspense>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <div className='crop'>
                        <img className='dibujo-back' src={backImg} alt="abstract flower petals"/>
                    </div>
                </Suspense>
                <TextWithScroll/>
            </div>
        )
}
export default withRouter(Home);
