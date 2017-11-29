import React from 'react'
import { connect } from 'react-redux'
//import { bindActionCreators } from 'redux'

//import { selectedContact } from '../actions/selectedContact'
import Main from '../components/Main/Main';

function mapStateToProps (state) {
  return {
    chat: state.activeChat,
    location: state.routing
  }
}

/*function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      selectedContact: selectedContact
    },
    dispatch);
}*/

export default connect(mapStateToProps)(Main)