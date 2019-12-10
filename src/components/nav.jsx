import React from 'react';
import { Link } from 'react-router-dom'
import './nav.css'

const nav = () => {
	return (
		<div>
			<ul className="main-nav">
				<li>
					<Link>Events</Link>
				</li>
				<li>
					<Link>Registration</Link>
				</li>
			</ul>
		</div>
	);
};

export default nav;
