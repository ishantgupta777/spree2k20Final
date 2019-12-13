import React, { Component } from 'react';
import HomePage from './pages/HomePage';
import { BrowserRouter, Route } from 'react-router-dom';
import Registration from './pages/Registration';

export default class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/registration" component={Registration} />
			</BrowserRouter>
		);
	}
}
