import React, { Component } from 'react';
import HomePage from './pages/HomePage';
import { BrowserRouter, Route } from 'react-router-dom';
import Registration from './pages/Registration';
import Events from './pages/Events';

export default class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Route exact path="/" component={HomePage} />
				<Route path="/registration" component={Registration} />
				<Route path="/events" component={Events} />
			</BrowserRouter>
		);
	}
}
