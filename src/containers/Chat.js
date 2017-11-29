import React from 'react';
import { connect } from 'react-redux';
import Textarea from "react-textarea-autosize";
import Ionicon from 'react-ionicons';
import { Scrollbars } from 'react-custom-scrollbars';

import EmptyList from '../components/Main/emptyList'

const getStatus = (status)=>{
  switch (status){
    case 'new':
      return  <div className="new"></div>;
    case 'read':
      return  <div>
        <Ionicon icon="ios-done-all" fontSize="26px" color="#6490b1" />
      </div>;
    case 'delivered':
      return  <div>
        <Ionicon icon="ios-checkmark" fontSize="26px" color="#6490b1" />
      </div>;
    case 'wait':
      return  <div>
        <Ionicon icon="md-time" fontSize="16px" color="orange" />
      </div>;
    case 'error':
      return  <div>
        <Ionicon icon="ios-alert-outline" fontSize="20px" color="red"/>
      </div>;
    default:
      return status;
  }
}

const pushMessage = (value) =>{
  console.log(value);
  return;
}

var value = '';

const handleChange = (value) =>{
  value = value;
  console.log(value);
  return;
}



const Chat = ({chat}) => {
  console.log(value);
  if (!chat) {
    return <EmptyList />
  }
    return (
      <div className="chat-list">
        <div className="history">
          <Scrollbars className="container-scrollbars" autoHide>
            <ul className="chat">
              {
                chat.chat.map((dialog, index) => (
                  <li key={index}>

                    <div className={'_photo avatar avatar' + (dialog.author === 'you' ? ' my' : '')}>
                      {dialog.author === 'you' ? 'Вы'.toUpperCase() : chat.user.name[0].toUpperCase()}
                    </div>

                    <div className='content'>
                      <div className='author'>{dialog.author === 'you' ? 'Вы' : chat.user.name} <span
                        className='date'>{dialog.date}</span></div>
                      <div className='text-wrapper'>
                        <div className="text">{dialog.text}</div>
                      </div>
                    </div>

                    <div className="status">
                      {getStatus(dialog.status)}
                    </div>
                  </li>
                ))
              }
            </ul>
          </Scrollbars>
        </div>
        <form className="message" onSubmit={ pushMessage.bind(this,value)}>
          <div className="textarea">
            <Textarea placeholder="Напишите сообщение..." defaultValue={value} onChange={(event) => handleChange(event.target.value, 'description')}/>
          </div>
          <button type="submit" className="enter" disabled={!value || value === ''}>
            <Ionicon className="plane" icon="ios-paper-plane" fontSize="22px" color="#6490b1"/>
          </button>
        </form>
      </div>
    )
  };

function mapStateToProps (state) {
  return {
    chat: state.activeChat/*,
    location: state.routing*/
  }
}

export default connect(mapStateToProps)(Chat);