import React, { Component } from 'react';
import Ionicon from 'react-ionicons';
import Textarea from "react-textarea-autosize";

class MessageForm extends Component {

  constructor(props){
    super(props);
    this.state={
      text: ``,
      error: null
    }
  }

  pushMessage(){
    this.props.pushMessage( this.state.text);
    this.setState({
      text: ''
    })

    return this.state.text;
  }

  handleChange(value){
    this.setState({
      text: value
    })
    return value;
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

  isValidMessage(){
    return !this.state.text || this.state.text === '';
  }

  render(){
    return(
      <form disabled={this.props.disabledForm} className="message" onSubmit={ this.pushMessage.bind(this)} onKeyPress={(event) => this.handleTest(event,this)}>
        <div className="textarea">
          <Textarea placeholder="Напишите сообщение..." value={this.state.text} onChange={(event) => this.handleChange(event.target.value)}/>
        </div>
        <button type="submit" className="enter" disabled={this.isValidMessage()} onClick={this.pushMessage.bind(this)}>
          <Ionicon className="plane" icon="ios-paper-plane" fontSize="22px" color="#6490b1"/>
        </button>
      </form>
    );
  }
}

export default MessageForm;