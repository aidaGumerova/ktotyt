import React from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

import EmptyList from './emptyList';
import Chat from '../../containers/Chat';


const Main = ({chat,location}) => {
  return (
    <div className="main-block">
      <header className="header">
        <button type="button" className="text-box _header-button">
          {chat ? chat.user.name : ''}
          <span className="comment">{chat ? chat.chat[0].date: ''}</span>
        </button>
        <button type="button" className="_header-button">
          Кнопка</button>
        <Link to="/" type="button" className="_header-button" onClick={() => (chat = null)}>
          Назад</Link>
      </header>
      <Route exact path="/" component={EmptyList}/>
      <Route path='/chat/:id' component={Chat} chat={chat}/>
    </div>
  )
};

Main.propTypes = {
  chat: PropTypes.shape({
    id: PropTypes.number,
    startDate: PropTypes.string,
    user: PropTypes.object,
    chat: PropTypes.arrayOf(PropTypes.shape({
      text:PropTypes.string,
      author: PropTypes.string,
    }))
  }),
  location: PropTypes.object.isRequired
}

export default Main;