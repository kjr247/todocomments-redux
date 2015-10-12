import { ADD_COMMENT } from '../constants/ActionTypes';

const initialState = [{
  text: "I don't think that is the wisest use of your moneycointhings.jpg!!",
  id: 0
}];

export default function comments(state = initialState, action){
  switch(action.type){
  case ADD_COMMENT:
    return [{
      id: (state.length === 0) ? 0 : state[0].id + 1,
      text: action.text
    }, ...state];
    

  default:
    return state;
  }

}
