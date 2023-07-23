import React from 'react';
import './styles/about-section.css';

import HexagonImage from '../../components/HexagonImage';

const AboutSection = ({ image, alt, bgcolor, borderColor, paragraph }) => {
    return (
        <div className='w-3/4 relative left-1/2 ttf about-section' >
            <div className='relative left-1/2 top-1/2 ttff flex items-center w-fit about-section-container'>
                <div className='about-section-hex-container' >
                    <HexagonImage
                        image={image}
                        alt={alt}
                        bgcolor={bgcolor}
                        borderColor={borderColor}
                    />
                </div>
                <div className='flex flex-col items-start about-section-content' >
                    <h1 className='text-5xl ml-10 w-fit ' >a bit about me !</h1>
                    <p className='ml-10 mt-10 about-para' >
                        {paragraph}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutSection