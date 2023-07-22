import React from 'react';
import IntroSection from './components/IntroSection';
import AboutSection from './components/AboutSection';

const LandingPage = () => {
	return (
		<div className='landing-page' >
			<IntroSection />
			<AboutSection />
		</div>
	);
}

export default LandingPage;
