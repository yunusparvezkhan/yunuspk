import React from 'react';
import IntroSection from './sections/IntroSection';
import AboutSection from './sections/AboutSection';
import './styles/landingpage.css'
import BlogsSection from './sections/BlogsSection';
import ProjectsSection from './sections/ProjectsSection';

const LandingPage = () => {

	return (
		<div className='landing-page text-white' >
			<IntroSection />
			<AboutSection bgcolor="#182d4a" borderColor="#20EC94" />
			<BlogsSection />
			<ProjectsSection />
		</div>
	);
}

export default LandingPage;
