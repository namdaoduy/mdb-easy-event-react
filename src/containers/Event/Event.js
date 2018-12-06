import React, { Component } from "react"
import "./event.css"
import { NavBar } from './../../components/NavBar'
import { Footer } from './../../components/Footer'
import { Button, Card, CardBody, CardTitle, CardText } from 'mdbreact'
import { FacebookShareButton } from 'react-share'
import API from './../../services/apis'

export default class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event_id: this.props.match.params.event_id,
      event_name: "",
      event_time: "",
      event_begin_time: "",
      event_end_time: "",
      event_begin_date: "",
      event_end_date: "",
      event_location: "",
      event_location_detail: "",
      event_info: "",
      event_img: null,
      event_type: "",
      event_organizer: "",
      event_contact: {},
      show: false,
    }
  }

  showMore = () => {
    this.setState({
      show: !this.state.show
    })
  }

  fetchEvent() {
    API.postEvent(this.state.event_id)
    .then(res => {
      this.setState({
        event_name: res.name,
        event_time: new Date(res.time.begin_date + " " + res.time.begin_time).toString(),
        event_begin_time: res.time.begin_time,
        event_end_time: res.time.end_time,
        event_begin_date: res.time.begin_date,
        event_end_date: res.time.end_date,
        event_location: res.place,
        event_location_detail: res.address,
        event_info: res.description,
        event_img: res.dataURI,
        event_type: res.type,
        event_organizer: res.organizer,
        event_contact: res.contact
      })
    })
  }

  onSearch = (text) => {
    if (text) {
      this.props.history.push('/search/' +  encodeURIComponent(text))
    }
  }

  componentDidMount() {
    this.fetchEvent();
    console.log(window.location.href)
  }

  render() {
    return (
      <div className="event">
        <NavBar handleSubmit={this.onSearch.bind(this)}/>
        <div className="event-ctn">
          <img src={this.state.event_img} className="event-title-img" alt="" />
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
              <Button color="yellow" className="event-join-btn"
                onClick={() => this.props.history.push("/registerform/" + this.state.event_id)}>
                Tham gia ngay
              </Button>
              <FacebookShareButton
                url={window.location.href}
                quote={"Easy Event - " + this.state.event_name}>
                <Button color="primary" className="event-share-btn">Chia sẻ</Button>
              </FacebookShareButton>
            </div>

          </div>

          <div className="row event-body">
            <div className="col-md-8">
              <Card className="event-main-card">
                <CardBody>
                  <CardTitle>Giới thiệu</CardTitle>
                  <hr />
                  <CardText className={"pre event-card-text" + (this.state.show ? "" : " show-more-hide")}>
                    {this.state.event_info}
                  </CardText>
                  <Button size="sm" outline color="yellow" 
                    className="show-more-btn"
                    onClick={this.showMore}>
                    Show more</Button>
                </CardBody>
              </Card>
            </div>
            <div className="col-md-4">  
              <Card className="event-info-card">
                <CardBody>
                  <CardTitle>Thông tin</CardTitle>
                  <hr />
                  <CardText>
                    <strong>Thể loại:</strong> {this.state.event_type} <br/>
                    <strong>Địa điểm:</strong> {this.state.event_location} <br/>
                    <strong>Địa chỉ:</strong> {this.state.event_location_detail} <br/>
                    <strong>Bắt đầu:</strong> {this.state.event_begin_date + ' ' + this.state.event_begin_time} <br/>
                    <strong>Kết thúc:</strong> {this.state.event_end_date + ' ' + this.state.event_end_time} <br/>
                    <strong>Nhà tổ chức:</strong> {this.state.event_organizer} <br/>
                  </CardText>
                  <hr />
                  <CardText>
                    <strong>Liên hệ</strong> <br/>
                    Email: {this.state.event_contact.email} <br/>
                    Phone: {this.state.event_contact.phone} <br/>
                  </CardText>
                </CardBody>
              </Card>
            </div>


          </div>
        </div>

        <Footer />
      </div>
    )
  }
}