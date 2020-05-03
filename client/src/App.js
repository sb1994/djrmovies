// import React from 'react'
import React, { Component, Fragment } from 'react'
import axios from 'axios'
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom'

//user screens
import Login from './screens/Auth/Login'
import Register from './screens/Auth/Register'
import Landing from './screens/Landing/Landing'
import MovieDetail from './screens/Movie/MovieDetail'
import MovieSearch from './screens/Movie/MovieSearch'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          {/* <Navigation /> */}
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/movie/search' component={MovieSearch} />
            <Route exact path='/movie/:id' component={MovieDetail} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    )
  }
}

export default App
