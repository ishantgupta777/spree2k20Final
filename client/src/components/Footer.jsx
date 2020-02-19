import React from 'react';
import './footer.css';

export default function Footer() {
	return (
		<div className="footer-parent">
			<footer>
				<div className="logo">
					<a target="_blank" href="http://devsoc.club">
						<img src={require('../assets/layers/devsoc.png')} alt="" />
					</a>
				</div>
				<div className="love">
					Made with love by{' '}
					<a href="http://devsoc.club" target="_blank">
						DevSoc
					</a>
				</div>
				<div className="follow-us-on">
					<p>
						Follow Us On
						<a target="_blank" href="https://www.facebook.com/bitsspree/">
							<img src={require('../assets/layers/Facebook1.png')} alt="fb" />
						</a>
						<a target="_blank" href="https://www.instagram.com/bitsspree/?igshid=i9kdvvt7mcey">
							<img src={require('../assets/layers/insta.png')} alt="insta" />
						</a>
					</p>
				</div>
			</footer>
		</div>
	);
}
