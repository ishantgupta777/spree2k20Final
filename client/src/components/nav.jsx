import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const nav = () => {
	return (
		<div>
			<ul className="main-nav">
				<li>
					<Link to="/">Events</Link>
				</li>
				<li>
					<a href="https://guarded-bayou-35140.herokuapp.com/registration">Registration</a>
				</li>
			</ul>
		</div>
	);
};

export default nav;
