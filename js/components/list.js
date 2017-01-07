import React, { Component } from 'react';

export default class List extends Component {
  render() {
    return (
      <div className="list">
        <h1>{ this.props.listTitle }</h1>
        { this.props.cards }
      </div>
    );
  }
}
