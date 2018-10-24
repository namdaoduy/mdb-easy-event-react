import React, { Component } from "react"
import { Link } from 'react-router-dom'
import "./homeEvent.css"

export default class HomeEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event_id: 1 
    }
  }
  
  render() {
    return (
      <div className="home-event col-lg-4 col-md-6">
        <div className="home-event-inner">
        <Link to={`/event/${this.state.event_id}`}>
          <div className="home-event-img-ctn">
            <img className="home-event-img" src={require("./../../../assets/images/google.jpg")} alt=""></img>
          </div>
          <div className="home-event-des-ctn">
            <h3 className="home-event-des-title">
              [HÀ NỘI] - GOOGLE DIGITAL 4.0
            </h3>
            <div className="home-event-des-footer">
              <div className="home-event-des-place">
                HÀ NỘI
              </div>
              <div className="home-event-des-calendar">
                <div className="home-calendar-month">
                  THÁNG 10
                </div>
                <div className="home-calendar-date">
                  10
                </div>
                <div className="home-calendar-wd">
                  Thứ 6
                </div>
              </div>
            </div>
          </div>
        </Link>
        </div>
      </div>
    )
  }
}