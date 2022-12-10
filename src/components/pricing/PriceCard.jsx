import React from 'react';
import { price } from '../../dummydata';

const PriceCard = () => {
	return (
		<>
			{price.map((data, index) => (
				<div className="col" key={index}>
					<div className="card">
						<h5>{data.name}</h5>
						<h3>
							<span>$</span>
							{data.price}
						</h3>
						<p>{data.desc}</p>
						<button className="btn outline-primary">Get Started</button>
					</div>
				</div>
			))}
		</>
	);
};

export default PriceCard;
