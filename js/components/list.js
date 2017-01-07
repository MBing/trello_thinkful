import React, { Component } from 'react';

import Card from './card';

export default class List extends Component {
  render() {
    let cards = [];

    for (let i = 0; i < 3; i += 1) {
      cards.push(<Card/>);
    }
    return (
      <div className="list">{ cards }</div>
    );
  }
}
