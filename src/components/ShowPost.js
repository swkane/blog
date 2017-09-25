import React from 'react';
import { Link } from 'react-router-dom';

export default class Post extends React.Component {
  render() {
    return (
      <div>
        This is a post
        <Link to='/show'>Back to Blog List</Link>
      </div>
    )
  }
}
