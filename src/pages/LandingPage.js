import React from 'react';
import { useSelector } from 'react-redux';
import IntroSection from './sections/IntroSection';
import AboutSection from './sections/AboutSection';
import './styles/landingpage.css'

const LandingPage = () => {

	const { image1, paragraph } = useSelector((state) => {
		return state.about;
	})

	return (
		<div className='landing-page text-white' >
			<IntroSection />
			<AboutSection image={image1.link} alt="something" bgcolor="#182d4a" borderColor="#20EC94" paragraph={paragraph.text} />
		</div>
	);
}

export default LandingPage;
