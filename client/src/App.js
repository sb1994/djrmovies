// import React from 'react'
import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {
  componentDidMount() {
    axios
      .get('/api/programmers/')
      .then((re) => {
        console.log(re.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  render() {
    return (
      <div>
        <h1>I Exist</h1>
      </div>
    )
  }
}

export default App
