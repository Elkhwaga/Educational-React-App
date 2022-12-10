import React from 'react';
import './about.css';
import Back from '../common/back/Back';
import AboutCard from './AboutCard';
import AWrapper from './AWrapper';

const About = () => {
	return (
		<>
			<Back title="About Us" />
			<AboutCard />
			<AWrapper />
		</>
	);
};

export default About;
