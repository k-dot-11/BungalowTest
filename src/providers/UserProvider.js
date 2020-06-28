import React, { Component, createContext } from 'react';
import { auth } from '../firebase/firebase';

export const UserContext = createContext({ user: null });
class UserProvider extends Component {
	state = {
		user: null,
		userMail : '',
	};

	componentDidMount = () => {
		auth.onAuthStateChanged((userAuth) => {
			this.setState({ user: userAuth });
			this.setState({userMail: userAuth.email})
		});
	};
	render() {
		return <UserContext.Provider value={this.state.user , this.state.userMail}>{this.props.children}</UserContext.Provider>;
	}
}
export default UserProvider;
