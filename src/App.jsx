import React, { Component } from 'react';
import HomePage from './pages/HomePage';
import { BrowserRouter, Route } from "react-router-dom";


export default class App extends Component {
	render() {
		return(
            <BrowserRouter>
            <Route exact path='/' component={HomePage} />
            </BrowserRouter>
        )
	}
}
