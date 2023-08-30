import React, { useState } from 'react';
import Button from './Button';

import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'

const Slider = () => {

    const slides = [
        {
            image: "https://marketplace.canva.com/EAFNlUJs5g4/2/0/1600w/canva-white-simple-certificate-of-appreciation-Fcz7KkZ5YaU.jpg",
            title: "some certificate",
            codeName: "alpha",
            description: "some description"
        },
        {
            image: "https://marketplace.canva.com/EAFNlUJs5g4/2/0/1600w/canva-white-simple-certificate-of-appreciation-Fcz7KkZ5YaU.jpg",
            title: "some certificate",
            codeName: "beta",
            description: "some description"
        },
        {
            image: "https://marketplace.canva.com/EAFNlUJs5g4/2/0/1600w/canva-white-simple-certificate-of-appreciation-Fcz7KkZ5YaU.jpg",
            title: "some certificate",
            codeName: "gamma",
            description: "some description"
        },
        {
            image: "https://marketplace.canva.com/EAFNlUJs5g4/2/0/1600w/canva-white-simple-certificate-of-appreciation-Fcz7KkZ5YaU.jpg",
            title: "some certificate",
            codeName: "delta",
            description: "some description"
        },
        {
            image: "https://marketplace.canva.com/EAFNlUJs5g4/2/0/1600w/canva-white-simple-certificate-of-appreciation-Fcz7KkZ5YaU.jpg",
            title: "some certificate",
            codeName: "epsilon",
            description: "some description"
        }
    ]

    const [orientation, setOrientation] = useState(slides.map((slide) => slide))

    const onNext = () => {
        const NewOrientation = orientation.slice(1)
        NewOrientation.push(orientation[0]);
        setOrientation(NewOrientation);
    }

    const onPrevious = () => {
        const NewOrientation = orientation.slice(0, orientation.length - 1)
        NewOrientation.unshift(orientation[orientation.length - 1]);
        setOrientation(NewOrientation);
    }

    const cards = orientation.map((slide) => {
        return (
            <div key={slide.codeName} className='w-180px h-240px bg-gray-700'>
                <div className='text-center' >
                    <h3 className='mb-10 mt-10' >
                        {slide.title}
                    </h3>
                    <label>
                        {slide.codeName}
                    </label>
                </div>
            </div>
        )
    })

    return (
        <div>
            <h1 className='text-center text-3xl mb-10' >
                Slider
            </h1>
            <div className='flex flex-row relative w-fit left-1/2 ttf items-center mb-20 gap-3 px-3' >
                <Button primary className="" onClick={onPrevious}><AiFillCaretLeft /></Button>
                <div className='flex flex-row gap-2 justify-between ' >
                    {cards}
                </div>
                <Button primary className="" onClick={onNext}><AiFillCaretRight /></Button>
            </div>
        </div>
    )
}

export default Slider;