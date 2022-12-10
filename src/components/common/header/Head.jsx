import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebookF,
	faInstagram,
	faTwitter,
	faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const Head = () => {
	return (
		<div className="head">
			<div className="container d-flex align-items-center">
				<div className=" text-uppercase">
					<h2 className="text-white">Academia</h2>
					<span className="text-white">Online Education & learning</span>
				</div>

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
					<span className="d-flex align-items-center justify-content-center">
						<FontAwesomeIcon icon={faYoutube} />
					</span>
				</div>
			</div>
		</div>
	);
};

export default Head;
