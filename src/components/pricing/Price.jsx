import React from 'react';
import Back from '../common/back/Back';
import PriceCard from './PriceCard';
import Faq from './Faq';

import './price.css';

const Price = () => {
	return (
		<>
			<Back title="Choose The Right Plan" />
			<section className="price">
				<div className="container">
					<div className="row d-flex">
						<PriceCard />
					</div>
					<Faq />
				</div>
			</section>
		</>
	);
};

export default Price;
