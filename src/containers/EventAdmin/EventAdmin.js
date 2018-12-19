import React, { Component } from "react"
import './admin.css'
import {
  Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink
} from 'mdbreact'
import AddEventForm from './AddEventForm'
import { Footer } from './../../components/Footer'

export default class EventAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      value: ""
    };
    this.onClick = this.onClick.bind(this);
    this.handleSubmit = this.props.handleSubmit;
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return(
      <div className="admin-container">
        <Navbar color="warning-color" light expand="md" scrolling>
          <NavbarBrand href="/">
            <img className="brand-img" src={require("./../../assets/images/logo.png")} alt=""></img>
          </NavbarBrand>
          <NavLink to="/" className="nav-title">Admin</NavLink>
          {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
          <Collapse isOpen={this.state.collapse} navbar>
            <NavbarNav left>
              <NavItem>
                <NavLink to="#" className="nav-custom">Danh sách sự kiện</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#" className="nav-custom">Tạo sự kiện</NavLink>
              </NavItem>
            </NavbarNav>
            <NavbarNav right>
              <NavItem>
                <NavLink to="/login">Đăng xuất</NavLink>
              </NavItem>
            </NavbarNav>
          </Collapse>
        </Navbar>

        <div className="admin-inner">
          <AddEventForm />
        </div>

        <Footer />
      </div>
    )
  }
}

