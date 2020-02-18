import React, { Fragment } from 'react';
import ReactPlayer from 'react-player';
import Gallery from './Gallery';
import './aboutUs.css';

export default function AboutUs() {
	return (
		<div id="parent-about">
			<div className="about-us">
				<h1>about us</h1>
				<p>
					Spree ‘20: Rising from Ashes is a call to all those who live, breathe and dream sports. At Spree, we
					give you a platform to showcase your skills, learn from others and grow as a community. Our goal, is
					not only to conduct a sports competition, but allow everyone to live an experience. It is in that
					spirit, that we include mesmerizing cultural nights and a plethora of off-beat events. We proudly
					organize "Udaan", a sports fest for specially abled kids, and a marathon for the cause "Don't Drink
					and Drive", as part of our social responsibility. This Spree, we invite you to seek discomfort, to
					put all fears behind, to reset your limits, reach farther than ever before and be a part of this
					enthralling extravaganza, that is Spree ‘20:Rising from Ashes.
				</p>
			</div>
			<section className="videos">
				<div>
					<div className="after-movie">
						<ReactPlayer
							url="https://www.facebook.com/bitsspree/videos/665601873922135/"
							width="100%"
							height="100%"
						/>
					</div>
					<p>Spree'19 after movie</p>
				</div>
				<div>
					<div className="teaser">
						<ReactPlayer
							url="https://www.facebook.com/bitsspree/videos/551525672305019/"
							width="100%"
							height="100%"
						/>
					</div>
					<p>spree'20 teaser</p>
				</div>
			</section>
			<Gallery />
		</div>
	);
}
