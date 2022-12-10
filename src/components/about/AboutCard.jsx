import React from 'react';
import Title from '../common/title/Title';
import { homeAbout } from '../../dummydata';

const AboutCard = () => {
	return (
		<section className="about-card">
			<div className="container">
				<div className="row d-flex ">
					<div className="content-left p-0">
						<img src="/images/about.webp" alt="" className="img-fluid h-100" />
					</div>
					<div className="content-right d-flex justify-content-center flex-column">
						<Title
							subtitle="Learn Anything"
							title="Benefits About Online Learning Expertise"
						/>
						<div className="box d-flex justify-content-center flex-column">
							{homeAbout.map((data) => (
								<div
									className="content d-flex justify-content-center align-items-center"
									key={data.id}
								>
									<img src={data.cover} alt="" width="60" height="60" />
									<div className="box">
										<h4>{data.title}</h4>
										<p>{data.desc}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutCard;
