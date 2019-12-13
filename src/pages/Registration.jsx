import React, { Component } from 'react';
import './Registration.css';
import RegistrationNav from '../components/registration-nav';
import InputField from '../components/registration-input';
import OptionInput from '../components/OptionInput';

export default class Registration extends Component {
	state = {
		name: '',
		state: '',
		email: '',
		college: '',
		phone: '',
		year: '',
		gender: '',
		sports: [ 'event1', 'event2', 'event3', 'event4', 'event5' ],
		city: '',
		selectedSports: [],
		yearOfStudy: [ 1, 2, 3, 4, 5 ]
	};
	handleChange = (e) => {
		e.preventDefault();
		if (e.target.name === 'sports') {
			this.setState({ selectedSports: [ ...this.state.selectedSports, e.target.value ] });
		} else {
			this.setState({ [e.target.name]: e.target.value }, () => console.log(this.state));
		}
	};
	handleSubmit = (e)=>{
		e.preventDefault()
		console.log(this.state);
	}

	render() {
		return (
			<div className="registration-cover">
				<section className="registration">
					<RegistrationNav />
					<form onSubmit={this.handleSubmit}>
						<div className="registration-grid">
							<InputField name="name" handleChange={this.handleChange} type="text" required={true} />
							<InputField name="email" handleChange={this.handleChange} type="email" required={true} />
							<InputField name="city" handleChange={this.handleChange} type="text" required={true} />
							<InputField name="phone" handleChange={this.handleChange} type="number" required={true} />
							<InputField name="college" handleChange={this.handleChange} type="text" required={true} />
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

							<select className="selectpicker" multiple data-live-search="true" required={true}>
								<option selected disabled hidden>
									Sports
								</option>
								{this.state.sports.map((e) => (
									<option value={e} key={e}>
										{e}{' '}
									</option>
								))}
							</select>

								<button className="submitBtn"  type="submit" >Register</button>
						</div>
					</form>
				</section>
			</div>
		);
	}
}
