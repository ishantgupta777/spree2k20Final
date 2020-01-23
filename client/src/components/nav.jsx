import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
import '../components/events-section';

const nav = () => {
	return (
		<div>
			<ul className="main-nav">
				<li>
					<a href="http://www.bits-spree.org/registration">Registration</a>
				</li>
				<li>
					<Link to="/events">Events</Link>
				</li>
			</ul>
		</div>
	);
};

export default nav;
