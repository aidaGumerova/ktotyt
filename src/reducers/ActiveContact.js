const initialUserState = null;

export default function (state=initialUserState, action) {
  switch (action.type){
    case 'SELECTED_CONTACT':
      return action.payload;
    default:
      return state;
  }
}