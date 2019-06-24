import React, { Component } from "react";
import "./Form.css";

const apiKey = `AIzaSyCFlgvXsaF3aL5dJ_KTmlKG3SbqsL2vrb8`;
const baseURL = `https://www.googleapis.com/books/v1/volumes`;

export default class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      printType: "all",
      filter: "full",
      query: "",
      booklist: []
    };
  }

  handlePrintTypeChange = event => {
    this.setState({ printType: event.target.value });
  };

  handleBookTypeChange = event => {
    this.setState({ filter: event.target.value });
  };

  handleSearchChange = event => {
    this.setState({ query: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const params = {
      printType: this.state.printType,
      filter: this.state.filter,
      key: apiKey,
      q: this.state.query
    };

    const queryString = formatQueryParams(params);
    const url = baseURL + "?" + queryString;
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error("Couldn't find search. Try again");
        }
        return response.json();
      })
      .then(data => {
        this.setState({
          printType: "all",
          filter: "full",
          query: "",
          booklist: data.items
        });
        this.props.setBookList(this.state.booklist);
      })
      .catch(err => {
        this.setState({ error: err.message });
      });
  };

  render() {
    return (
      <form className="center" onSubmit={this.handleSubmit}>
        <label>Search: </label>
        <input
          type="text"
          placeholder="Search Title"
          name="search"
          onChange={this.handleSearchChange}
          value={this.state.query}
          required
        />
        <button type="submit">Search</button>
        <label>Print Type: </label>
        <select
          name="Print Type"
          onChange={this.handlePrintTypeChange}
          value={this.state.printType}
        >
          <option defaultValue="all">All</option>
          <option value="books">Book</option>
          <option value="magazines">Magazines</option>
        </select>
        <select
          name="filter"
          onChange={this.handleBookTypeChange}
          value={this.state.filter}
        >
          <option defaultValue="full">Full Text</option>
          <option value="partial">Partial Text</option>
          <option value="free-ebooks">Free Ebooks</option>
          <option value="paid-ebooks">Paid Ebooks</option>
          <option value="ebooks">Ebooks Only</option>
        </select>
      </form>
    );
  }
}

function formatQueryParams(params) {
  const queryItems = Object.keys(params).map(
    key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
  );
  return queryItems.join("&");
}
