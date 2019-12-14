import React, { Component } from 'react';
import './registration-input.css';

export default class resgistrationInput extends Component {
	render() {
		return (
			<div>
				<input
					type="text"
					placeholder={this.props.name}
					onChange={this.props.handleChange}
					name={this.props.name}
					type={this.props.type}
					required={this.props.required}
				/>
			</div>
		);
	}
}
