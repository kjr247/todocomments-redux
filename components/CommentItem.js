import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import TodoTextInput from './TodoTextInput';


export default class CommentItem extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired,
  };
  render(){
      const { comment } = this.props;
      let element = (
        <div className='view'>
          <label >
            {comment}
          </label>
        </div>
      );

    return (
      <li>
        {element}
      </li>
    );
  }
}
