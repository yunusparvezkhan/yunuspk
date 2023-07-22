import React from 'react';
import IntroSection from './sections/IntroSection';
import AboutSection from './sections/AboutSection';
import './styles/landingpage.css'

import image from '../media/photos/ypk-2019-setup-selfie.png'


const LandingPage = () => {

	const para =
		`
			I am a Bharatiya scholar. I'm a Full Stack Web Developer, UI/UX Designer, YouTuber,
			Filmmaker. I have an adventurous life and a lots of experiences. I love to
			research things by digging deep onto the topics. My fields of expertise are
			Web Development, Network Architecture, Computer Architecture, Blockchain,
			Web - 3 etc. And I'm also pretty much into Physics, Psychology, Philosophy,
			Geo - Politics, Economics, Socialism.
		`

	return (
		<div className='landing-page text-white' >
			<IntroSection />
			<AboutSection image={image} alt="something" bgcolor="#182d4a" borderColor="#20EC94" paragraph={para} />
		</div>
	);
}

export default LandingPage;
