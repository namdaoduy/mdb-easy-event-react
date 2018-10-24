import React, { Component } from "react"
import "./event.css"
import { NavBar } from './../../components/NavBar'
import { Button } from 'mdbreact'

export default class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event_id: this.props.match.params.event_id,
      event_name: "[HÀ NỘI] - GOOGLE DIGITAL 4.0",
      event_time: "Thứ 6, 10 Tháng 8 2018 - Thứ 2, 31 Tháng 12 2018 (09:00 AM - 12:00 AM)",
      event_location: "YNest Co-working Space",
      event_location_detail: "Lầu 4 - Trung tâm thương mại V+ - số 505 Minh Khai, P.Vĩnh Tuy, Q. Hai Bà Trưng, Hà Nội., Quận Hai Bà Trưng, Thành Phố Hà Nội"
    }
  }

  render() {
    return (
      <div className="event">
        <NavBar />
        <div className="event-ctn">
          <img src={require('./../../assets/images/google.jpg')} className="event-title-img" alt="" />
          <div className="row">

            <div className="col-lg-8 col-md-6">
              <h2 className="h2-responsive event-name">{this.state.event_name}</h2>
              <div className="row">
                <i className="fa fa-calendar event-icon"></i>
                <div className="col">
                  <h5>{this.state.event_time}</h5>
                </div>
              </div>
              <div className="row">
                <i className="fa fa-map-marker event-icon"></i>
                <div className="col">
                  <h5>{this.state.event_location}</h5>
                  <h6>{this.state.event_location_detail}</h6>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <Button color="yellow" className="event-join-btn">Tham gia ngay</Button>
              <Button outline color="info" className="event-share-btn">Chia sẻ</Button>
            </div>

          </div>
        </div>
      </div>
    )
  }
}