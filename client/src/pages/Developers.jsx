import React from 'react';
import './developers.css';

export default function Developers() {
	return (
		<div id="team-parent" className="devs">
			<h1>Developers</h1>
			<div className="photos">
				<div>
					<div>
						<img src={require('../assets/team/27.png')} alt="" />
					</div>
					<div className="details">
						<p className="name">Nipun Agrawal</p>
						<p className="post">Coordinator</p>
						<p className="number">7665221162</p>
						<p className="spree-id">agarwalnipun12@gmail.com</p>
					</div>
				</div>
				<div>
					<div>
						<img src={require('../assets/team/29.png')} alt="" />
					</div>
					<div className="details">
						<p className="name">Yash Jain</p>
						<p className="post">Head Of Operations</p>
						<p className="number">8130297010</p>
						<p className="spree-id">yashjain.1999@gmail.com</p>
					</div>
				</div>
				<div>
					<div>
						<img src={require('../assets/team/devs/aryan.png')} alt="" />
					</div>
					<div className="details">
						<p className="name">Aryan Agrawal</p>
						<p className="post">UI/UX</p>
						<p className="number">9111790711</p>
						<p className="spree-id">aryan@bits-spree.org</p>
					</div>
				</div>
				<div>
					<div>
						<img src={require('../assets/team/devs/ishant.png')} alt="" />
					</div>
					<div className="details">
						<p className="name">
							{' '}
							<a href="http://ishantgupta.in" target="_blank">
								Ishant
							</a>{' '}
						</p>
						<p className="post">Full Stack Developer</p>
						<p className="number">8888329362</p>
						<p className="spree-id">ishantgupta777@gmail.com</p>
					</div>
				</div>
			</div>
		</div>
	);
}
