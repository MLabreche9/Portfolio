import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Pdf from '../Resume/Resume.pdf';

class About extends Component {
	render() {
		return (
			<Container>
				<div className='aboutStyle'>
					<h1> Hello </h1>
					<h3> I am a Full Stack Developer</h3>
					<p> Navigating the layers of syntax and synergy</p>
					<p>
						{' '}
						Download my{' '}
						<button className='resume-button'>
							<a
								href={Pdf}
								page='1'
								target='blank'
								className='text-decoration-none'
							>
								<i className='fa fa-download' /> Resume{' '}
							</a>
						</button>
					</p>
				</div>
				<div className='aboutStyle pl-5 pt-2'>
					<h3> My Skills include the following:</h3>
					<div className='row'>
						<div className='col'>
							<ul>
								<li>Html</li>
								<li>CSS</li>
								<li>Javascript</li>
							</ul>
						</div>
						<div className='col'>
							<ul>
								<li>Bootstrap</li>
								<li>React</li>
								<li>React Native</li>
							</ul>
						</div>
						<div className='col'>
							<ul>
								<li>Redux</li>
								<li>Node.js</li>
								<li>Express.js</li>
							</ul>
						</div>
						<div className='col'>
							<ul>
								<li>MongoDB</li>
								<li>Mongoose</li>
								<li>NPM</li>
							</ul>
						</div>
						<div className='col'>
							<ul>
								<li>VS Code</li>
								<li>Git/Github</li>
								<li>Postman</li>
							</ul>
						</div>
					</div>
					<div className='row mt-2'>
						<h3>My education includes:</h3>
						<p>
							<strong>Nucamp Coding Bootcamp</strong>, Full Stack Web and Mobile
							App Developer
						</p>
						<p>
							<strong>Udemy</strong>-The complete JavaScript Course 2021: From
							Zero to Expert
						</p>
						<p>
							<strong>Udemy</strong>-React-The Complete Guide (incl Hooks, React
							Router, Redux)
						</p>
					</div>
					<div className='row mt-2'>
						<p>
							When I'm not at the computer working through a task, you'll find
							me listening to true crime podcasts, studying personal finance and
							investing, or tackling one of my many woodworking projects
						</p>
					</div>
				</div>
			</Container>
		);
	}
}

export default About;
