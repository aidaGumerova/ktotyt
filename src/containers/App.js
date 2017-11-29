import React, { Component } from 'react';
import axios from 'axios';

import Nav from '../components/Nav/Nav';
import Main from './Main';
import '../App.css';

class App extends Component {
  componentDidMount() {
	var token = 'ewfwefwefwef';
  let user = localStorage.getItem("user");
  if(!user){

  }


		axios.get('http://ktotyt.su/users/current',
			{
				headers: {
					Authorization: `Bearer ${token}`
				}
			}
		);
		/*

		axios({
			method: 'put',
			url: 'http://ktotyt.su/users/1',
			data: {
				name: 'wefwefw'
			},
			headers: {
				Authorization: `Bearer ${token}`
			}
		});

		axios({
			method: 'post',
			url: 'http://ktotyt.su/users',
			data: {
			name: 'wefwefw'
			},
			headers: {
				Authorization: `Bearer ${token}`
			}
		});

		axios({
			method: 'delete',
			url: 'http://ktotyt.su/users/4',
			headers: {
				Authorization: `Bearer ${token}`
			}
		});
		*/
	
	
		axios({
			method: 'post',
			url: 'http://ktotyt.su/messages',
			data: {
				message: 'wefwefwef'
			},
			headers: {
				Authorization: `Bearer ${token}`
			}
		}).then(response =>{
			console.log(response)
		}).catch(response => {
			console.log(response)
		});
  }
  
  render() {
    return (
      <div className="main-wrapper">
        <Nav />
				<Main/>
      </div>
    );
  }
}

export default App;
