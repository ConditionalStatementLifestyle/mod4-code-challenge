import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";
import Form from "./components/Form";

const URL = 'http://localhost:3005/books'

class App extends Component {

  constructor() {
    super() 

    this.state = {
      allBooks: [],
      shelfBooks: []
    }

    fetch(URL)
    .then(res => res.json())
    .then(json => this.setState({
      allBooks: json
    }))

    this.addToShelf = this.addToShelf.bind(this)
    this.removeBook = this.removeBook.bind(this)
    this.addBook = this.addBook.bind(this)
  }

  addBook(book) {
    let allBooks = this.state.allBooks
    allBooks.push(book)
    debugger
    this.setState({
      allBooks : allBooks
    })
  }

  addToShelf(book) {
    let onShelf = false 
    this.state.shelfBooks.find( function(shelfBook) {
      if (shelfBook.id === book.id){
        onShelf = true
      }})

    if(!onShelf) {
    let books = this.state.shelfBooks
    books.unshift(book)
    this.setState({
      shelfBooks: books
    })
  }
  }

  removeBook(bookToRemove) {
    let currentShelf = this.state.shelfBooks
    let newShelf = []
    currentShelf.map(book => {
      if (book.id !== bookToRemove.id) {
        newShelf.push(book)
      }
    })
    this.setState({
      shelfBooks: newShelf
    })
  }


  render() {
    return (
        <div className="book-container">
          <BookList books={this.state.allBooks} addToShelf={this.addToShelf} addBook={this.addBook} />
          <Bookshelf books={this.state.shelfBooks} removeBook={this.removeBook}/>
        </div>
    );
  }
}

export default App;
