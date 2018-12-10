import React, { Component } from "react"
import "./footer.css"
import { Fa } from 'mdbreact';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="row footer-row-1">
          <div className="col-md-3">
            <img className="footer-logo" src={require('./../../assets/images/logo.png')} alt=""></img>
          </div>
          <div className="col-md-3">
            <h5>Easy Event</h5>
            <p>
              Best web app for free-fast-fun events organization
            </p>
          </div>
          <div className="col-md-3">
            <h5>Development Stack</h5>
            <ul>
              <li>React</li>
              <li>ExpressJS</li>
              <li>MongoDB</li>
              <li>React Native</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Follow us</h5>
            <a href="/"><Fa icon="facebook"/></a>
            <a href="/"><Fa icon="linkedin"/></a>
            <a href="/"><Fa icon="github"/></a>
            <span>namdaoduy</span>
            <br />
            <a href="/"><Fa icon="facebook"/></a>
            <a href="/"><Fa icon="linkedin"/></a>
            <a href="/"><Fa icon="github"/></a>
            <span>SpQuyt</span>
          </div>
        </div>
        <div className="row footer-row-2">
          <h6>Copyright © 2018 namdaoduy - SpQuyt. All rights reserved.</h6>
        </div>
      </div>
    )
  }
}