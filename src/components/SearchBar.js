import React from "react";
import "./VideoItem.css";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui small menu">
        <div className="header item">
          <h3>TakaStream</h3>
        </div>
        <div className="item">
          <form onSubmit={this.onFormSubmit} className="ui form">
            <div className="field">
              <input
                type="text"
                value={this.state.term}
                onChange={this.onInputChange}
                size="77"
                placeholder="Search"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
