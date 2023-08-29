import React, { useState } from 'react';
import Button from './Button';

const Slider = () => {

    const slides = [
        {
            image: "https://marketplace.canva.com/EAFNlUJs5g4/2/0/1600w/canva-white-simple-certificate-of-appreciation-Fcz7KkZ5YaU.jpg",
            title: "some certificate",
            description: "some description"
        },
        {
            image: "https://marketplace.canva.com/EAFNlUJs5g4/2/0/1600w/canva-white-simple-certificate-of-appreciation-Fcz7KkZ5YaU.jpg",
            title: "some certificate",
            description: "some description"
        },
        {
            image: "https://marketplace.canva.com/EAFNlUJs5g4/2/0/1600w/canva-white-simple-certificate-of-appreciation-Fcz7KkZ5YaU.jpg",
            title: "some certificate",
            description: "some description"
        },
        {
            image: "https://marketplace.canva.com/EAFNlUJs5g4/2/0/1600w/canva-white-simple-certificate-of-appreciation-Fcz7KkZ5YaU.jpg",
            title: "some certificate",
            description: "some description"
        },
        {
            image: "https://marketplace.canva.com/EAFNlUJs5g4/2/0/1600w/canva-white-simple-certificate-of-appreciation-Fcz7KkZ5YaU.jpg",
            title: "some certificate",
            description: "some description"
        }
    ]

    const [orientation, setOrientation] = useState(["alpha", "beta", "gamma", "delta", "epsilon"])

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