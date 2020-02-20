import React from 'react';
import './team.css';

const data = [
	{
		category: 'Convener',
		details: [
			{
				pic: 22,
				name: 'Shobhit Saxena',
				number: '9549304800',
				id: 'convener@bits-spree.org',
				post: 'Convener'
			}
		]
	},
	{
		category: 'Organizing Committee',
		details: [
			{
				pic: 3,
				name: 'Gourav Baganikar',
				number: '7798296537 ',
				id: 'gourav@bits-spree.org',
				post: 'Chief Coordinator & CSR Head'
			},
			{
				pic: 15,
				name: 'Tanmay Govil ',
				number: ' 7697707699',
				id: ' tanmay@bits-spree.org ',
				post: 'Events Head'
			},
			{
				pic: 23,
				name: 'Dhaval Punwatkar ',
				number: ' 7021092255 ',
				id: ' dhaval@bits-spree.org',
				post: 'Research and Cultural Head'
			},
			{
				pic: 8,
				name: 'Ayush Tewari',
				number: ' 8860193190 ',
				id: 'ayush@bits-spree.org',
				post: 'Head Of Operations'
			}
		]
	},
	{
		category: 'Participation and Publicity',
		details: [
			{
				pic: 9,
				name: ' Aditya Singh Rathore',
				number: ' 9799393011 ',
				id: ' rathore@bits-spree.org ',
				post: 'Chief Coordinator'
			},
			{
				pic: 12,
				name: 'Rohan Bohra ',
				number: '9834772359',
				id: ' rohanbohra23@bits-spree.org',
				post: 'Spree Coordinator'
			},
			{
				pic: 25,
				name: 'Gunjan Samtani',
				number: '9664702795',
				id: ' gunjan@bits-spree.org',
				post: 'Publicity Coordinator'
			}
		]
	},
	{
		category: 'Sponsorship and marketing',
		details: [
			{
				pic: 17,
				name: 'Siddak Bakshi ',
				number: '9877370863',
				id: ' siddak@bits-spree.org ',
				post: 'Chief Coordinator'
			},
			{
				pic: 20,
				name: 'Vedant Patnaik ',
				number: '9607028141',
				id: ' patnaik.vedant@bits-spree.org',
				post: 'Spree Coordinator'
			},
			{
				pic: 13,
				name: 'Sarthak Dwivedi ',
				number: ' 7899121871 ',
				id: 'dwivedi.sarthak@bits-spree.org ',
				post: 'Marketing Coordinator'
			},
			{
				pic: 1,
				name: 'Chainika Shah ',
				number: ' 8879553023 ',
				id: ' chainika@bits-spree.org ',
				post: 'Food And Beverage Coordinator'
			}
		]
	},
	{
		category: 'media and coverage',
		details: [
			{
				pic: 14,
				name: ' Sreehari U Kartha',
				number: ' 9447065758',
				id: ' sreehariuk@bits-spree.org',
				post: 'Spree Coordinator'
			},
			{
				pic: 24,
				name: ' Sujith Benhur',
				number: '7620214168',
				id: ' sujith@bits-spree.org',
				post: 'Chief Coordinator'
			}
		]
	},
	{
		category: 'production and infrastructure',
		details: [
			{
				pic: 2,
				name: 'Harshdeep Singh Sehgal',
				number: '9565049382',
				id: ' harshdeep@bits-spree.org ',
				post: 'Chief Coordinator'
			},
			{
				pic: 5,
				name: 'Dev Kumar ',
				number: ' 9766920353 ',
				id: 'devkumarsingh@bits-spree.org ',
				post: 'Spree Coordinator'
			}
		]
	},
	{
		category: 'informals',
		details: [
			{
				pic: 4,
				name: 'Aaryan Goyal ',
				number: '9414440946',
				id: 'aaryan@bits-spree.org ',
				post: 'Head Of Operations'
			},
			{
				pic: 18,
				name: 'Tushar Gupta ',
				number: ' 9079893347 ',
				id: ' tushar@bits-spree.org',
				post: 'Spree Coordinator'
			}
		]
	},
	{
		category: 'finance and asset management',
		details: [
			{
				pic: 16,
				name: 'Trinath Choubey ',
				number: ' 9823060761 ',
				id: ' trinath@bits-spree.org',
				post: 'Assets Head'
			},
			{
				pic: 21,
				name: 'Yuvam Sharma',
				number: '9413560705',
				id: ' yuvam@bits-spree.org',
				post: 'Finance Head'
			},
			{
				pic: 26,
				name: 'Luv Nath',
				number: '7218855202',
				id: ' luv.nath@bits-spree.org',
				post: 'Chief Coordinator'
			}
		]
	},
	{
		category: 'photography and videography',
		details: [
			{
				pic: 6,
				name: ' Nishtha Agrawal',
				number: '9079865658 ',
				id: ' nishtha_agrawal@bits-spree.org ',
				post: 'Spree Coordinator'
			},
			{
				pic: 7,
				name: 'Parth Mangal',
				number: '9506831011',
				id: 'dopychief@bits-spree.org',
				post: 'Chief Coordinator'
			}
		]
	},
	{
		category: 'ambience and decor',
		details: [
			{
				pic: 19,
				name: ' Vaibhav mittal',
				number: '7027042625',
				id: ' vaibhav110347@bits-spree.org ',
				post: 'Spree Coordinator'
			},
			{
				pic: 28,
				name: 'Ritvik Hegde',
				number: '7620214168',
				id: ' ritvik@bits-spree.org ',
				post: 'Chief Coordinator'
			}
		]
	},
	{
		category: 'surveillance',
		details: [
			{
				pic: 11,
				name: 'Jain Amey Manojkumar ',
				number: ' 9850995162 ',
				id: ' amey@bits-spree.org',
				post: 'Chief Coordinator'
			},
			{
				pic: 10,
				name: ' Avinash ',
				number: '8317519594',
				id: 'Avinash_u@bits-spree.org ',
				post: 'Spree Coordinator'
			}
		]
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
						surveillance
					</div>
				</div>
				<div className="photos animated bounceInDown">
					<div>
						<div>
							<img src={require('../assets/team/22.png')} alt="" />
						</div>
						<div className="details">
							<p className="name">Shobhit Saxena</p>
							<p className="post">Convener</p>
							<p className="number">9549304800</p>
							<p className="spree-id" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Team;
