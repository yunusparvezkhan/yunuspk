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
            image: "https://marketplace.canva.com/EAFHBiEZGD8/1/0/1600w/canva-red-and-yellow-minimalist-employee-of-the-month-certificate-67ATPnoOO0M.jpg",
            title: "some certificate",
            codeName: "beta",
            description: "some description"
        },
        {
            image: "https://img.freepik.com/free-vector/flat-certificate-template_52683-61537.jpg?w=2000",
            title: "some certificate",
            codeName: "gamma",
            description: "some description"
        },
        {
            image: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/certificate-of-appreciation-design-template-7289b7fef37b1bda2dc3527df90bfe87_screen.jpg?ts=1631442106",
            title: "some certificate",
            codeName: "delta",
            description: "some description"
        },
        {
            image: "https://cdn.cp.adobe.io/content/2/rendition/21d3dc6d-9d20-4833-bb77-6b7e80e5f46b/artwork/c4040e75-5023-4d2f-9037-3a1b9b487988/version/0/format/jpg/dimension/width/size/400",
            title: "some certificate",
            codeName: "epsilon",
            description: "some description"
        }
    ]

    const [orientation, setOrientation] = useState(slides.slice(0, 5).map((slide) => slide))

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
                <div className='text-center flex flex-col gap-3' >
                    <h3 className='pt-3' >
                        {slide.title}
                    </h3>
                    <label>
                        {slide.codeName}
                    </label>
                    <img src={slide.image} alt='slide.title' />
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