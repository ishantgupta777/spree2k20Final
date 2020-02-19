import React from 'react';
import './developers.css';

export default function Developers() {
	return (
		<div id="team-parent" className="devs">
			<h1>Dope Developers</h1>
				<div className="photos">
					<div>
						<img src={require('./../assets/team/devs/KJNDS.png')} alt=""/>
					</div>
					<div>
						<img src={require('./../assets/team/devs/Layer.png')} alt=""/>
					</div>
				</div>
			</div>
	);
}
