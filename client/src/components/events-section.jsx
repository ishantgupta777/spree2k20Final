import React from 'react';
import '../assets/fonts/mixofx_azonix/Azonix.otf';
import './events-section.css';
import EventCard from './event-card';
import EventCardBgImg from '../assets/event_card.png';
import { Link } from 'react-router-dom';

const EventSection = ({ heading }) => {
	return (
		<div id="event">
			<section className="events">
				<h1>Sports Events</h1>
				<Link to="./rulebook_new.pdf" target="_blank" download id="rulebook-btn">
					Rulebook
				</Link>
				<div className="event-grid">
					<div className="three-sports">
						<EventCard icon={EventCardBgImg} toUrl="/events" sportsImg={'1'} sportName="Carrom" />
						<EventCard icon={EventCardBgImg} toUrl="/events" sportsImg={'2'} sportName="Volleyball" />
						<EventCard icon={EventCardBgImg} toUrl="/events" sportsImg={'3'} sportName="Tennis" />
					</div>
					<div className="two-sports">
						<EventCard icon={EventCardBgImg} toUrl="/events" sportsImg={'4'} sportName="FootBall" />
						<EventCard icon={EventCardBgImg} toUrl="/events" sportsImg={'5'} sportName="Table Tennis" />
					</div>
					<div className="three-sports">
						<EventCard icon={EventCardBgImg} toUrl="/events" sportsImg={'6'} sportName="Badminton" />
						<EventCard icon={EventCardBgImg} toUrl="/events" sportsImg={'7'} sportName="Chess" />
						<EventCard icon={EventCardBgImg} toUrl="/events" sportsImg={'8'} sportName="Power Lifting" />
					</div>
					<div className="two-sports">
						<EventCard icon={EventCardBgImg} toUrl="/events" sportsImg={'9'} sportName="Kabaddi" />
						<EventCard icon={EventCardBgImg} toUrl="/events" sportsImg={'10'} sportName="BasketBall" />
					</div>
					<div className="three-sports">
						<EventCard icon={EventCardBgImg} toUrl="/events" sportsImg={'11'} sportName="Cricket" />
						<EventCard icon={EventCardBgImg} toUrl="/events" sportsImg={'12'} sportName="Snooker" />
						<EventCard icon={EventCardBgImg} toUrl="/events" sportsImg={'13'} sportName="Squash" />
					</div>
				</div>
			</section>
		</div>
	);
};

export default EventSection;
