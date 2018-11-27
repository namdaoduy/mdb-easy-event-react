import React, { Component } from "react"
import { Link } from 'react-router-dom'
import { Server } from './../../../configs/server'
import "./homeEvent.css"

// eslint-disable-next-line no-extend-native
Date.prototype.getWeekDay = function() {
  var weekday = ["Chủ Nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];
  return weekday[this.getDay()];
}

export default class HomeEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event_id: this.props.data._id,
      event_name: this.props.data.name || "",
      event_place: this.props.data.place || "",
      event_time: new Date(this.props.data.time.begin_date) || new Date(),
      event_img: this.props.data.dataURI || null
    }
  }
  
  render() {
    return (
      <div className="home-event col-lg-4 col-md-6">
        <div className="home-event-inner">
        <Link to={`/event/${this.state.event_id}`}>
          <div className="home-event-img-ctn">
            <img className="home-event-img" src={this.state.event_img} alt=""></img>
          </div>
          <div className="home-event-des-ctn">
            <h3 className="home-event-des-title">
              {this.state.event_name.toUpperCase()}
            </h3>
            <div className="home-event-des-footer">
              <div className="home-event-des-place">
                {this.state.event_place}
              </div>
              <div className="home-event-des-calendar">
                <div className="home-calendar-month">
                  {"Tháng " + this.state.event_time.getMonth()}
                </div>
                <div className="home-calendar-date">
                  {this.state.event_time.getDate()}
                </div>
                <div className="home-calendar-wd">
                  {this.state.event_time.getWeekDay()}
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