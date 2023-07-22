import React from 'react';
import './styles/about-section.css';

import HexagonImage from '../../components/HexagonImage';

const AboutSection = ({ image, alt, bgcolor, borderColor, paragraph }) => {
    return (
        <div className='about-section' >
            <div className='border w-3/4 h-600px relative left-1/2 ttf' >
                <div className='relative left-1/2 top-1/2 ttff flex w-fit'>
                    <HexagonImage image={image} alt={alt} bgcolor={bgcolor} borderColor={borderColor} />
                    <div className='flex flex-col' >
                        <h1 className='text-5xl ml-10 w-fit ' >a bit about me !</h1>
                        <p className='about-para ml-10 mt-10 text-lg' >
                            {paragraph}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection