import React, { Component } from "react"
import "./EventCSS.css"

export default class Event extends Component {
  
  render() {
    return (
      <div className="home-event col-lg-4 col-md-6">
        <div className="event-inner">
          <div className="event-img-ctn">
            <img className="event-img" src="https://tkbvn-tokyo.s3.amazonaws.com/Upload/eventcover/2018/08/09/ACB49D.jpg" alt=""></img>
          </div>
          <div className="event-des-ctn">
            <h3 className="event-des-title">
              [HÀ NỘI] - GOOGLE DIGITAL 4.0
            </h3>
            <div className="event-des-footer">
              <div className="event-des-place">
                HÀ NỘI
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}