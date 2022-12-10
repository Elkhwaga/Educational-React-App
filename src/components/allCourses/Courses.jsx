import React from 'react';
import Back from '../common/back/Back';
import CoursesCard from './CoursesCard';
import OnlineCourses from './OnlineCourses';

import './courses.css';

const Courses = () => {
	return (
		<>
			<Back title="Explore Courses" />
			<CoursesCard />
			<OnlineCourses />
		</>
	);
};

export default Courses;
