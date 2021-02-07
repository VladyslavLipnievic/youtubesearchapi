import React from "react";

class Search extends React.Component {
  state = { title: "" };
  onSearchChanged = (event) => {
    const _title = event.target.value;
    this.setState({ title: _title });
  };
  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSearch(this.state.title);
  };
  updateField(event) {
    if (
      (event.charCode >= 0 && event.charCode <= 64) ||
      (event.charCode >= 91 && event.charCode <= 96) ||
      (event.charCode >= 123 && event.charCode <= 126)
    ) {
      event.preventDefault();
    }
    this.setState({ limit: 12 });
  }
  render() {
    return (
      <>
        <form onSubmit={this.onSubmit} className="search-form">
          <div className="form-controls">
            <input
              onKeyPress={(event) => this.updateField(event)}
              id="video-search"
              type="text"
              value={this.state.title}
              onChange={this.onSearchChanged}
              placeholder="Enter Search Keyword"
              maxLength="20"
            />

            <input type="submit" value="Search" />
          </div>
        </form>
      </>
    );
  }
}

export default Search;
