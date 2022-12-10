import React from 'react';
import Back from '../common/back/Back';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebookF,
	faInstagram,
	faTwitter,
	faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import './contact.css';

const Contact = () => {
	const map =
		'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27612.961247005205!2d31.319837899999996!3d30.105063099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1670511764310!5m2!1sen!2seg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade';
	return (
		<>
			<Back title="Contact Us" />
			<section className="contact">
				<div className="container">
					<div className="row d-flex">
						<div className="col">
							<iframe src={map} frameborder="0" className="responsive"></iframe>
						</div>
						<div className="col">
							<h2>Contact us</h2>
							<p>We're open for any suggestion or just to have a chat</p>

							<div className="items row d-flex">
								<div className="col">
									<h5>ADDRESS:</h5>
									<p>198 West 21th Street, Suite 721 New York NY 10016</p>
								</div>
								<div className="col">
									<h5>EMAIL:</h5>
									<p> info@yoursite.com</p>
								</div>
								<div className="col">
									<h5>PHONE:</h5>
									<p> + 1235 2355 98</p>
								</div>
							</div>

							<form className="d-flex flex-column">
								<input type="text" placeholder="Name" />
								<input type="email" placeholder="Email" />
								<input type="text" placeholder="Subject" />
								<textarea
									cols="30"
									rows="10"
									placeholder="Create a message here..."
								></textarea>
								<button className="btn btn-primary justify-space-between w-25">
									<span>Send Message</span>
									<span>
										<FontAwesomeIcon icon={faPaperPlane} />
									</span>
								</button>
							</form>

							<h4>Follow us here</h4>
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
				</div>
			</section>
		</>
	);
};

export default Contact;
