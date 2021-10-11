import React from 'react';
import '../App.css';
import './TextWithScroll.css';

function TextWithScroll() {
    return(
        <div>
        <div className='words'>
            <div className='art'> ø </div>
            <div className='union'> U </div>
            <div className="scroll-window">
                <div className="scroll-container">
                    <div className="scrolling">PROGRAMMING</div>
                    <div className="scrolling">LIVECODING</div>
                    <div className="scrolling">MACHINE LEARNING</div>
                    <div className="scrolling">VJING</div>
                    <div className="scrolling">DIGITAL ART</div>
                    <div className="scrolling">0</div>
                    <div className="scrolling">PROGRAMMING</div>
                </div>
            </div>
        </div>
        </div>
    );
}
export default TextWithScroll;
