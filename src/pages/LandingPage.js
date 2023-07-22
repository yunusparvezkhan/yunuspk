import React from 'react';
import IntroSection from './sections/IntroSection';
import AboutSection from './sections/AboutSection';
import './styles/landingpage.css'

const LandingPage = () => {
	return (
		<div className='landing-page text-white' >
			<IntroSection />
			<AboutSection />
		</div>
	);
}

export default LandingPage;
