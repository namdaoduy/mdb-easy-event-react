import React, { Component } from "react"
import "./home.css"
import { Fa } from 'mdbreact'
import { HomeEvent } from './HomeEvent'
import { NavBar } from './../../components/NavBar'
import { Footer } from './../../components/Footer'
import { Carousel } from './Carousel'
import API from './../../services/apis'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event_list: [],
      search: this.props.match.params.search || null,
      list_title: "Danh sách sự kiện"
    }
  }

  fetchEventList() {
    API.getEventList()
    .then(res => {
      this.setState({event_list: res})
    })
  }

  fetchEventSearch(text) {
    const decoded = decodeURIComponent(text);
    API.postEventSearch(decodeURIComponent(decoded))
    .then(res => {
      this.setState({
        event_list: res,
        list_title: `Tìm kiếm sự kiện "${decoded}"`
      })
    })
  }

  onSearch = (text) => {
    if (text) {
      this.props.history.push('/search/' +  encodeURIComponent(text))
    }
  }

  renderList(list) {
    if (list.length > 0) {
      return list.map((obj) => (<HomeEvent data={obj}/>))
    }
    else {
      return (
        <div className="home-no-event">
          <img src={require('./../../assets/images/logo.png')} alt=""></img>
          <h2>Không có sự kiện nào ☹</h2>
        </div>
      )
    }
    
  }

  componentDidMount() {
    if (this.state.search) {
      this.fetchEventSearch(this.state.search)
    }
    else {
      this.fetchEventList();
    }
  }

  render() {
    return (
      <div className="home">
        <NavBar handleSubmit={this.onSearch.bind(this)}/>
        <Carousel />

        <div id="home-list" className="home-list">
          <h1 className="home-list-title">{this.state.list_title}</h1>
          <div className="row">
            {
              this.renderList(this.state.event_list)
            }
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}