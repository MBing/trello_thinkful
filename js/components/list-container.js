import React, { Component } from 'react';

import List from './list';

export default class ListContainer extends Component {
  render() {
    return (
      <List
        listTitle={this.props.listTitle}
        cards={this.props.cards}
        onAddSubmit={this.props.onAddSubmit}
        onAddInputChanged={this.props.onAddInputChanged} />
    );
  }
}

