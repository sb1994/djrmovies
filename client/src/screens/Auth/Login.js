import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Login extends Component {
  handleSubmit = (e) => {
    this.props.history.push()
  }
  render() {
    console.log(this.props)

    return (
      <div className='container'>
        <h1>Login Form</h1>

        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            placeholder='Enter User Name'
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            placeholder='Enter Password'
          />
        </div>
        <button className='btn btn-primary' onClick={this.handleSubmit}>
          Login
        </button>
        <Link className='btn btn-primary' to='/register'>
          Sign Up
        </Link>
      </div>
    )
  }
}
export default Login
