import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const NewLetter = () => {
	return (
		<section className="new-letter">
			<div className="container">
				<div className="row d-flex align-items-center">
					<div className="col">
						<h2>Newsletter - Stay tune and get the latest update</h2>
						<span>Far far away, behind the word mountains</span>
					</div>
					<div className="col">
						<div className="subscribe">
							<input type="text" placeholder="Enter email address" />
							<span>
								<FontAwesomeIcon icon={faPaperPlane} />
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default NewLetter;
