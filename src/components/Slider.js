import React, { useState } from 'react';

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

    const onNext = async () => {
        const NewOrientation = orientation.slice(1)
        NewOrientation.push(orientation[0]);
        console.log(NewOrientation);
        setOrientation(NewOrientation);
    }

    return (
        <div>
            Slider
            <button onClick={onNext}>Next</button>
        </div>
    )
}

export default Slider;