import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import PropTypes from 'prop-types';
import ChatLink from './Contact';

const NavBlock = ({list, active, selectedContact}) => (
  <div className="nav-block">
    <Scrollbars
      autoHide>
      <ul className="dialog-list">
        {
          list.map((item)=>(
            <ChatLink key={item.id} chat={item} activeChat={active} onClick={selectedContact}/>
          ))
        }
      </ul>
    </Scrollbars>
  </div>
)

NavBlock.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    startDate: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
    chat: PropTypes.arrayOf(PropTypes.shape({
      text:PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }).isRequired)
  }).isRequired).isRequired,
  active: PropTypes.object,
  selectedContact: PropTypes.func.isRequired
}

export default NavBlock;