import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const nav = () => {
	return (
		<div>
			<ul className="main-nav">
				<li>
					<a href="http://www.bits-spree.org/registration">Registration</a>
				</li>
			</ul>
		</div>
	);
};

export default nav;
