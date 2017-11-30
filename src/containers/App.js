import React, { Component } from 'react';
import axios from 'axios';
import Ionicon from 'react-ionicons';

import Nav from '../components/Nav/Nav';
import Main from './Main';
import '../App.css';

class App extends Component {
	constructor(props){
		super(props);
    this.state = {
      isLoadingUser: true,
      user: null
    };
	}
  componentDidMount() {
	var token = 'ewfwefwefwef';
  let user = localStorage.getItem("user");
  const getUser = (id=1) => {
		axios({
			method: 'get',
			url: `http://ktotyt.com/users/${id}`,
			headers: {
				Authorization: `Bearer ${token}`
			}
		}).then(response =>{
			console.log('localStorage', response);
			this.setState({
				isLoadingUser: false,
				user: response
			})
		}).catch(error => {
			console.log('localStorage-catch', error);
			this.setState({
				isLoadingUser: false,
				user: null
			})
		});
	}
	!user ? getUser() : getUser(user.id);

		/*axios.get('http://ktotyt.com/users/current',
			{
				headers: {
					Authorization: `Bearer ${token}`
				}
			}
		);
		/*

		axios({
			method: 'put',
			url: 'http://ktotyt.com/users/1',
			data: {
				name: 'wefwefw'
			},
			headers: {
				Authorization: `Bearer ${token}`
			}
		});

		axios({
			method: 'post',
			url: 'http://ktotyt.com/users',
			data: {
				name: 'wefwefw'
			},
			headers: {
				Authorization: `Bearer ${token}`
			}
		});

		axios({
			method: 'delete',
			url: 'http://ktotyt.com/users/4',
			headers: {
				Authorization: `Bearer ${token}`
			}
		});
		*/
  }

  getLoader(){
		return (<div className="main-wrapper">
			<div className="loader">
			<Ionicon icon="ios-refresh" fontSize="60px" color="#347eff" rotate={true} />
			</div>
		</div>)
	}

	getContext(){
    return (<div className="main-wrapper">
			<Nav />
			<Main/>
		</div>);
	}
  render() {
    return this.state.isLoadingUser ? this.getLoader() : this.getContext();
  }
}

export default App;
