import React, { Component } from 'react';
import { Container } from 'reactstrap';

class Contact extends Component {
	render() {
		return (
			<Container>
				<div className='aboutStyle'>
					<h1>Let's Connect</h1>
				</div>

				<div className='justify-content-center  row'>
					<div className='col-2 m-2 p-2'>
						<a href='https://github.com/MLabreche9' target='blank'>
							<i className='fa fa-github fa-5x icon-contact-style' />
						</a>{' '}
					</div>
					<div className='col-2 m-2 p-2'>
						<a
							href='https://www.linkedin.com/in/meghan-labreche'
							target='blank'
						>
							<i className='fa fa-linkedin fa-5x icon-contact-style' />
						</a>{' '}
					</div>
					<div className='col-2 m-2 p-2'>
						<a href='mailto:mvlabreche@gmail.com' target='blank'>
							<i className='fa fa-envelope fa-5x icon-contact-style' />
						</a>
					</div>
				</div>
			</Container>
		);
	}
}

export default Contact;
