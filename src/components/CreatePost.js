import React from 'react';

export default class CreatePost extends React.Component {
  state = {
    authorName: '',
    blogTitle: '',
    blogEntry: ''
  }

  handleAuthor = (e) => {
    this.setState({authorName: e.target.value})
  }

  handleTitle = (e) => {
    this.setState({blogTitle: e.target.value})
  }

  handleEntry = (e) => {
    this.setState({blogEntry: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let item = JSON.stringify(this.state);
    let url = 'https://tiny-lasagna-server.herokuapp.com/collections/blogger/';
    let options = {
      method: 'POST',
      body: item,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    };
    fetch(url, options)
    .then(response => response.json())
    .then(blog => console.log('You successfully posted a blog!'));
    this.setState({authorName: '', blogTitle: '', blogEntry: ''});
  }

  render() {
    return (
      <div>
        <h3>Create a Post</h3>
        <form>
          <label>Author Name</label>
          <input onChange={this.handleAuthor} value={this.state.authorName} name='authorName' />
          <label>Blog Title</label>
          <input onChange={this.handleTitle} value={this.state.blogTitle} name='blogTitle' />
          <label>Blog Entry</label>
          <input onChange={this.handleEntry} value={this.state.blogEntry} name='blogEntry' />
          <button onClick={this.handleSubmit} type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}
