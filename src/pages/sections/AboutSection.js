import React from 'react';
import './styles/about-section.css';

import HexagonImage from '../../components/HexagonImage';
import image from '../../media/photos/ypk-2019-setup-selfie.png'

const AboutSection = () => {
    return (
        <div className='about-section' >
            <div className='border w-3/4 h-600px relative left-1/2 ttf' >
                <div className='relative left-1/2 top-1/2 ttff flex w-fit'>
                    <HexagonImage image={image} alt="something" bgcolor="#182d4a" borderColor="#20EC94" />
                    <div className='flex flex-col' >
                        <h1 className='text-5xl ml-10 w-fit ' >a bit about me !</h1>
                        <p className='about-para ml-10 mt-10 text-lg' >
                            I am a Bharatiya scholar. I'm a Full Stack Web Developer, UI/UX Designer, YouTuber,
                            Filmmaker. I have an adventurous life and a lots of experiences. I love to
                            research things by digging deep onto the topics. My fields of expertise are
                            Web Development, Network Architecture, Computer Architecture, Blockchain,
                            Web-3 etc. And I'm also pretty much into Physics, Psychology, Philosophy,
                            Geo-Politics, Economics, Socialism.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection