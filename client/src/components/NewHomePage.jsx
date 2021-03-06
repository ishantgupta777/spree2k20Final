import React, { useEffect, useState } from 'react';
import NavDrawer from '../components/NavDrawer';
import moment from 'moment';
import Timer from 'react-compound-timer';
import AboutUs from './AboutUs';
import { Box } from '@material-ui/core';
import './particles.css';
import './NewHomePage.css';
import './loader.css';
import { useStateValue } from '../context/loaderState';

const animations = [
	'wobble',
	'tada',
	'rubberBand',
	'heartBeat',
	'swing',
	'bounceInLeft',
	'jello',
	'bounceInDown',
	'lightSpeedIn',
	'rotateIn',
	'flip',
	'rollIn',
	'flipInX',
	'rotateInDownLeft',
	'zoomIn'
];
const length = animations.length;
let i = 0;

const addAnimation = (e) => {
	const span = e.target;
	span.classList.add('animated');
	// span.classList.add(animations[i]);
	span.classList.add('bounce');
	span.classList.add('infinite');
};
const removeAnimation = (e) => {
	const span = e.target;
	span.classList.remove('animated');
	// span.classList.remove(animations[i]);
	span.classList.remove('bounce');
	span.classList.remove('infinite');
	i++;
	if (i >= length) i = 0;
};

const NewHomePage = () => {
	const [ loading, setLoading ] = useStateValue();
	const handleLoader = () => {
		setLoading(false);
		document.querySelector('html').style.height = '';
		document.querySelector('html').style.overflow = 'auto';
		document.querySelector('#parent-div').style.opacity = '1';
	};
	useEffect(() => {
		if (loading) {
			document.querySelector('html').style.height = '100vh';
			document.querySelector('#parent-div').style.opacity = '0';
			document.querySelector('html').style.overflow = 'hidden';
		}
		window.onload = handleLoader;
		if (document.readyState == 'complete') handleLoader();
	}, []);

	let today = moment(new Date());
	const spreeDate = moment(new Date('2020-03-27 00:00:00'));
	const initialTime = spreeDate.diff(today);
	return (
		<div>
			{loading ? (
				<div className="loader-parent">
					<div className="loader" />
				</div>
			) : null}
			<div id="parent-div">
				<NavDrawer>
					<div id="particles">
						<div id="bubbles" />
						<div id="bubbles2" />
						<div id="bubbles3" />
					</div>
					<div id="home-main" className="main-page-content">
						<div className="main-section">
							<div className="main-spree-text">
								<h1 id="main-heading">
									<div
										className="spree-span"
										onMouseOver={addAnimation}
										onMouseLeave={removeAnimation}
									>
										S
									</div>
									<div
										className="spree-span"
										onMouseOver={addAnimation}
										onMouseLeave={removeAnimation}
									>
										P
									</div>
									<div
										className="spree-span"
										onMouseOver={addAnimation}
										onMouseLeave={removeAnimation}
									>
										R
									</div>
									<div
										className="spree-span"
										onMouseOver={addAnimation}
										onMouseLeave={removeAnimation}
									>
										E
									</div>
									<div
										className="spree-span"
										onMouseOver={addAnimation}
										onMouseLeave={removeAnimation}
									>
										E
									</div>
								</h1>
								<p id="sub-heading">Rising from ashes</p>
							</div>
						</div>
						<div className="footer">
							<div className="timer">
								<Timer initialTime={initialTime} direction={'backward'}>
									<div style={{ display: 'flex' }}>
										<div>
											<Timer.Days /> <br /> days
										</div>{' '}
										<span>:</span>
										<div>
											<Timer.Hours /> <br /> hours
										</div>{' '}
										<span>:</span>
										<div>
											<Timer.Minutes /> <br /> minutes
										</div>
									</div>
								</Timer>
							</div>
							<Box display={{ xs: 'none', md: 'block' }}>
								<div className="follow">
									<h3>
										Follow Us On
										<a target="_blank" href="https://www.facebook.com/bitsspree/">
											<img src={require('../assets/layers/Facebook1.png')} alt="fb" />
										</a>
										<a
											target="_blank"
											href="https://www.instagram.com/bitsspree/?igshid=i9kdvvt7mcey"
										>
											<img src={require('../assets/layers/insta.png')} alt="insta" />
										</a>
									</h3>
								</div>
							</Box>
						</div>
					</div>
					<AboutUs />
				</NavDrawer>
			</div>
		</div>
	);
};

export default NewHomePage;
