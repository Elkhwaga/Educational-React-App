import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Head from './Head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import './header.css';

const Header = () => {
	const [click, setClick] = useState(false);
	return (
		<header>
			<Head />
			<div className="container-fluid">
				<nav className="d-flex">
					<ul
						className={click ? 'mobile-nav' : 'nav-links'}
						onClick={() => setClick(false)}
					>
						<li>
							<Link to="/" className="text-white">
								Home
							</Link>
						</li>
						<li>
							<Link to="/courses" className="text-white">
								All Courses
							</Link>
						</li>
						<li>
							<Link to="/about" className="text-white">
								About
							</Link>
						</li>
						<li>
							<Link to="/team" className="text-white">
								Team
							</Link>
						</li>
						<li>
							<Link to="/pricing" className="text-white">
								Pricing
							</Link>
						</li>
						<li>
							<Link to="/journal" className="text-white">
								Journal
							</Link>
						</li>
						<li>
							<Link to="/contact" className="text-white">
								Contact
							</Link>
						</li>
					</ul>
					<div className="start">
						<div className="text-white text-uppercase">Get Certificate</div>
					</div>
					<button className="toggle" onClick={() => setClick(!click)}>
						{click ? (
							<FontAwesomeIcon icon={faTimes} />
						) : (
							<FontAwesomeIcon icon={faBars} />
						)}
					</button>
				</nav>
			</div>
		</header>
	);
};

export default Header;
