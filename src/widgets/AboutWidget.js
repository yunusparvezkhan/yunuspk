import React from 'react';
import './styles/about-widget.css';

import HexagonImage from '../components/HexagonImage';
import Button from '../components/Button';
import { GiArmoredBoomerang } from 'react-icons/gi'
import Link from '../components/Link';

import { useFetchAboutWidgetQuery } from '../store';

const AboutWidget = ({ bgcolor, borderColor }) => {

    const { data, error, isLoading } = useFetchAboutWidgetQuery();

    if (isLoading) {
        return <div>Loading</div>
    } else if (error) {
        return <div>Error Loading Data. Please check your connection</div>
    } else {

        const fetchImage = data.images[4];
        return (
            <div className='relative left-1/2 ttf about-widget' >
                <div className='relative left-1/2 top-1/2 ttff flex items-center w-fit about-widget-container'>
                    <div className='about-widget-hex-container' >
                        <HexagonImage
                            image={fetchImage.link}
                            alt={fetchImage.alt}
                            bgcolor={bgcolor}
                            borderColor={borderColor}
                        />
                    </div>
                    <div className='flex flex-col about-widget-content' >
                        <h1 className='text-5xl ml-10 w-fit ' >a bit about me !</h1>

                        <p className='ml-10 mt-10 font-sans about-para' >
                            {data.paragraph}
                        </p>

                        <Link to='/about'>
                            <Button primary
                                className="mt-10 px-6 font-mono about-widget-more-btn"
                            >
                                More
                                <GiArmoredBoomerang className='ml-2' />
                            </Button>
                        </Link>

                    </div>
                </div>
            </div >
        )
    }
}

export default AboutWidget;