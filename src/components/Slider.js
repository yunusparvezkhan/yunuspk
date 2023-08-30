import React, { useState } from 'react';
import Button from './Button';

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
            <div className='w-180px h-240px bg-gray-700'>
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
            Slider
            <Button primary className="mb-40" onClick={onNext}>{"Next>>"}</Button>
            <Button primary className="mb-40" onClick={onPrevious}>{"Previous>>"}</Button>
            <div className='mb-20 flex flex-row gap-2 justify-between w-70per relative left-1/2 ttf' >
                {cards}
            </div>
        </div>
    )
}

export default Slider;