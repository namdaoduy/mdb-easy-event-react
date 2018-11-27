import React, { Component } from "react"
import "./home.css"
import { HomeEvent } from './HomeEvent'
import { NavBar } from './../../components/NavBar'
import { Carousel } from './Carousel'
import API from './../../services/apis'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event_list: []
    }
  }

  fetchEventList() {
    API.getEventList()
    .then(res => {
      this.setState({event_list: res})
    })
  }

  renderList(list) {
    return list.map((obj) => (
        <HomeEvent data={obj}/>
    ))
  }

  componentDidMount() {
    this.fetchEventList();
  }

  render() {
    return (
      <div className="home">
        <NavBar />
        <Carousel />

        <div id="home-list" className="home-list">
          <div className="row">
            {
              this.renderList(this.state.event_list)
            }
          </div>
        </div>
      </div>
    )
  }
}