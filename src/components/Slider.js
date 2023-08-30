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

    const [orientation, setOrientation] = useState(slides.map((slide) => slide.codeName))

    const onNext = () => {
        const NewOrientation = orientation.slice(1)
        NewOrientation.push(orientation[0]);
        console.log(NewOrientation);
        setOrientation(NewOrientation);
    }

    const onPrevious = () => {
        const NewOrientation = orientation.slice(0, orientation.length - 1)
        NewOrientation.unshift(orientation[orientation.length - 1]);
        console.log(NewOrientation);
        setOrientation(NewOrientation);
    }

    return (
        <div>
            Slider
            <Button primary className="mb-40" onClick={onNext}>{"Next>>"}</Button>
            <Button primary className="mb-40" onClick={onPrevious}>{"Previous>>"}</Button>
        </div>
    )
}

export default Slider;