import React from 'react';
import Hero from './Hero';
import HBlog from './HBlog';
import HPrice from './HPrice';
import HCourse from './HCourse';
import AboutCard from '../about/AboutCard';
import Testiomonal from '../testiomonal/Testiomonal';
import OnlineCourses from '../allCourses/OnlineCourses';

import './home.css';

const Home = () => {
	return (
		<>
			<Hero />
			<AboutCard />
			<HCourse />
			<OnlineCourses />
			<Testiomonal />
			<HBlog />
			<HPrice />
		</>
	);
};

export default Home;
