import React, { Component } from "react";
import BookList from "./components/BookList/BookList";
import Form from "./components/Form/Form";

import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      booklist: [],
      printType: "",
      searchFilter: ""
    };
  }

  setBookList = list => {
    this.setState({ booklist: list });
  };

  render() {
    return (
      <div className="center">
        <header>
          <h1>Book Finder</h1>
        </header>
        <Form setBookList={this.setBookList} />
        <BookList bookList={this.state.booklist} />
      </div>
    );
  }
}
