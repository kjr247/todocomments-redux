import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as TodoActions from '../actions/TodoActions';
import * as CommentActions from '../actions/CommentActions';


class TodoApp extends Component {
  render() {
    const { todos, actions } = this.props;
    console.log(actions);
    return (
      <div>
        <Header addTodo={actions.addTodo} />
        <MainSection todos={todos} actions={actions} />
      </div>
    );
  }
}

function mapState(state) {
  return {
    todos: state.todos,
    comments: state.comments
  };
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators({ ...TodoActions, ...CommentActions }, dispatch) // returns actions
  };
}

export default connect(mapState, mapDispatch)(TodoApp); // injects state and actions into components
