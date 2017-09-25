import React from 'react';
import { Link } from 'react-router-dom';

export default class List extends React.Component {
  state = {
    data: [],
    url: 'https://tiny-lasagna-server.herokuapp.com/collections/blogger/'
  }

  componentDidMount() {
    fetch(this.state.url)
    .then(response => response.json())
    .then(data => {
      this.setState({data: data});
    });
  }

  render() {
    console.log(this.state.data);
    return (
      <div>
        <h3>Show List</h3>
        {this.state.data.map(blog => (
          <div key={blog._id}>
            <Link to={`/show/${blog._id}`}>{blog.blogTitle}</Link>
          </div>
        ))}
      </div>
    )
  }
}
