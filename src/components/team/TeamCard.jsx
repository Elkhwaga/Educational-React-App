import React from 'react';
import { team } from '../../dummydata';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebookF,
	faInstagram,
	faTwitter,
	faYoutube,
	faTiktok,
} from '@fortawesome/free-brands-svg-icons';

const TeamCard = () => {
	return (
		<section className="team-card">
			<div className="container">
				<div className="row d-flex flex-wrap">
					{team.map((data, index) => (
						<div className="col" key={index}>
							<div className="card">
								<div className="image">
									<img src={data.cover} alt="" className="img-fluid h-100" />
								</div>
								<div className="card-body">
									<div className="social d-flex align-items-center flex-column">
										<span className="d-flex align-items-center justify-content-center">
											<FontAwesomeIcon icon={faFacebookF} />
										</span>
										<span className="d-flex align-items-center justify-content-center">
											<FontAwesomeIcon icon={faInstagram} />
										</span>
										<span className="d-flex align-items-center justify-content-center">
											<FontAwesomeIcon icon={faTwitter} />
										</span>
										<span className="d-flex align-items-center justify-content-center">
											<FontAwesomeIcon icon={faTiktok} />
										</span>
									</div>
									<h4>{data.name}</h4>
									<p>{data.work}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default TeamCard;
