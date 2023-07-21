import React from 'react';
import './styles/landingpage.css';
import ypkWelcome from '../media/photos/ypk-welcome.png';
import introSecFooter from './elements/intro-sec-footer.svg'

const LandingPage = () => {
	return (
		<div className='landing-page' >
			<div className='sec-intro relative w-full'>
				<div className='sec-intro-container text-white lftf t-0 absolute h-full w-1kpx'>
					<h4>Hello.Namaste</h4>
					<h5>I am</h5>
					<h1>Yunus</h1>
					<h3>Parvez</h3>
					<h2>Khan</h2>
					<img
						alt="Yunus Parvez Khan smilling and introducing something"
						src={ypkWelcome}
						className='h-600px absolute t-100px right-0'
					/>
				</div>
				<img src={introSecFooter} className='intro-sec-footer absolute w-full' alt='Intro Section Footer Effect' />

			</div>
		</div>
	);
}

export default LandingPage;
