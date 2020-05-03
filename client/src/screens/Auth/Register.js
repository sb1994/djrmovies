import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Register extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      email: '',
      password: '',
    }
  }

  handleSubmit = (e) => {
    // this.props.history.push()
    console.log(this.state)
  }
  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  render() {
    return (
      <div className='container'>
        <h1>Register Form</h1>
        {this.state.username}
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            placeholder='Enter User Name'
            name='username'
            value={this.state.username}
            onChange={this.handleInputChange}
          />
        </div>
        {this.state.email}
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            placeholder='Email'
            name='email'
            value={this.state.email}
            onChange={this.handleInputChange}
          />
        </div>
        {this.state.password}
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            placeholder='Enter Password'
            name='password'
            value={this.state.password}
            onChange={this.handleInputChange}
          />
        </div>
        <button className='btn btn-primary' onClick={this.handleSubmit}>
          Register
        </button>
        <Link className='btn btn-primary' to='/login'>
          Login
        </Link>
      </div>
    )
  }
}
export default Register
