import React from 'react';
import './team.css';

const handlePics = (e) => {
	const container = document.querySelector('.photos');
	const category = e.target.innerText;
};
const Team = () => {
	return (
		<div id="team-parent">
			<h1>OUR TEAM</h1>
			<div className="team">
				<div className="depart-name">
					<div onClick={handlePics} className="department">
						Convener
					</div>
					<div onClick={handlePics} className="department">
						Organizing Committee
					</div>
					<div onClick={handlePics} className="department">
						Participation and Publicity
					</div>
					<div onClick={handlePics} className="department">
						Sponsorship and marketing
					</div>
					<div onClick={handlePics} className="department">
						media and coverage
					</div>
					<div onClick={handlePics} className="department">
						production and infrastructure
					</div>
					<div onClick={handlePics} className="department">
						informals
					</div>
					<div onClick={handlePics} className="department">
						finance and asset management
					</div>
					<div onClick={handlePics} className="department">
						photography and videography
					</div>
					<div onClick={handlePics} className="department">
						ambience and decor
					</div>
					<div onClick={handlePics} className="department">
						journalism and media affairs
					</div>
					<div onClick={handlePics} className="department">
						surveillance
					</div>
				</div>
				<div className="photos animated bounceInDown">
					<div>
						<img src={require('../assets/team/Layer 1.png')} alt="" />
					</div>
					<div>
						<img src={require('../assets/team/Layer 2.png')} alt="" />
					</div>
					<div>
						<img src={require('../assets/team/Layer 3.png')} alt="" />
					</div>
					<div>
						<img src={require('../assets/team/Layer 4.png')} alt="" />
					</div>
					<div>
						<img src={require('../assets/team/Layer 5.png')} alt="" />
					</div>
					<div>
						<img src={require('../assets/team/Layer 6.png')} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Team;
