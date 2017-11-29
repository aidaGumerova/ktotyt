import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const isNewMessage = (status) =>{
  switch (status){
    case 'new':
      return  <div className="new"></div>;
    default:
      return '';
  }
}
const ChatLink =({chat, activeChat, onClick})=>(
  <li className={activeChat && activeChat.id === chat.id ? 'active': ''}>
    <Link to={{ pathname: '/chat/'+ chat.id }} onClick={() => onClick(chat)}>
      <div className="_photo photo">
        {chat.user.name[0].toUpperCase()}
      </div>
      <div className="dialog">
        <span className="item-info">{chat.user.name}</span>
        <span className="item-dialog">
          <span className="my">{chat.chat[0].author === 'you' ? 'Вы: ' : ''}</span>{chat.chat[0].text}
        </span>
      </div>
      <div className="history">
        {chat.chat[0].date}
        <span className="status">{isNewMessage(chat.chat[0].status)}</span>
      </div>
    </Link>
  </li>

);

ChatLink.propTypes = {
  chat: PropTypes.object.isRequired,
  activeChat: PropTypes.object,
  onClick: PropTypes.func.isRequired
}

export default ChatLink;