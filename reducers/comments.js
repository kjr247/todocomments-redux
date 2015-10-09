import { ADD_COMMENT } from '../constants/ActionTypes';

const initialState = [{
  text: 'I am going to buy Atomics!!',
  id: 0
}];

export default function comments(state = initialState, action){
  switch(action.types){
  case ADD_COMMENT:
    return [{
      id: (state.length === 0) ? 0 : state[0].id + 1,
      text: action.text
    }, ...state];

  default:
    return state;
  }

}
