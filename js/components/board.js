import React, { Component } from 'react';

export default class Board extends Component {
  render() {
    return (
      <div className="board">
        <h1>{ this.props.boardTitle }</h1>
        { this.props.lists }
      </div>
    );
  }
}
