import React from 'react';
import { useSelector } from 'react-redux';
import IntroSection from './IntroSection';
import AboutSection from './AboutSection';
import './styles/landingpage.css'

const LandingPage = () => {

	const { images, paragraph } = useSelector((state) => {
		return state.about;
	})

	return (
		<div className='landing-page text-white' >
			<IntroSection />
			<AboutSection image={images[4].link} alt="something" bgcolor="#182d4a" borderColor="#20EC94" paragraph={paragraph.text} />
		</div>
	);
}

export default LandingPage;
