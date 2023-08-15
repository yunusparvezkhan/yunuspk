import React from 'react';
import IntroSection from './sections/IntroSection';
import AboutSection from './sections/AboutSection';
import './styles/landingpage.css'
import BlogsSection from './sections/BlogsSection';
import ProjectsSection from './sections/ProjectsSection';
import IntroWidget from '../../components/widgets/IntroWidget';
import AboutWidget from '../../components/widgets/AboutWidget';
import BlogsWidget from '../../components/widgets/BlogsWidget';
import ProjectsWidget from '../../components/widgets/ProjectsWidget';

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
