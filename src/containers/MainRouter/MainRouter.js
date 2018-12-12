import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Home } from "./../Home"
import { Login } from "./../Login"
import { Signup } from "./../Signup"
import { Event } from "./../Event"
import { RegisterForm } from './../RegisterForm'
import { VerifyEmail } from './../VerifyEmail'

export default class MainRouter extends Component {
  render() {
    return(
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/search/:search" render={(props) => <Home key={"home"+Date.now()} {...props}/>}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/event/:event_id" component={Event}/>
          <Route exact path="/registerform/:event_id" component={RegisterForm}/>
          <Route exact path="/verify/:hashed/:guest_email/:event_id" component={VerifyEmail}/>
        </div>
      </Router>
    )
  }
}
