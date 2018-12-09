import React, { Component } from "react"
import { Form, Text } from 'informed'
import { Card, CardBody, CardText, CardTitle, Button, Input} from 'mdbreact'
import './login.css'

export default class Login extends Component {

  onSubmit = (e) => {
    e.preventDefault();
    console.log('hi')
  }

  render() {
    return(
      <div className="login-container">
        <div className="login-img">
          <img src={require('./../../assets/images/logo.png')} />
        </div>
        <form className="login-form" id="login" onSubmit={this.onSubmit}>
          <Card className="login-card">
            <CardTitle className="login-title">Đăng nhập</CardTitle>
            <Input type="text" field="username" placeHolder="Username"/>
            <Input type="password" name="password" placeHolder="Password"/>
            <Button type="submit" size="sm" color="yellow" className="login-submit">Đăng nhập</Button>
          </Card>
        </form>
      </div>
    )
  }
}