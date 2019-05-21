import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {

  constructor() {
    super() 

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(book) {
    this.props.addToShelf(book)
  }

  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form addBook={this.props.addBook}/>
        <ul>{this.props.books.map(book => {
          return <Book book={book} handleClick={this.handleClick}/>
        })}</ul>
      </div>
    );
  }
}

export default BookList;
