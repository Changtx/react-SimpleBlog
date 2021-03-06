import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index.js';
import { Link } from 'react-router';

class PostsIndex extends Component {
  //lifecycle function only called once
  componentWillMount() {
    this.props.fetchPosts();
  }

  render () {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="posts/new" className="btn btn-primary">
            Add posts
          </Link>
        </div>

        List of blog posts
      </div>
    );
  };
}

export default connect(null, { fetchPosts: fetchPosts })(PostsIndex);