import React, { Component } from 'react';
import Ionicon from 'react-ionicons';

import key from '../../keyhole.svg';
import ChatList from '../../containers/ContactsList';

class Nav extends Component {
  constructor(props){
    super(props);
    this.state = {
      contacts: true
    };
  }

  toggleSearchList(){
    this.setState({
      contacts: !this.state.contacts
    });
  }

  render() {
    return (
      <div className="left-block">
        <header className="header">
          <button type="button" className="header-box _header-button">
            <div className="logo-wrapper">
              <img src={key} className="logo" alt="ктотут" />
            </div>
            <span className="title">KтоТут</span>
          </button>
          <button className="_header-button search-button" onClick={this.toggleSearchList.bind(this)}>
            {this.state.contacts ? 'Поиск' : 'Назад'}
            <Ionicon icon="ios-arrow-forward" fontSize="22px" color="#b9cfe3" className="search-arrow"/>
          </button>
        </header>
        {
          this.state.contacts ?
            <ChatList />:
            <div>Search list</div>
        }

      </div>
    );
  }
}

export default Nav;