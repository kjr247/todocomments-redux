import React, { PropTypes, Component } from 'react';
import TodoTextInput from './TodoTextInput';

export default class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  };

  handleSave(text) {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  }

  render() {
    return (
      <header className='header'>
          <h1>Posts and Comments</h1>
          <TodoTextInput newTodo={true}
                         onSave={::this.handleSave}
                         placeholder="What's on your brains?" />
      </header>
    );
  }
}
