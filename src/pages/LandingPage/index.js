import React from 'react';
import { useSelector } from 'react-redux';
import IntroSection from './sections/IntroSection';
import AboutSection from './sections/AboutSection';
import './styles/landingpage.css'
import BlogsSection from './sections/BlogsSection';
import ProjectsPage from '../ProjectsPage';
import blogsData from './data/blogsData.json'

const LandingPage = () => {

	const { images, paragraph } = useSelector((state) => {
		return state.about;
	})

	return (
		<div className='landing-page text-white' >
			<IntroSection />
			<AboutSection image={images[4].link} alt="something" bgcolor="#182d4a" borderColor="#20EC94" paragraph={paragraph.text} />
			<BlogsSection blogsData={blogsData} />
			<ProjectsPage />
		</div>
	);
}

export default LandingPage;
