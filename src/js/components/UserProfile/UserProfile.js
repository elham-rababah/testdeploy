import React from 'react';
import Footer from '../Footer/Footer';
import HeaderWithLogin from '../Header/HeaderWithLogin';
import AllTodoList from './AllTodoList';

export default class UserProfile extends React.Component {
	constructor() {
		super();
		
	}

	render() {
		return (
			<div>
			    <HeaderWithLogin/>
			    <AllTodoList/>
			    <Footer/>
			</div>
		);
	}
}