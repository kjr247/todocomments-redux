import * as types from '../constants/ActionTypes';

export function addComment(text){
  return {
    type: types.ADD_COMMENT,
    text
  };
}
