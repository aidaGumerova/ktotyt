import React, { Component } from 'react';
import axios from 'axios';
//import { connect } from 'react-redux'
import Textarea from "react-textarea-autosize";
import Ionicon from 'react-ionicons';
import { Scrollbars } from 'react-custom-scrollbars';

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
      messages: []
    }
  }

  componentDidMount(){
    this.getChat();
  }

  getChat(chatId){
    var token = 'ewfwefwefwef';

    axios({
      method: 'get',
      url: 'http://ktotyt.com/messages',
      data: {
        message: 'wefwefwef'
      },
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(response =>{
      console.log('messages chat', response);
      this.setState({
        messages: response.data,
        isLoadingMessages: false
      })

    }).catch(error => {
      console.log('catch-messages', error);
    });
  }

  componentWillReceiveProps(nextProps) {
   var nextChatId = nextProps.match.params.id;
    if (nextChatId !== this.props.match.params.id) {
      this.getChat(nextChatId);
      /*this.setState({
        text: '',
        chat: {
          id: this.props.match.params.id,
          startDate: new Date().toDateString(),
          chat: []
        }
      })*/
    }
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
    let chat = {...this.state.chat};
    chat.chat.push( {
      text: value,
      author: 'you',
      date: new Date().toDateString(),
      status: 'new'
    })
    this.setState({
      chat: chat,
      text: ''
    })

    return this.state;
  }

  handleTest(e) {
    if (e.charCode === 13 || e.keyCode === 13) {
      if(!this.state.text){
        e.preventDefault();
        return;
      }
      if(!e.shiftKey){
        e.preventDefault()
        this.pushMessage(this.state.text);
        return this.state.text;
      }
    }
  }

  handleChange(value){
    this.setState({
      text: value
    })
    return value;
  }

  render(){
    if (this.state.isLoadingMessages) {
      return (<div className="loader">
        <Ionicon icon="ios-refresh" fontSize="60px" color="#347eff" rotate={true} />
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
                  <li key={index}>

                    <div className={'_photo avatar avatar' + (dialog.author === 'you' ? ' my' : '')}>
                      {dialog.author === 'you' ? 'Вы'.toUpperCase() : 'Незнакомец'[0].toUpperCase()}
                    </div>

                    <div className='content'>
                      <div className='author'>{dialog.author === 'you' ? 'Вы' : 'Незнакомец'} <span
                        className='date'>{dialog.date}</span></div>
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
        <form className="message" onSubmit={ this.pushMessage.bind(this,this.state.text)} onKeyPress={(event) => this.handleTest(event,this)}>
          <div className="textarea">
            <Textarea placeholder="Напишите сообщение..." value={this.state.text} onChange={(event) => this.handleChange(event.target.value)}/>
          </div>
          <button type="submit" className="enter" disabled={!this.state.text || this.state.text === ''} onClick={this.pushMessage.bind(this,this.state.text)}>
            <Ionicon className="plane" icon="ios-paper-plane" fontSize="22px" color="#6490b1"/>
          </button>
        </form>
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