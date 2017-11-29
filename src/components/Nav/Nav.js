import React, { Component } from 'react';
import Ionicon from 'react-ionicons';

import key from '../../keyhole.svg';
import ChatList from '../../containers/ContactsList';

class Nav extends Component {
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
          <button type="button" className="_header-button search-button">
            Поиск
            <Ionicon icon="ios-arrow-forward" fontSize="22px" color="#b9cfe3" className="search-arrow"/>
          </button>
        </header>
        <ChatList />
      </div>
    );
  }
}

export default Nav;