import React from "react";

class Form extends React.Component {

  constructor() {
    super() 
    this.state = {
      title: '',
      author: '',
      img: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.clearForm = this.clearForm.bind(this)
  }


  clearForm() {
    this.setState({
      title: '',
      author: '',
      img: ''
    })
  }

  handleChange(ev) {
    let name = ev.target.name
    let value = ev.target.value
    this.setState({
      [name] : value
    })
  }

  handleSubmit(ev) {
    ev.preventDefault()
    this.props.addBook(this.state)
    this.clearForm()
  }

  render() {
    return (
      <div>
        <h2>Add A Book</h2>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='title' value={this.state.title} onChange={this.handleChange} placeholder='Title'/>
          <input type='text' name='author' value={this.state.author} onChange={this.handleChange} placeholder='Author'/>
          <input type='text' name='img' value={this.state.img} onChange={this.handleChange} placeholder='Image Url'/>
          <input type='submit'/>
        </form>
      </div>
    )
  }
}

export default Form;
