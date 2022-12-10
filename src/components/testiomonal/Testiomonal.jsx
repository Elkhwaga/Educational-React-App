import React from 'react';
import Title from '../common/title/Title';
import { testimonal } from '../../dummydata';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

import './testiomonal.css';

const Testiomonal = () => {
	return (
		<section className="testiomonal">
			<div className="container">
				<Title subtitle="testiomonal" title="Our Successful Students" />
				<div className="row d-flex">
					{testimonal.map((data) => (
						<div className="col" key={data.id}>
							<div className="card">
								<div className="card-header d-flex align-items-center">
									<div className="image">
										<img src={data.cover} alt="" className="img-fluid h-100" />
									</div>
									<div className="info">
										<h4>{data.name}</h4>
										<p>{data.post}</p>
										<span>
											<FontAwesomeIcon icon={faQuoteLeft} />
										</span>
									</div>
								</div>
								<div className="card-body">
									<p>{data.desc}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testiomonal;
