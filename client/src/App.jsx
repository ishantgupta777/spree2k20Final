import React, { Component } from 'react';
import HomePage from './pages/HomePage';
import { BrowserRouter, Route } from 'react-router-dom';
import Registration from './pages/Registration';
import Events from './pages/Events';
import Team from './pages/Team';
import Developers from './pages/Developers';

export default class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Route exact path="/" component={HomePage} />
				<Route path="/registration" component={Registration} />
				<Route path="/events" component={Events} />
				<Route path="/team" component={Team} />
				<Route path="/developers" component={Developers} />
			</BrowserRouter>
		);
	}
}
