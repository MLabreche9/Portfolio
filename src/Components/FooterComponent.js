import React from 'react';

function Footer(props) {
	return (
		<footer className='footerStyle sticky-bottom'>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-6 col-sm-3'>
						<a
							className='btn btnFooter btn-social-icon '
							href='https://github.com/MLabreche9'
							target='blank'
						>
							<i className='fa fa-github' />
						</a>{' '}
						<a
							className='btn btnFooter btn-social-icon'
							href='https://www.linkedin.com/in/meghan-labreche'
							target='blank'
						>
							<i className='fa fa-linkedin' />
						</a>{' '}
						<a
							className='btn btnFooter btn-social-icon'
							href='mailto:mvlabreche@gmail.com'
							target='blank'
						>
							<i className='fa fa-envelope' />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
