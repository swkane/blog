import React from 'react';
import { NavLink } from 'react-router-dom';

export default class BaseLayout extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <NavLink exact to="/">Blogger</NavLink>
            <NavLink to="/create">Create a Post</NavLink>
            <NavLink to="/show">Show Posts</NavLink>
          </ul>
        </nav>
        {this.props.children}
      </div>
    )
  }
}
