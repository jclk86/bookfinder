import React, { Component } from "react";

export default class BookDetails extends Component {
  render() {
    const { volumeInfo, saleInfo } = this.props.book;
    return (
      <div>
        <p>{volumeInfo.subtitle}</p>
        <p>
          <a href={saleInfo.buyLink} alt="buy link">
            {saleInfo.buyLink}
          </a>
        </p>
      </div>
    );
  }
}
