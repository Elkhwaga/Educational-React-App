import React from 'react';
import Title from '../common/title/Title';
import { blog } from '../../dummydata';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faUser,
	faCalendarAlt,
	faComments,
} from '@fortawesome/free-solid-svg-icons';

const HBlog = () => {
	return (
		<section className="blog">
			<div className="container">
				<Title subtitle="Our Blog" title="Recent From Blog" />
				<div className="row d-flex">
					{blog.slice(0, 3).map((data) => (
						<div className="col" key={data.id}>
							<div className="card">
								<div className="image">
									<img src={data.cover} alt="" className="img-fluid h-100" />
								</div>
								<div className="card-body">
									<div className="actions d-flex justify-space-between">
										<span>
											<span className="icon">
												<FontAwesomeIcon icon={faUser} />
											</span>
											{data.type}
										</span>

										<span>
											<span className="icon">
												<FontAwesomeIcon icon={faCalendarAlt} />
											</span>
											{data.date}
										</span>

										<span>
											<span className="icon">
												<FontAwesomeIcon icon={faComments} />
											</span>
											{data.com}
										</span>
									</div>

									<div className="info">
										<h4>{data.title}</h4>
										<p>{data.desc}</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
export default HBlog;
