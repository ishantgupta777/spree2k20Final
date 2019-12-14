import React, { Component } from 'react';
import './OptionInput.css';

export default class OptionInput extends Component {
	render() {
		const { values, placeholder, required, multiple } = this.props;
		return (
			<div>
				<select
					required={required}
					defaultValue={'DEFAULT'}
					multiple={multiple}
					onChange={this.props.handleChange}
					name={this.props.name}
				>
					<option disabled value="DEFAULT">
						{placeholder}
					</option>
					{values.map((e) => (
						<option value={e} key={e}>
							{e}{' '}
						</option>
					))}
				</select>
			</div>
		);
	}
}
