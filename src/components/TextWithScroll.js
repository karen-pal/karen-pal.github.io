
import React from 'react';
import '../App.css';
import './TextWithScroll.css';

function TextWithScroll() {
    return(
        <div>
        <div className='name'> Karen Palacio</div>
        <div className='words'>
            <div className='art'> ART </div>
            <div className='union'> U </div>
            <div className="scroll-window">
                <div className="scroll-container">
                    <div className="scrolling">DATA SCIENCE</div>
                    <div className="scrolling">PROGRAMMING</div>
                    <div className="scrolling">LIVECODING</div>
                    <div className="scrolling">MACHINE LEARNING</div>
                    <div className="scrolling">VJING</div>
                    <div className="scrolling">FEMINISM</div>
                    <div className="scrolling">PHILOSOPHY</div>
                    <div className="scrolling">COMPUTER SCIENCES</div>
                    <div className="scrolling">DATA SCIENCE</div>
                </div>
            </div>
        </div>
        </div>
    );
}
export default TextWithScroll;
