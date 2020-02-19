import React from 'react';
import './team.css';

const data = [
	{
		category: 'Convener',
		details: [
			{
				pic: 22,
				name: 'Shobhit',
				number: '939384882',
				id: '969297907302',
				post: 'velle'
			}
		]
	},
	{
		category: 'Organizing Committee',
		details: [
			{
				pic: 3,
				name: 'Shobhit',
				number: '939384882',
				id: '969297907302',
				post: 'velle'
			},
			{
				pic: 15,
				name: 'Shobhit',
				number: '939384882',
				id: '969297907302',
				post: 'velle'
			},
			{
				pic: 23,
				name: 'Shobhit',
				number: '939384882',
				id: '969297907302',
				post: 'velle'
			},
			{
				pic: 8,
				name: 'Shobhit',
				number: '939384882',
				id: '969297907302',
				post: 'velle'
			}
		]
	},
	{
		category: 'Participation and Publicity',
		details: [
			{
				pic: 9,
				name: 'Shobhit',
				number: '939384882',
				id: '969297907302'
			},
			{
				pic: 12,
				name: 'Shobhit',
				number: '939384882',
				id: '969297907302'
			}
		]
	},
	{
		category: 'Sponsorship and marketing',
		pics: [ 1, 2, 3, 4 ]
	},
	{
		category: 'media and coverage',
		pics: [ 1, 2, 3, 4 ]
	},
	{
		category: 'production and infrastructure',
		pics: [ 1, 2, 3, 4 ]
	},
	{
		category: 'informals',
		pics: [ 1, 2, 3, 4 ]
	},
	{
		category: 'finance and asset management',
		pics: [ 1, 2, 3, 4 ]
	},
	{
		category: 'photography and videography',
		pics: [ 1, 2, 3, 4 ]
	},
	{
		category: 'ambience and decor',
		pics: [ 1, 2, 3, 4 ]
	},
	{
		category: 'journalism and media affairs',
		pics: [ 1, 2, 3, 4 ]
	},
	{
		category: 'surveillance',
		pics: [ 1, 2, 3, 4 ]
	}
];

const handlePics = (e) => {
	//------------handle pics-----------------------
	const container = document.querySelector('.photos');
	const category = e.target.innerText;
	const details = data.filter((obj) => obj.category == category)[0].details;
	container.innerHTML = '';
	details.map((obj) => {
		const img = require(`../assets/team/${obj.pic}.png`);
		container.innerHTML += `
			<div>
			<div>
				<img src=${img} alt="" />
			</div>
			<div class="details">
				<p class="name">${obj.name}</p>
				<p class="post">${obj.post}</p>
				<p class="number">${obj.number}</p>
				<p class="spree-id">${obj.id}</p>
			</div>
		</div>
		`;
	});

	//--------------handle color of selected category----------
	const allCategories = [ ...document.querySelectorAll('.department') ];
	allCategories.forEach((cat) => cat.classList.remove('selected'));
	e.target.classList.add('selected');
};
const Team = () => {
	return (
		<div id="team-parent">
			<h1>OUR TEAM</h1>
			<div className="team">
				<div className="depart-name">
					<div onClick={handlePics} className="department selected">
						Convener
					</div>
					<div onClick={handlePics} className="department">
						Organizing Committee
					</div>
					<div onClick={handlePics} className="department">
						Participation and Publicity
					</div>
					<div onClick={handlePics} className="department">
						Sponsorship and marketing
					</div>
					<div onClick={handlePics} className="department">
						media and coverage
					</div>
					<div onClick={handlePics} className="department">
						production and infrastructure
					</div>
					<div onClick={handlePics} className="department">
						informals
					</div>
					<div onClick={handlePics} className="department">
						finance and asset management
					</div>
					<div onClick={handlePics} className="department">
						photography and videography
					</div>
					<div onClick={handlePics} className="department">
						ambience and decor
					</div>
					<div onClick={handlePics} className="department">
						journalism and media affairs
					</div>
					<div onClick={handlePics} className="department">
						surveillance
					</div>
				</div>
				<div className="photos animated bounceInDown">
					<div>
						<div>
							<img src={require('../assets/team/22.png')} alt="" />
						</div>
						<div className="details">
							<p className="name">Ishant</p>
							<p className="post">Velle</p>
							<p className="number">99999999</p>
							<p className="spree-id">ishantgupta777@gmail.com</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Team;
