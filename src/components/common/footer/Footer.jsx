import React from 'react';
import { Link } from 'react-router-dom';
import NewLetter from './NewLetter';
import { blog } from '../../../dummydata';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebookF,
	faInstagram,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
	faUser,
	faCalendarAlt,
	faLongArrowAltRight,
	faMap,
	faPhoneAlt,
	faPaperPlane,
	faHeart,
} from '@fortawesome/free-solid-svg-icons';

import './footer.css';

const Footer = () => {
	return (
		<>
			<NewLetter />
			<footer>
				<div className="container">
					<div className="row d-flex">
						<div className="col-2">
							<div className="box">
								<h2 className="text-uppercase">Academia</h2>
								<span>Online Education & Learning</span>
								<p>
									A small river named Duden flows by their place and supplies it
									with the necessary regelialia.
								</p>

								<div className="social d-flex align-items-center">
									<span className="d-flex align-items-center justify-content-center">
										<FontAwesomeIcon icon={faFacebookF} />
									</span>
									<span className="d-flex align-items-center justify-content-center">
										<FontAwesomeIcon icon={faInstagram} />
									</span>
									<span className="d-flex align-items-center justify-content-center">
										<FontAwesomeIcon icon={faTwitter} />
									</span>
								</div>
							</div>
						</div>
						<div className="col-2">
							<h4>Explore</h4>
							<ul>
								<li>
									<span>
										<FontAwesomeIcon icon={faLongArrowAltRight} />
									</span>
									<Link to="/about">About Us</Link>
								</li>
								<li>
									<span>
										<FontAwesomeIcon icon={faLongArrowAltRight} />
									</span>
									<Link to="/about">Services</Link>
								</li>
								<li>
									<span>
										<FontAwesomeIcon icon={faLongArrowAltRight} />
									</span>
									<Link to="/courses">Courses</Link>
								</li>
								<li>
									<span>
										<FontAwesomeIcon icon={faLongArrowAltRight} />
									</span>
									<Link to="/journal">Blog</Link>
								</li>
								<li>
									<span>
										<FontAwesomeIcon icon={faLongArrowAltRight} />
									</span>
									<Link to="/contact">Contact Us</Link>
								</li>
							</ul>
						</div>
						<div className="col-2">
							<h4>Quick Links</h4>
							<ul>
								<li>
									<span>
										<FontAwesomeIcon icon={faLongArrowAltRight} />
									</span>
									<Link to="/contact">Contact Us</Link>
								</li>
								<li>
									<span>
										<FontAwesomeIcon icon={faLongArrowAltRight} />
									</span>
									<Link to="/pricing">Pricing</Link>
								</li>
								<li>
									<span>
										<FontAwesomeIcon icon={faLongArrowAltRight} />
									</span>
									<Link to="/journal">Terms & Conditions</Link>
								</li>
								<li>
									<span>
										<FontAwesomeIcon icon={faLongArrowAltRight} />
									</span>
									<Link to="/courses">Privacy</Link>
								</li>
								<li>
									<span>
										<FontAwesomeIcon icon={faLongArrowAltRight} />
									</span>
									<Link to="/about">Feedbacks</Link>
								</li>
							</ul>
						</div>
						<div className="col-3">
							<h4>Recent Post</h4>
							{blog.slice(0, 3).map((data) => (
								<div className="card d-flex" key={data.id}>
									<div className="image w-25">
										<img src={data.cover} alt="" className="img-fluid h-100" />
									</div>
									<div className="card-body w-75">
										<div className="actions d-flex">
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
										</div>

										<div className="info">
											<h5>{data.title.slice(0, 40)}</h5>
										</div>
									</div>
								</div>
							))}
						</div>
						<div className="col-3">
							<div className="questions">
								<h4>Have a Questions?</h4>
								<ul>
									<li>
										<span>
											<FontAwesomeIcon icon={faMap} />
										</span>
										203 Fake St. Mountain View, San Francisco, California, USA
									</li>
									<li>
										<span>
											<FontAwesomeIcon icon={faPhoneAlt} />
										</span>
										+2 392 3929 210
									</li>
									<li>
										<span>
											<FontAwesomeIcon icon={faPaperPlane} />
										</span>
										info@yourdomain.com
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<p className="copyright">
					Copyright ©2022 All rights reserved | This template is made with
					<span>
						<FontAwesomeIcon icon={faHeart} />
					</span>
					by Mohamed Elkhwaga
				</p>
			</footer>
		</>
	);
};

export default Footer;
