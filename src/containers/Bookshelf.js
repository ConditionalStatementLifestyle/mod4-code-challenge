import React from "react";
import Book from "../components/Book";

class Bookshelf extends React.Component {

  constructor() {
    super() 

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(book) {
    this.props.removeBook(book)
  }

  render(){
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{this.props.books.map(book => {
        return <Book book={book} handleClick={this.handleClick}/>
      })}</ul>
    </div>
  );
  }
};

export default Bookshelf;
