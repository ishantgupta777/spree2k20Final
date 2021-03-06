import React, { Component } from 'react';
import './Registration.css';
import RegistrationNav from '../components/registration-nav';
import InputField from '../components/registration-input';
import OptionInput from '../components/OptionInput';
import axios from 'axios';

export default class Registration extends Component {
	state = {
		name: '',
		state: '',
		email: '',
		college: '',
		phone: '',
		year: '',
		gender: '',
		sports: [
			'Snooker',
			'Cricket Boys',
			'Football Boys',
			'Football Girls',
			'Badminton Boys (Team)',
			'Badminton Girls (Team)',
			'Badminton Boys (Individuals)',
			'Badminton Girls (Individuals)',
			'Basketball Boys',
			'Basketball Girls',
			'Table-Tennis Boys (Team)',
			'Table-Tennis Girls (Team)',
			'Table-Tennis Boys (Individual)',
			'Table-Tennis Girls (Individual)',
			'Volleyball Boys',
			'Volleyball Girls',
			'Tennis Boys (Team)',
			'Tennis Boys (Individual)',
			'Tennis Girls (Individual)',
			'Kabaddi Boys',
			'Chess (Boys Girls Mix)',
			'Squash Team (Boys Girl Mix)',
			'Squash Individuals',
			'Powerlifting (under 68)',
			'Powerlifting (68kg-75kg)',
			'Powerlifting (75kg-85kg)',
			'Powerlifting (above 85)',
			'Carrom (Boys Girls Mix)'
		],
		city: '',
		selectedSports: [],
		yearOfStudy: [ 1, 2, 3, 4, 5 ],
		showPlaceholder: true
	};
	handleChange = (e) => {
		e.preventDefault();
		if (e.target.name === 'sports') {
			if (this.state.selectedSports != []) {
				this.setState({ showPlaceholder: false });
			} else {
				this.setState({ showPlaceholder: true });
			}
			this.setState({
				selectedSports: [ ...this.refs.sports.selectedOptions ].map((o) => o.value).filter((e) => e !== '')
			});
		} else {
			this.setState({ [e.target.name]: e.target.value });
		}
	};
	handleSubmit = (e) => {
		e.preventDefault();
		document.querySelector('.registered-msg').innerHTML = '<h1>Registering</h1>';
		const { name, email, city, phone, college, year, gender, selectedSports } = this.state;
		this.setState({ name: '', email: '', city: '', phone: '', college: '' });
		const data = { name, email, city, phone, college, year, gender, selectedSports };
		axios
			.post('/register', data)
			.then((response) => {
				document.querySelector('.registered-msg').innerHTML = '<h1>Successfully Registered</h1>';
			})
			.catch((error) => {
				document.querySelector('.registered-msg').innerHTML = '<h1>Unsuccessfully Registered</h1>';
			});
	};
	render() {
		return (
			<div className="registration-cover">
				<section className="registration">
					<RegistrationNav />
					<form onSubmit={this.handleSubmit}>
						<div className="registration-grid">
							<InputField
								name="name"
								handleChange={this.handleChange}
								type="text"
								required={true}
								value={this.state.name}
							/>
							<InputField
								name="email"
								handleChange={this.handleChange}
								type="email"
								required={true}
								value={this.state.email}
							/>
							<InputField
								name="city"
								handleChange={this.handleChange}
								type="text"
								required={true}
								value={this.state.city}
							/>
							<InputField
								name="phone"
								handleChange={this.handleChange}
								type="number"
								required={true}
								value={this.state.phone}
							/>
							<InputField
								name="college"
								handleChange={this.handleChange}
								type="text"
								required={true}
								value={this.state.college}
							/>
							<OptionInput
								name="year"
								placeholder="Year of study"
								handleChange={this.handleChange}
								values={this.state.yearOfStudy}
								required={true}
							/>
							<OptionInput
								name="gender"
								placeholder="Gender"
								handleChange={this.handleChange}
								values={[ 'Male', 'Female', 'Other' ]}
								required={true}
							/>

							<select
								className="selectpicker"
								multiple
								data-live-search="true"
								required={true}
								onChange={this.handleChange}
								name="sports"
								ref="sports"
								style={{ fontWeight: '500' }}
							>
								{this.state.sports.map((e) => (
									<option value={e} key={e}>
										{e}{' '}
									</option>
								))}
								<option
									value=""
									selected={this.state.showPlaceholder}
									disabled
									style={{ fontWeight: '500' }}
									id="sport-placeholder"
								>
									Sports
								</option>
							</select>

							<button className="submitBtn" type="submit">
								Register
							</button>
						</div>
						<div className="registered-msg" />
					</form>
				</section>
			</div>
		);
	}
}
