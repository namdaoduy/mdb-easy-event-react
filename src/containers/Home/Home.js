import React, { Component } from "react"
import "./home.css"
import { HomeEvent } from './HomeEvent'
import { NavBar } from './../NavBar'
import { Carousel } from './Carousel'

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <NavBar />
        <Carousel />

        <div id="home-list" className="home-list">
          <div className="row">
            <HomeEvent />
            <HomeEvent />
            <HomeEvent />

            <HomeEvent />
            <HomeEvent />
            <HomeEvent />

            <HomeEvent />
            <HomeEvent />
            <HomeEvent />
          </div>
        </div>
      </div>
    )
  }
}