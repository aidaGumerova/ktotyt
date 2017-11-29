export const selectedContact = (chat) =>{
  return{
    type:  'SELECTED_CONTACT',
    payload: chat
  }
};