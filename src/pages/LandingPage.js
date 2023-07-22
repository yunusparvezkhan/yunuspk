import React from 'react';
import IntroSection from './sections/IntroSection';
import AboutSection from './sections/AboutSection';

const LandingPage = () => {
	return (
		<div className='landing-page' >
			<IntroSection />
			<AboutSection />
		</div>
	);
}

export default LandingPage;
