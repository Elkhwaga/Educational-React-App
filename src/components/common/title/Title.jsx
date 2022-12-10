import React from 'react';

const Title = ({ subtitle, title }) => {
	return (
		<>
			<p className="subtitle text-uppercase text-white">{subtitle}</p>
			<h2 className="title text-white">{title}</h2>
		</>
	);
};

export default Title;
