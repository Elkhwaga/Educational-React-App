import React from 'react';
import Title from '../common/title/Title';
import { online } from '../../dummydata';

const OnlineCourses = () => {
	return (
		<section className="online-courses">
			<div className="container">
				<Title subtitle="Courses" title="Browser Our Online Courses" />
				<div className="row d-flex flex-wrap">
					{online.map((data, index) => (
						<div className="col d-flex align-items-center" key={index}>
							<div className="content w-100 d-flex flex-column align-items-center">
								<div className="image">
									<img
										src={data.cover}
										alt=""
										className="image-display"
										width="60"
										height="60"
									/>
									<img
										src={data.hoverCover}
										alt=""
										className="image-hover"
										width="60"
										height="60"
									/>
								</div>
								<h5>{data.courseName}</h5>
								<span>{data.course}</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default OnlineCourses;
