import React, { Component } from 'react';

class Search extends Component {
  state = {
    text: '',
  };

  // this.setState({ text: e.target.value });
  // This will require us to look for every property of input and to change it if we want
  // However, if we use [e.target.name] we can target everything that belongs to the name property
  // For example, if we change the name to 'email' it will still target the appropriate input.

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.text);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search Users...'
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
      </div>
    );
  }
}

export default Search;