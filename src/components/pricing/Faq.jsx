import React, { useState } from 'react';
import Title from '../common/title/Title';
import { faq } from '../../dummydata';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChevronDown,
	faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const Faq = () => {
	const [click, setClick] = useState(false);

	const toggle = (index) => {
		if (click === index) return setClick(null);
		setClick(index);
	};
	return (
		<section className="faq">
			<Title subtitle="Faqs" title="Frequesntly Ask Questions" />
			<div className="row">
				{faq.map((data, index) => (
					<div className="col" key={index}>
						<div className="box">
							<button
								className="show d-flex align-items-center justify-space-between"
								onClick={() => toggle(index)}
								key={index}
							>
								<span>{data.title}</span>
								<span>
									{click === index ? (
										<FontAwesomeIcon icon={faChevronDown} />
									) : (
										<FontAwesomeIcon icon={faChevronRight} />
									)}
								</span>
							</button>
							{click === index ? (
								<div className="text">
									<p>{data.desc}</p>
								</div>
							) : null}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Faq;
