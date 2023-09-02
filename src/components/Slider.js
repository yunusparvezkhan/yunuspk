import React, { useState } from 'react';
import Button from './Button';

import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'

const Slider = ({ slides, activeCard, onActiveCardChange }) => {

    const [orientation, setOrientation] = useState(slides.map((slide) => slide));
    const [transformNum, setTransformNum] = useState(0);
    const [scrollDifTracker, setScrollDifTracker] = useState(0);
    const [scrollTracker, setScrollTracker] = useState(0);

    const onNext = () => {
        document.getElementById('cards-container').style.transform = `translate(${transformNum - 264}px)`;
        setTransformNum(transformNum - 264);
        const NewOrientation = orientation;
        scrollDifTracker === 0 &&
            NewOrientation.push(orientation[scrollTracker]);
        setOrientation(NewOrientation);
        scrollDifTracker > 0 && setScrollDifTracker(scrollDifTracker - 1);
        setScrollTracker(scrollTracker + 1);
        activeCard === slides.length - 1 ? onActiveCardChange(0) : onActiveCardChange(activeCard + 1);
    }

    const onPrevious = () => {
        document.getElementById('cards-container').style.transform = `translate(${scrollTracker >= 0 && transformNum + 264}px)`;
        scrollTracker >= 0 && setTransformNum(transformNum + 264);
        scrollTracker >= 0 && setScrollTracker(scrollTracker - 1);
        scrollTracker >= 0 && setScrollDifTracker(scrollDifTracker + 1);
        scrollTracker >= 0 && onActiveCardChange(activeCard - 1);
    }

    const renderCards = orientation.map((slide, i) => {
        return (
            <div key={i}>
                <div className={`${scrollTracker + 1 === i ? 'w-360px' : 'w-240px mx-3'}`} >
                    <div className='text-center flex flex-col gap-1' >
                        <img src={slide.image} className={`${scrollTracker + 1 === i ? 'w-360px h-270px' : 'w-240px h-180px mt-5'}`} alt='slide.title' />
                        {scrollTracker + 1 !== i &&
                            < h3 className='text-xs' >
                                {slide.title}
                            </h3>
                        }
                    </div>
                </div>
            </div >
        )
    })

    return (
        <div>
            <h1 className='text-center text-3xl mb-10' >
                Slider
            </h1>
            <div className='flex flex-row relative w-fit left-1/2 ttf items-center mb-10 gap-3 px-3' >
                {
                    scrollTracker < 0 ?
                        <button className='px-3 py-2 mb-10 bg-blue-500 opacity-70 cursor-not-allowed'><AiFillCaretLeft /></button>
                        : <Button primary className="mb-10" onClick={onPrevious}><AiFillCaretLeft /></Button>
                }
                <div className='py-3 cards-group ' >
                    <div id='cards-container' className='flex flex-row justify-between items-center w-auto cards-container' >
                        {renderCards}
                    </div>
                </div>
                <Button primary className="mb-10" onClick={onNext}><AiFillCaretRight /></Button>
            </div>
        </div>
    )
}

export default Slider;