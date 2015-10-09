import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import TodoTextInput from './TodoTextInput';


export default class CommentItem extends Component {

render(){
  const { comment } = this.props;
  element = (
    <div className='view'>
      <input checked={todo.marked}
             onChange={() => markTodo(todo.id)} />
      <label >
        {comment.text}
      </label>
    </div>
  );

  return (
    <li>
      {element}
    </li>
  );
}
