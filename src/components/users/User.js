import React, { Component } from 'react';

class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  render() {
    const {
      name,
      avatar_url,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
    } = this.props.user;
    console.log(this.props.user.login);
    const { loading } = this.props;
    return <div>{login}</div>;
  }
}

export default User;
