import React, { Component } from "react"
import "./navbar.css"
import {
  Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'mdbreact'

export default class Home extends Component {
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

  onSubmit = (e) => {
    if (e.key === 'Enter') {
      this.handleSubmit(this.state.value)
    }
  }

  render() {
    return (
      <Navbar color="warning-color" light expand="md" scrolling>
        <NavbarBrand href="/">
          <img className="brand-img" src={require("./../../assets/images/logo.png")} alt=""></img>
        </NavbarBrand>
        <NavLink to="/" className="nav-title">Easy Event</NavLink>
        {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
        <Collapse isOpen={this.state.collapse} navbar>
          <NavbarNav left>
            <NavItem>
              <NavLink to="#" className="nav-custom">Tham gia</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="#" className="nav-custom">Tạo sự kiện</NavLink>
            </NavItem>
            <NavItem>
              <Dropdown>
                <DropdownToggle nav caret className="nav-custom">Thể loại</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem href="#">Mới nhất</DropdownItem>
                  <DropdownItem href="#">Phổ biến nhất</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href="#">Công nghệ</DropdownItem>
                  <DropdownItem href="#">Hội thảo</DropdownItem>
                  <DropdownItem href="#">Giải trí</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavItem>
          </NavbarNav>
          <NavbarNav right>
            <NavItem>
              <input className="form-control" type="text" placeholder="Search" aria-label="Search" 
                onChange={e => this.setState({value: e.target.value})}
                onKeyPress={e => { this.onSubmit(e) }}
              />
            </NavItem>
            <NavItem>
              <NavLink to="#">Đăng nhập</NavLink>
            </NavItem>
          </NavbarNav>
        </Collapse>
      </Navbar>
    )
  }
}