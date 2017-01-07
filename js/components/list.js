import React, { Component } from 'react';

export default class List extends Component {
  render() {
    return (
      <div className="list">
        <h1>{ this.props.listTitle }</h1>
        { this.props.cards }
        <form onSubmit={this.props.onAddSubmit}>
          <input type="text" onChange={this.props.onAddInputChanged} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
