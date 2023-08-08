import React from 'react';
import IntroSection from './sections/IntroSection';
import AboutSection from './sections/AboutSection';
import './styles/landingpage.css'
import BlogsSection from './sections/BlogsSection';
import ProjectsSection from './sections/ProjectsSection';

import blogsData from './data/blogsData.json'
import projectsData from './data/projectsData';

const LandingPage = () => {

	return (
		<div className='landing-page text-white' >
			<IntroSection />
			<AboutSection bgcolor="#182d4a" borderColor="#20EC94" />
			<BlogsSection />
			<ProjectsSection projectsData={projectsData} />
		</div>
	);
}

export default LandingPage;
