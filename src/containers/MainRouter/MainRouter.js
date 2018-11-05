import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Home } from "./../Home"
import { Login } from "./../Login"
import { Event } from "./../Event"
import { RegisterForm } from './../RegisterForm'

export default class MainRouter extends Component {
  render() {
    return(
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/event/:event_id" component={Event}/>
          <Route exact path="/registerform/:event_id" component={RegisterForm}/>
        </div>
      </Router>
    )
  }
}
