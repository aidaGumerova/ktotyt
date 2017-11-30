import React, { Component } from 'react';
import axios from 'axios';
//import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import Ionicon from 'react-ionicons';
import { Scrollbars } from 'react-custom-scrollbars';

import MessageForm from './MessageForm';

class Chat extends Component {
  constructor(props){
    super(props);
    this.state={
      text: ``,
      chat: {
        id: props.match.params.id,
        startDate: new Date().toDateString(),
      },
      isLoadingMessages: true,
      messages: [],
      error: null,
      selectedMessages: []
    }
  }

  componentDidMount(){
    this.getChat();
  }

  getChat(chatId){
    var token = 'ewfwefwefwef';
    this.setState({
      isLoadingMessages: true
    })
    axios({
      method: 'get',
      url: 'http://ktotyt.com/messages',
      params: {sort: '-id'},
      data: {
        message: 'wefwefwef'
      },
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(response =>{
      this.setState({
        messages: response.data,
        isLoadingMessages: false
      })
      console.log('getChat', response.data);

    }).catch(error => {
      console.log('catch-messages', error);
      this.setState({
        isLoadingMessages: false,
        error: error
      })
    });
  }

  componentWillReceiveProps(nextProps) {
   var nextChatId = nextProps.match.params.id;
    if (nextChatId !== this.props.match.params.id) {
      this.getChat(nextChatId);
    }
  }

  toggleSelectMessage(id=null){
    console.log(id,this.state.selectedMessages);
    var messages = this.state.selectedMessages;
    if(id){
      if(messages.indexOf(id) == -1){
        messages.push(id)
      }else{
        messages.splice(messages.indexOf(id), 1);
      }
      this.setState({
        selectedMessages: messages
      })
      console.log(this.state.selectedMessages)
    }

      /*axios({
        method: 'delete',
        url: `http://ktotyt.com/messages/${id}`,
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(response =>{
        console.log('pushMessage',response);
        this.getChat();
      }).catch(error => {
        console.log('pushMessage-catch', error);
        this.setState({
          error: error
        })
      });
    }*/
  }

  getStatus(status){
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

  pushMessage(value){
    this.setState({
      isLoadingMessages: true
    })
    var token = 'ewfwefwefwef';
    axios({
      method: 'post',
      url: 'http://ktotyt.com/messages',
      data: {
        message: value
      },
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(response =>{
      console.log('pushMessage',response);
      this.getChat();
    }).catch(error => {
      console.log('pushMessage-catch', error);
      this.setState({
        error: error
      })
    });

    return this.state;
  }

  isSelectedMessage(messageId){
   return this.state.selectedMessages.indexOf(messageId) !== -1;
  }

  messagePhoto(message){
    if(this.isSelectedMessage(message.id)){
      return (<Ionicon icon="md-checkmark" fontSize="26px" color="#ffffff"/>);
    }else{
      return message.author === 'you' ? 'Вы'.toUpperCase() : 'Незнакомец'[0].toUpperCase();
    }
  }


  render(){
    if (this.state.isLoadingMessages) {
      return (<div className="loader">
        <Ionicon icon="ios-refresh" fontSize="60px" color="#347eff" rotate={true}/>
      </div>);
    }
    //let chat = this.state.chat;
    return (
      <div className="chat-list">
        <div className="history">
          <Scrollbars className="container-scrollbars" autoHide>
            <ul className="chat">
              {
                this.state.messages ?
                  this.state.messages.map((dialog, index) => (
                  <li key={dialog.id}>

                    <div className={'_photo avatar avatar' + (dialog.author === 'you' ? ' my' : '')} onClick={this.toggleSelectMessage.bind(this,dialog.id)}>
                      {this.messagePhoto(dialog)}
                    </div>

                    <div className='content'>
                      <div className='author'>{dialog.author === 'you' ? 'Вы' : 'Незнакомец'} <span
                        className='date'>{dialog.created_time}</span></div>
                      <div className='text-wrapper'>
                        <div className="text">{dialog.message}</div>
                      </div>
                    </div>

                    <div className="status">
                      {this.getStatus(dialog.status)}
                    </div>
                  </li>
                )):
                  ''
              }
            </ul>
          </Scrollbars>
        </div>
        <MessageForm pushMessage={this.pushMessage.bind(this)} disabledForm={this.state.isLoadingMessages}/>
      </div>
    )
  }
};

/*function mapStateToProps (state) {
  return {
    list: state.contacts.list,
    active: state.activeChat
  }
}*/

export default /*connect (mapStateToProps)(*/Chat/*)*/;