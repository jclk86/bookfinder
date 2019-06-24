import React, { Component } from "react";
import "./BookItem.css";
import BookDetails from "../BookDetails/BookDetails";

export default class BookItem extends Component {
  constructor() {
    super();
    this.state = {
      details: "",
      isHidden: true
    };
  }

  renderDetailsOnClick = () => {
    this.setState({ isHidden: !this.state.isHidden });
  };

  render() {
    const { volumeInfo } = this.props.book;
    return (
      <li onClick={this.renderDetailsOnClick}>
        <h2>{volumeInfo.title}</h2>
        <img
          src={
            volumeInfo.imageLinks !== undefined
              ? `${volumeInfo.imageLinks.thumbnail}`
              : ""
          }
          alt="book"
        />
        <p>{volumeInfo.authors}</p>
        {!this.state.isHidden && <BookDetails book={this.props.book} />}
      </li>
    );
  }
}
