import React, { Component } from 'react';

class UserItem extends Component {
  render() {
    // To avoid repetitive usage of this.state, we will destructure the state object
    const { login, avatar_url, html_url } = this.props.user;

    return (
      <div className='card text-center'>
        <img
          src={avatar_url}
          alt=''
          className='round-img'
          style={{ width: '60px' }}
        />
        <h3>{login}</h3>
        <div>
          <a href={html_url} className='btn btn-dark btn-sm my-1'>
            Github Profile
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
