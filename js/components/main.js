import React, { Component } from 'react';

import Board from './board';
import Card from './card';
import List from './list';


export default class Main extends Component {
  onAddInputChanged() {
    console.log('changed form input');
  }

  onAddSubmit(event) {
    event.preventDefault();
    console.log('submit form');
  }

  render() {
    let cards = [
      <Card cardText="Some Text here for card 1"/>,
      <Card cardText="Some Text here for card 2"/>,
      <Card cardText="Some Text here for card 3"/>,
    ];

    let cards2 = [
      <Card cardText="Hello card 1"/>,
      <Card cardText="Hello card 2"/>,
      <Card cardText="Hello card 3"/>,
    ];

    let lists = [
      <List listTitle="Development" cards={cards} onAddInputChanged={this.onAddInputChanged} onAddSubmit={this.onAddSubmit} />,
      <List listTitle="Design" cards={cards2} onAddInputChanged={this.onAddInputChanged} onAddSubmit={this.onAddSubmit} />,
    ];

    return (
      <div className="board">
        <Board boardTitle="Sprint 1" lists={lists} />
      </div>
    );
  }
}
