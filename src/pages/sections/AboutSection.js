import React from 'react';
import './styles/about-section.css';

import HexagonImage from '../../components/HexagonImage';
import image from '../../media/photos/ypk-2019-setup-selfie.png'

const AboutSection = () => {
    return (
        <div>
            <div className='border w-3/4 h-600px relative lftf hexagon-image-container' >
                <HexagonImage image={image} alt="something" />
            </div>
        </div>
    )
}

export default AboutSection