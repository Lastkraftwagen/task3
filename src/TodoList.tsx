import React from 'react';
import {IItems as WhateverYouWant} from './App'

class TodoList extends React.Component<WhateverYouWant> {
  render() {
    const {id, text} = this.props;
    return (
      <li id={id.toString()}>
        {text}
      </li>
    );
  }
}

export default TodoList;