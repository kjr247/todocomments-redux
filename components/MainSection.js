import React, { Component, PropTypes } from 'react';
import TodoItem from './TodoItem';
import CommentItem from './CommentItem';
import Footer from './Footer';
import TodoTextInput from './TodoTextInput';
import { SHOW_ALL, SHOW_MARKED, SHOW_UNMARKED } from '../constants/TodoFilters';

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_UNMARKED]: todo => !todo.marked,
  [SHOW_MARKED]: todo => todo.marked
};

export default class MainSection extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

  constructor(props, context) {
    super(props, context);
    this.state = { filter: SHOW_ALL };
  }

  handleSave(text) {
    if (text.length !== 0) {
      this.props.actions.addComment(text);
    }
  }

  handleClearMarked() {
    const atLeastOneMarked = this.props.todos.some(todo => todo.marked);
    if (atLeastOneMarked) {
      this.props.actions.clearMarked();
    }
  }

  handleShow(filter) {
    this.setState({ filter });
  }

  render() {
    const { todos, comments, actions } = this.props;
    console.log("todos: ", todos);
    const { filter } = this.state;
    const filteredTodos = todos.filter(TODO_FILTERS[filter]);
    const markedCount = todos.reduce((count, todo) =>
      todo.marked ? count + 1 : count,
      0
    );


    return (
      <section className='main'>
        {this.renderToggleAll(markedCount)}
        <ul className='todo-list'>

          {filteredTodos.map(todo =>
            <TodoItem key={todo.id} todo={todo} {...actions} />
          )}
          <TodoTextInput newTodo={true}
                         onSave={::this.handleSave}
                         placeholder='You got something to say about it?!' />
          {comments.map(comment =>
            <CommentItem key={comment.id} comment={comment} {...actions}/>
          )}
        </ul>
        {this.renderFooter(markedCount)}
      </section>
    );
  }

  renderToggleAll(markedCount) {
    const { todos, actions } = this.props;
    if (todos.length > 0) {
      return (
        <input className='toggle-all'
               type='checkbox'
               checked={markedCount === todos.length}
               onChange={actions.markAll} />
      );
    }
  }

  renderFooter(markedCount) {
    const { todos } = this.props;
    const { filter } = this.state;
    const unmarkedCount = todos.length - markedCount;

    if (todos.length) {
      return (
        <Footer markedCount={markedCount}
                unmarkedCount={unmarkedCount}
                filter={filter}
                onClearMarked={::this.handleClearMarked}
                onShow={::this.handleShow} />
      );
    }
  }
}
