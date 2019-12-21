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
					<div className="follow-h2">
						<h2>FOLLOW US ON </h2>
					</div>
					<div className="follow-links">
						<a href="https://www.facebook.com/bitsspree/" target="_blank">
							<img className="follow-icon" src={require('../assets/layers/Facebook1.png')} alt="" />
						</a>
						<a href="https://instagram.com/bitsspree?igshid=i9kdvvt7mcey" target="_blank">
							<img className="follow-icon" src={require('../assets/layers/insta.png')} alt="" />
						</a>
						<a href="tel:+919834772359">
							<img className="follow-icon" src={require('../assets/layers/phone.png')} alt="" />
						</a>
					</div>
				</div>
				<div className="devsoc-logo">
					<a href="http://desoc.club">
						<img src={require('../assets/layers/devsoc.png')} alt="" />
					</a>
				</div>
				<div className="credits">
					<h2>
						Made with &#9829; by <a href="http://devsoc.club">DevSoc</a>{' '}
					</h2>
				</div>
			</section>
		</div>
	);
};

export default HomePageFirstSection;
