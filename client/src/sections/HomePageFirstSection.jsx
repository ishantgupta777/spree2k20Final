import React from 'react';
import './HomePageFirstSection.css';
import Nav from '../components/nav';
import { Link } from 'react-router-dom';

const HomePageFirstSection = () => {
	return (
		<div>
			<section className="home-main-sec">
				<Nav />

				<div className="main-section">
					<div className="logo-and-spree">
						<div className="logo">
							<img src={require('../assets/layers/Spreelogo.png')} alt="" />
						</div>
						<div className="main-spree-text">
							<h1>SPREE</h1>
							<br />
							<h2>27-29 MARCH 2020</h2>
						</div>
					</div>
				</div>

				<div className="main-footer">
					<h2>FOLLOW US ON </h2>
					<a href="https://www.facebook.com/bitsspree/" target="_blank">
						<img className="follow-icon" src={require('../assets/layers/Facebook1.png')} alt="" />
					</a>
				</div>
			</section>
		</div>
	);
};

export default HomePageFirstSection;
