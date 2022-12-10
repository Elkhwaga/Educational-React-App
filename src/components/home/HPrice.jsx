import React from 'react';
import { price } from '../../dummydata';
import Title from '../common/title/Title';
import PriceCard from '../pricing/PriceCard';

const HPrice = () => {
	return (
		<section className="price">
			<Title subtitle="Our Pricing" title="Pricing & Packages" />
			<div className="container">
				<div className="row d-flex">
					<PriceCard />
				</div>
			</div>
		</section>
	);
};

export default HPrice;
