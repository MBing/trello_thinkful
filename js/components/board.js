import React, { Component } from 'react';

import List from './list';

export default class Board extends Component {
  render() {
    let board = [];

    for (let i = 0; i < 3; i += 1) {
      board.push(<List />);
    }
    return (
      <div className="board">{ board }</div>
    );
  }
}
