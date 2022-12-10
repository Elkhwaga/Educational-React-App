import React from 'react';
import { useLocation } from 'react-router-dom';

const Back = ({ title }) => {
	const location = useLocation();

	return (
		<section className="back d-flex flex-column align-items-center justify-content-center vh-100">
			<p className="text-white">Home / {location.pathname.split('/')[1]}</p>
			<h2 className="text-white">{title}</h2>
		</section>
	);
};

export default Back;
