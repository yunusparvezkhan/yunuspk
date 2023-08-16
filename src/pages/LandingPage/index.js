import React from 'react';
import './styles/landingpage.css'
import IntroWidget from '../../widgets/IntroWidget';
import AboutWidget from '../../widgets/AboutWidget';
import BlogsWidget from '../../widgets/BlogsWidget';
import ProjectsWidget from '../../widgets/ProjectsWidget';

const LandingPage = () => {

	return (
		<div className='landing-page text-white' >
			<IntroWidget />
			<AboutWidget bgcolor="#182d4a" borderColor="#20EC94" />
			<BlogsWidget />
			<ProjectsWidget />
		</div>
	);
}

export default LandingPage;
