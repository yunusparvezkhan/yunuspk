import React from 'react';
import { useSelector } from 'react-redux';
import IntroSection from './sections/IntroSection';
import AboutSection from './sections/AboutSection';
import './styles/landingpage.css'
import BlogsSection from './sections/BlogsSection';
import blogsData from './data/blogsData.json'
import ProjectsSection from './sections/ProjectsSection';

const LandingPage = () => {

	const { images, paragraph } = useSelector((state) => {
		return state.about;
	})

	const projectsData = [
		{
			id: "1",
			title: "Delta__108_sigma_006",
			subtitle: `Lorem Ipsum is a dummy text model that can be 
			used in any kind of paragraph examples.Lorem Ipsum is a dummy text model that can be used in any kind of paragraph examples.`,
			body: () => {
				return (
					<div>
						<h2>Hello from project component 1</h2>
					</div>
				)
			}
		},
		{
			id: "2",
			title: "rho_tifi",
			subtitle: `Lorem Ipsum is a dummy text model that can be 
			used in any kind of paragraph examples.Lorem Ipsum is a dummy text model that can be used in any kind of paragraph examples.`,
			body: () => {
				return (
					<div>
						<h2>Hello from project component 2</h2>
					</div>
				)
			}
		}
	]

	return (
		<div className='landing-page text-white' >
			<IntroSection />
			<AboutSection image={images[4].link} alt="something" bgcolor="#182d4a" borderColor="#20EC94" paragraph={paragraph.text} />
			<BlogsSection blogsData={blogsData} />
			<ProjectsSection projectsData={projectsData} />
		</div>
	);
}

export default LandingPage;
