import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchData, isFetching } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: ''};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    if (this.state.term.trim() != '') {
      this.props.isFetching();
      this.props.fetchData(this.state.term);
    }
  }

  render() {
    return (
      <div>
        <div className="col-lg-12 col-xs-12 cancelPadding">
          <div className="appName">
            <h3>eBay Market Analyzer</h3>
          </div>
          <div className="iconWrap">
            <a className="iconLink" href="https://www.linkedin.com/in/bicheng-xu-ab262296/" target="_blank">
            <i className="fa fa-linkedin icons fa-2x"></i>
            </a>
            <a className="iconLink" href="https://github.com/uxxSam?tab=repositories" target="_blank">
            <i className="fa fa-github icons fa-2x"></i>
            </a>
          </div>
        </div>
      <form onSubmit={this.onFormSubmit} className="input-group">
      <input
        placeholder="Enter the item you want to look up on Ebay"
        className="form-control"
        value={this.state.term}
        onChange={this.onInputChange}
        autoFocus />
      <span className="input-group-btn">
        <button type="submit" className="btn btn-secondary">Analyze</button>
      </span>
      </form>
    </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchData,isFetching }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
