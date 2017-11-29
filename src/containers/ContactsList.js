import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { selectedContact } from '../actions/selectContact'
import ChatList from '../components/Nav/NavBlock'

function mapStateToProps (state) {
  return {
    list: state.contacts.list,
    active: state.activeChat
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      selectedContact: selectedContact
    },
    dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatList)