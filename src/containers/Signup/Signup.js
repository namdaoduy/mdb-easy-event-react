import React, { Component } from "react"
import { Form, Text } from 'informed'
import { Card, CardTitle, Button } from 'mdbreact'
import './signup.css'
import API from './../../services/apis'

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
      error: ""
    }
  }
  
  validateRequired = (value) => {
    return (!value) ? 'This field is required' : null;
  }

  onSubmit = (values) => {
    this.setState({
      disabled: true,
      error: ""
    })
    const { username, password, name, email } = values;
    API.postSignup(username, password, name, email)
    .then(res => {
      this.setState({disabled: false})
      if (res.error) {
        this.setState({error: JSON.stringify(res.error)})
      }
      else if (res.success) {
        this.props.history.push('/login')
      }
    })
  }

  render() {
    return(
      <div className="signup-container">
        <div className="signup-img">
          <img src={require('./../../assets/images/logo.png')} alt=""/>
        </div>
        <Form className="signup-form" id="signup" 
          onSubmit={this.onSubmit}>
        {({ formState }) => (
          <Card className="signup-card">
            <CardTitle className="signup-title">Đăng ký tài khoản</CardTitle>
            <Text type="text" 
              field="username" 
              placeholder=" Username" 
              className={"signup-form-input" + (formState.errors.username ? " error" : "")}
              validate={this.validateRequired}/>
            <Text type="password" 
              field="password" 
              placeholder=" Password" 
              className={"signup-form-input" + (formState.errors.password ? " error" : "")}
              validate={this.validateRequired}/>
            <Text type="text" 
              field="name" 
              placeholder=" Tên đầy đủ" 
              className={"signup-form-input" + (formState.errors.name ? " error" : "")}
              validate={this.validateRequired}/>
            <Text type="email" 
              field="email" 
              placeholder=" Địa chỉ email" 
              className={"signup-form-input" + (formState.errors.email ? " error" : "")}
              validate={this.validateRequired}/>
            <h2 className="signup-error">{this.state.error}</h2>
            <Button 
              type="submit" 
              size="sm" color="yellow" 
              className="signup-submit"
              disabled={this.state.disabled}>
              {this.state.disabled ? "Please Wait ..." : "Đăng ký"}
            </Button>
            <h3 className="signup-h2">Đã có tài khoản? <a href="/login">Đăng nhập</a> để tạo sự kiện ngay!</h3>
          </Card>
        )}
        </Form>
      </div>
    )
  }
}