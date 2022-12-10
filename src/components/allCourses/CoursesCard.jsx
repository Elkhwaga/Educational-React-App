import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { coursesCard } from '../../dummydata';

const CoursesCard = () => {
	return (
		<section className="courses-card">
			<div className="container">
				<div className="row d-flex flex-wrap">
					{coursesCard.map((data) => (
						<div className="col">
							<div className="card" key={data.id}>
								<div className="header">
									<div className="info d-flex">
										<div className="image d-flex align-items-center justify-content-center">
											<img
												src={data.cover}
												alt=""
												className="img-fluid h-100"
											/>
										</div>
										<div className="right">
											<h5>{data.coursesName}</h5>
											<div className="statrs d-flex">
												<ul className="d-flex">
													<li>
														<FontAwesomeIcon icon={faStar} />
													</li>
													<li>
														<FontAwesomeIcon icon={faStar} />
													</li>
													<li>
														<FontAwesomeIcon icon={faStar} />
													</li>
													<li>
														<FontAwesomeIcon icon={faStar} />
													</li>
													<li>
														<FontAwesomeIcon icon={faStar} />
													</li>
												</ul>
												<span>(5.0)</span>
											</div>
											{/*./starts*/}
											<div className="card-body">
												{data.courTeacher.map((item, index) => (
													<div
														className="info d-flex align-items-center flex-wrap"
														key={index}
													>
														<div className="image">
															<img
																src={item.dcover}
																alt=""
																className="img-fluid h-100"
															/>
														</div>
														<h6>{item.name}</h6>
														<p className="w-100">{item.totalTime}</p>
													</div>
												))}
											</div>
										</div>
									</div>
								</div>
								<p className="price">
									{data.priceAll} / {data.pricePer}
								</p>
								<button className="btn outline-primary">Enroll Now!</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default CoursesCard;
