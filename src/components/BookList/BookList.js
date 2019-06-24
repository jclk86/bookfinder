import React, { Component } from "react";
import BookItem from "../BookItem/BookItem";
import "./BookList.css";

export default class BookList extends Component {
  static defaultProps = {
    bookList: []
  };
  render() {
    const bookList = this.props.bookList.map((book, i) => (
      <BookItem {...book} key={book.id} book={book} />
    ));
    return <ul>{bookList}</ul>;
  }
}
