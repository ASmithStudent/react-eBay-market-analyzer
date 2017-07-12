import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import DataList from '../containers/data_list';
import '../assets/stylesheets/style.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <DataList />
      </div>
    );
  }
}
