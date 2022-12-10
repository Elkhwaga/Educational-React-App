import React from 'react';
import Title from '../common/title/Title';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
	return (
		<section className="hero vh-100">
			<div className="container d-flex align-items-end h-100">
				<div className="row w-50">
					<Title subtitle="Welcome To Acdaemia" title="Best Online Education" />
					<p className="text-white">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et impedit
						obcaecati aperiam nesciunt consequatur, explicabo, deserunt
						veritatis, provident nisi voluptates tenetur. Excepturi saepe et
						nihil libero, quasi, fugit itaque. Dolor.
					</p>
					<div className="box d-flex">
						<div className="btn btn-primary shadow-sm">
							<span>Get Started Now</span>
							<span>
								<FontAwesomeIcon icon={faLongArrowAltRight} />
							</span>
						</div>
						<div className="btn btn-light shadow-sm">
							<span>View Course</span>
							<span>
								<FontAwesomeIcon icon={faLongArrowAltRight} />
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
