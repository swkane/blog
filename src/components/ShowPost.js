import React from 'react';
import { Link } from 'react-router-dom';

export default class Post extends React.Component {
  state = {
    blog: {}
  }

  componentDidMount() {
    const { _id } = this.props.match.params;
    let url = `https://tiny-lasagna-server.herokuapp.com/collections/blogger/${_id}`;
    fetch(url)
    .then(response => response.json())
    .then(blog => {
      this.setState({blog: blog});
    });
  }

  render() {
    return (
      <div>
        <h4>Title: {this.state.blog.blogTitle}</h4>
        <h6>Author: {this.state.blog.authorName}</h6>
        <h5>Entry: {this.state.blog.blogEntry}</h5>
        <Link to='/show'>Back to Blog List</Link>
      </div>
    )
  }
}
