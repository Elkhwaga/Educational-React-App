import React from 'react';
import { awrapper } from '../../dummydata';

const Awrapper = () => {
	return (
		<section className="a-wrapper vh-50">
			<div className="box h-100">
				<img src="/images/awrapper.webp" alt="" className="img-fluid h-100" />
				<div className="info">
					<div className="container">
						<div className="content d-flex justify-space-between">
							{awrapper.map((data, index) => (
								<div className="d-flex align-items-center" key={index}>
									<img src={data.cover} alt="" width="60" height="60" />
									<div>
										<h2 className="text-white">{data.data}</h2>
										<p className="text-white">{data.title}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Awrapper;
