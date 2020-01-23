import React from 'react';
import { Link } from 'react-router-dom';
import './event-card.css';

const EventCard = ({ icon, toUrl, sportsImg, sportName }) => {
	return (
		<div id="event-card">
			<Link to={toUrl} style={{ textDecoration: 'none' }}>
				<div className="rotated-box">
					<div className="event-box" style={{ background: `url(${icon})` }}>
						<div className="sport-info">
							<img src={require(`../assets/sports/${sportsImg}.png`)} alt="sports" />
							<h1>{sportName}</h1>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default EventCard;
