import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';

import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Project from './ProjectsComponent';

class Main extends Component {
	render() {
		const HomePage = () => {
			return <Home />;
		};

		const AboutPage = () => {
			return <About />;
		};

		const ContactPage = () => {
			return <Contact />;
		};

		const ProjectPage = () => {
			return <Project />;
		};

		return (
			<div>
				<Header />
				<Switch>
					<Route path='/home' component={HomePage} />
					<Route path='/about' component={AboutPage} />
					<Route path='/contact' component={ContactPage} />
					<Route path='/projects' component={ProjectPage} />
					<Redirect to='/home' />
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default Main;
