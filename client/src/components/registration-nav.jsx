import React from 'react';
import './registration-nav.css';
import { Link } from 'react-router-dom';

const registrationNav = () => {
	return (
		<div className="registration-nav">
			<div className="registration-logo">
				<Link to="/">
					<img src={require('../assets/layers/Spreelogo.png')} alt="" />
				</Link>
			</div>
			<div className="registration-heading">
				<h1>register here</h1>
			</div>
		</div>
	);
};

export default registrationNav;
